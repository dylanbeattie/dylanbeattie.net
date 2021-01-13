/**************************************************************
            ==================================
            Star Wars - The POV-Ray Collection
            ==================================

POV-Ray code copyright (c) 1997 D M Beattie

This file is provided for personal use only. Any use of this
model for commercial gain or profit is strictly forbidden -
please see the accompanying README.TXT and Conditions of Use
before using or distributing this file.

'Star Wars' and all associated images, designs and trademarks,
(including the designs of the vehicles and objects depicted in
the Star Wars POV-Ray Collection, except where otherwise
stated) are copyright (c) 1997 Lucasfilm Ltd.

****************************************************************

planets.inc - #include file defining various Star Wars planets

Each planet is defined as a unit sphere centered on the origin - 
they should be scaled and translated according to scene requirements.

The A_ prefix indicates a second planet including a halo atmosphere - 
this doesn't work for long shots since the atmosphere is visible on
the shadow side of the planet as well, but for closer 'horizon' shots where
only a small section of the planet's radius is visible, it looks
quite effective.

Contents:

Tatooine 	- Arid, desert planet - predominantly sand-brown
Hoth		- Frozen ice planet, mainly white & pale blue
Alderaan  	- Earth-type planet, mainly blue (oceans)
Dagobah 	- Swamp planet, murky brown and green

Planet textures are based on matte paintings in 'Star Wars: Chronicles'

NOTE: For best results, area lights should be used to give a soft shadow
on planetary bodies - in space, light sources are stars or suns which
do *not* behave like point light sources at small distances (like the
distance from the Earth to the Sun). The greater the distance, the smaller
the percieved size of the sun or star, and so the more accurate the point
light source approximation becomes. See the POV-Ray documentation for 
details on how to use area lights. 
************************************************************/

#declare Atmosphere = object {
	sphere {<0,0,0>, 1}
	hollow
	no_shadow
	texture {
		pigment {rgbt 1}
		finish {diffuse 0.9 ambient 0}
	}
	halo {
		attenuating // emitting //
		spherical_mapping
		linear // poly exponent 0.1
		colour_map {
			[0 colour rgbt 1] // Transparent at edge
			[0.01 colour rgb <0.7,0.8,1>]
			[0.03 colour rgb <0.9,1,1>]
			[1 colour rgbt 1] // White center
		}
		samples 10
	}
	scale (1/0.97)
}


#declare Tatooine = object {
	sphere {<0,0,0>, 1}
	texture {
		pigment {
			granite
			colour_map {
				[0.00 colour rgb <1.00,0.69,0.35>]
				[0.10 colour rgb <1.00,0.69,0.35>*0.98]
				[0.18 colour rgb <1.00,0.69,0.35>*0.93]
				[0.23 colour rgb <1.00,0.69,0.35>*0.96]
				[0.28 colour rgb <1.00,0.691,0.35>*0.93]
				[0.38 colour rgb <0.91,0.611,0.28>]
				[0.53 colour rgb <0.91,0.52,0.20>*1.01]
				[0.61 colour rgb <0.91,0.52,0.20>*1.02]
				[0.69 colour rgb <0.93,0.52,0.20>*1.01]
				[0.82 colour rgb <0.92,0.52,0.20>*1.03]
				[0.93 colour rgb <0.90,0.52,0.20>*0.98]
				[1.00 colour rgb <0.91,0.52,0.20>]
				
			}
		}
		normal {
			granite
			bump_size 0.01
			slope_map {
				[0.00 <0,0>]
				[0.10 <0.01,0>]
				[0.18 <0.05,0>]
				[0.23 <0.03,0>]
				[0.41 <0.1,0>]
				[0.58 <0.07,0>]
				[0.62 <0.3,0>]
				[0.78 <0.6,0>]
				[0.93 <0.8,0>]
				[1.00 <1,0>]
			}
		}
		finish {
			diffuse 0.9
			ambient 0
		}
		scale 0.5
	}
}

#declare A_Tatooine = object {
	union {
		object {Atmosphere}
		object {Tatooine}
	}
}
#declare Hoth = object {
	sphere {<0,0,0>, 1}
	texture {
		pigment {
			granite
			turbulence 0.8
			colour_map {
				[0.00 colour rgb 1]
				[0.21 colour rgb <0.95,0.97,1>]
				[0.34 colour rgb <0.97,0.99,1>]
				[0.46 colour rgb <0.92,0.93,0.99>]
				[0.62 colour rgb <0.87,0.92,0.97>]
				[1.00 colour rgb <0.79,0.83,0.91>]
			}
		}
		normal {
			granite
			bump_size 0.01
			slope_map {
				[0.00 <0,0>]
				[0.46 <0.01,0>]
				[0.62 <0.5,0>]
				[1.00 <1,0>]
			}
		}
		finish {
			diffuse 0.9
			ambient 0
		}
		scale 0.5
	}
}

#declare A_Hoth = object {
	union {
		object {Atmosphere}
		object {Hoth}
	}
}

#declare Alderaan = object {
	sphere {<0,0,0>, 1}
	texture {
		pigment {
			bozo
			turbulence 0.8
			colour_map {
				[0.00 colour rgb <0,0.1,0.6>]
				[0.20 colour rgb <0,0.2,0.8>]
				[0.55 colour rgb <0,0,0.4>]
				[0.61 colour rgb <0,0,0.3>]
				[1.00 colour rgb <0,0.1,0.6>]

			}
			scale 0.2
		}
		finish {
			diffuse 0.9
			ambient 0
		}
		scale 0.5
	} texture { // Clouds
		pigment {
			bozo
			turbulence 2.5
			colour_map {
				[ 0 colour rgbt 1]
				[ 0.4 colour rgbf 1]
				[ 0.7 colour rgbf <1,1,1,0.3>]
				[ 1 colour rgbf <1,1,1,0.1>]
			}
			scale 0.3
		}
		finish {
			specular 0.4
			roughness 0.3
			diffuse 0.9
			ambient 0

		}
	}
}

#declare A_Alderaan = object {
	union {
		object {Atmosphere}
		object {Alderaan}
	}
}

#declare Dagobah = object {
	sphere {<0,0,0>, 1}
	texture {
		pigment {
			bozo
			turbulence 0.7
			colour_map {
				[0.00 colour rgb <0.3,0.4,0.2>]
				[0.20 colour rgb <0.28,0.35,0.07>]
				[0.75 colour rgb <0.35,0.42,0.19>]
				[0.81 colour rgb <0.34,0.41,0.18>]
				[1.00 colour rgb <0.33,0.37,0.12>]
			}
			scale 0.2
		}
		finish {
			diffuse 0.9
			ambient 0
		}
		scale 0.5
	}
	texture { // Clouds
		pigment {
			bozo
			turbulence 2
			colour_map {
				[ 0 colour rgbt 1]
				[ 0.2 colour rgbt 1]
				[ 0.5 colour rgbf <1,1,1,0.5>]
				[ 1 colour rgbf <1,1,1,0.1>]
			}
			scale 0.1
		}
		finish {
			specular 0.4
			roughness 0.3
			diffuse 0.9
			ambient 0

		}
	}
}

#declare A_Dagobah = object {
	union {
		object {Atmosphere}
		object {Dagobah}
	}
}
