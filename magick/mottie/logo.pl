#!/bin/perl

# Image composition with alpha transparency demo.
#
# http://www.dylanbeattie.net/magick/

use Image::Magick;

my $outputFile = $ARGV[2] or die ("\nUsage: logo.pl <logo file> <image> <output file>\n\n");
my $imageFile = $ARGV[1];
my $logoFile = $ARGV[0];

my $image, $logo;
$image = Image::Magick->new;
$logo = Image::Magick->new;

$image->Read("$imageFile");

# Read the transparent logo from the PNG file
$logo=Image::Magick->new;
$logo->Read($logoFile);

# Call the Composite method of the background image, with the logo image as an argument.
$image->Composite(image=>$logo,compose=>'over', gravity=>'SouthEast');
$image->Set(quality=>100);
$image->Write($outputFile);

# Clean up
undef $image;
undef $logo;
