/* EXPLSN01.INC - Explosion effect for POV-Ray v3
Original POV-Ray code by Howard Day
Defines an object {Explosion01} - unit-sized fiery explosion centred on the origin.
Translate & scale to suit your own scene.
*/

#declare ERand = 5/3/98*49373104
#declare SClock = .2
#declare Explosion01 =
union {
sphere {
0, 1
hollow
scale 1.5
texture {
pigment {rgbt<1, 1, 1, 1.1>}
finish {
ambient 1
diffuse 0
}
halo {
emitting
linear
spherical_mapping
max_value 2
samples 15
aa_level 4
aa_threshold .2
color_map {
[0  color rgbt <1,.125,0,1>]
[1 color rgbt <1,1,0,-.65>]
}
turbulence .65
octaves 7.5
omega .75
lambda 2.1
rotate 123456*ERand
}
}
hollow
scale 4
}
sphere {
0, 1
hollow
scale 1.5
texture {
pigment {rgbt<1, 1, 1, 1.1>}
finish {
ambient 1
diffuse 0
}
halo {
emitting
linear
spherical_mapping
samples 15
color_map {
[0  color rgbt <1,.5,0,1>]
[1 color rgbt <1,.75,0,-.5>]
}
turbulence .25
omega .3
rotate 436*ERand
}
}
hollow
scale 3.75
}

sphere {
0, 1
hollow
scale 1.5
texture {
pigment {rgbt<1, 1, 1, 1.1>}
finish {
ambient 1
diffuse 0
}
halo {
emitting
linear
spherical_mapping
samples 15
color_map {
[0  color rgbt <1,1,0,1>]
[1 color rgbt <3,3,3,-1>]
}
turbulence 1.5
rotate 123581321*ERand
scale .5
}
scale 1.5
}
hollow
scale 2
}
scale 0.2
}
