#!/usr/local/bin/perl
#
# Make simple beveled button with some text on it and output to STDOUT in GIF format
#
# a little more complex - the gradient colours are passed in as CGI parameters, and the text and text colour are specified
#
# to embed this image in a web page, use:
# img src="imagedemo3.pl?colour1=ff0000&colour2=0000ff&text=My%20First%20Button"

use Image::Magick;
use CGI;


my $query = new CGI; # create new CGI object
my $colour1 = ($query->param("colour1") or "ff0000");
my $colour2 = ($query->param("colour2") or "0000ff");
my $text = ($query->param("text") or "Hello World");

print "Content-type: image/gif\r\n\r\n";

$image=Image::Magick->new;
$image->Set(size=>'30x180');
$image->Read("gradient:#$colour1-#$colour2");
$image->Raise('3x3');
$image->Rotate(-90);
# Make sure the font path here is your Windows fonts directory - don't forget Perl paths use forward-slashes instead of back-slashes
$image->Annotate(text=>$text,font=>'@c:/winnt/fonts/arial.ttf',pen=>'black', gravity=>'Center',pointsize=>18);

$image->Write('gif:-');
undef($image);
