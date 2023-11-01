#!/bin/perl

print << "ENDBLOCK";

<html>
<head>
<title>ImageMagick Filters</title>
<link href="styles.css" rel="stylesheet" type="text/css">
</head>
<body>
<h1>ImageMagick Resize Filters</h1>
<p>This page demonstrates the results of resampling three images using the various resize filters and blur settings available in ImageMagick, and the file size of the resulting thumbnail images. Click the image filename at the top of each section to see the fullsize image.</p>
<p>Results produced using PerlMagick 5.4.0 under Windows 2000, using this <a href="filters.pl">Perlmagick script</a></p>
<p><a href="http://www.dylanbeattie.net/magick/">Home</a></p>
<hr>
<h1>The Results</h1>

ENDBLOCK
use Image::Magick;

print "<table cellpadding=\"5\" border=\"1\">";
print "<tr><td>Filter:</td>";
my $colcount = 1;
for (my $blur = 0.125; $blur <= 4; $blur *= 2) {
	print "<td>Blur $blur</td>";
	$colcount++;
}
my $filesize;
my $quality = 85;
foreach $imagefile (glob("*.jpg *.gif")) {
	print("<tr><td colspan=\"$colcount\"><a href=\"$imagefile\">$imagefile</a> (Click for original image)</td></tr>");
	foreach $filter (Point, Box, Triangle, Hermite, Hanning, Hamming, Blackman, Gaussian, Quadratic, Cubic, Catrom, Mitchell, Lanczos, Bessel, Sinc) {
		print "<tr><td>$filter</td>";
		for (my $blur = 0.125; $blur <=4; $blur *= 2) {
			warn("Writing filtered/$filter\_$blur\_$imagefile\n");
			my $image = new Image::Magick;
			$image->Read($imagefile);
			$image->Resize(geometry=>'128x128', filter=>"$filter", blur=>$blur);
			$image->Set(quality=>$quality);
			$image->Write("jpg:filtered/$filter\_$blur\_$imagefile");
			$filesize = ((stat("filtered/$filter\_$blur\_$imagefile"))[7])/1024;
			$filesize = int($filesize*100)/100;
			print "<td bgcolor=\"#cccccc\"><img src=\"filtered/$filter\_$blur\_$imagefile\"><br>$filesize Kb</td>";
			undef $image;			
		}
		print "</tr>";
	}
}

