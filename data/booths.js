
 //  compId: will be assigned in a loop
 // that way compId, which is used for accessing picture folders and in urls,
 //  is assigned in only 1 file/table/js array (the grid)

var booth_info = [
{bNum:1,room:"The Grill",x:10,y:10,rotate:0, floor:1},
{bNum:2,room:"The Grill",x:10,y:10,rotate:0, floor:1},
{bNum:3,room:"The Grill",x:10,y:10,rotate:0, floor:1},
{bNum:4,room:"The Grill",x:10,y:10,rotate:0, floor:1},
{bNum:5,room:"The Grill",x:10,y:10,rotate:0, floor:1},
{bNum:6,room:"The Grill",x:10,y:10,rotate:0, floor:1},
{bNum:7,room:"The Grill",x:10,y:10,rotate:0, floor:1},
{bNum:8,room:"The Grill",x:10,y:10,rotate:0, floor:1},
{bNum:9,room:"The Grill",x:10,y:10,rotate:0, floor:1},
{bNum:10,room:"Hallway",x:277.7,y:875,rotate:0, floor:1},
{bNum:11,room:"Hallway",x:19,y:847.5,rotate:0, floor:1},
{bNum:12,room:"Hallway",x:202,y:972.6,rotate:0, floor:1},
{bNum:13,room:"Hallway",x:317,y:976,rotate:0, floor:1},
{bNum:14,room:"Hallway",x:583,y:978,rotate:0, floor:1},
{bNum:15,room:"Hallway",x:675,y:845.8,rotate:0, floor:1},
{bNum:16,room:"Hallway",x:710,y:978,rotate:0, floor:1},
{bNum:17,room:"Hallway",x:841.5,y:979.5,rotate:0, floor:1},
{bNum:18,room:"Hallway",x:968,y:842,rotate:0, floor:1},
{bNum:19,room:"Hallway",x:961.5,y:978,rotate:0, floor:1},
{bNum:20,room:"Lakeshore",x:538,y:1202,rotate:90, floor:1},
{bNum:21,room:"Lakeshore",x:745.6,y:1050,rotate:0, floor:1},
{bNum:22,room:"Lakeshore",x:840,y:1185,rotate:90, floor:1},
{bNum:23,room:"Lakeshore",x:780,y:1336,rotate:-45, floor:1},
{bNum:24,room:"Lakeshore",x:243.4,y:1355,rotate:55, floor:1},
{bNum:25,room:"Lakeshore",x:221,y:1197,rotate:-90, floor:1},
{bNum:26,room:"Lakeshore",x:236.6,y:1052,rotate:-35, floor:1},
{bNum:27,room:"Lakeshore",x:449,y:1204,rotate:-90, floor:1},
{bNum:28,room:"Northshore",x:67,y:751.5,rotate:0, floor:1},
{bNum:29,room:"Northshore",x:302,y:750,rotate:0, floor:1},
{bNum:30,room:"Northshore",x:634,y:772,rotate:0, floor:1},
{bNum:31,room:"Northshore",x:968,y:751.5,rotate:-42, floor:1},
{bNum:32,room:"Northshore",x:1033,y:559,rotate:0, floor:1},
{bNum:33,room:"Northshore",x:1034,y:444,rotate:0, floor:1},
{bNum:34,room:"Northshore",x:1036,y:354,rotate:0, floor:1},
{bNum:35,room:"Northshore",x:1035,y:258,rotate:0, floor:1},
{bNum:36,room:"Northshore",x:1034,y:160,rotate:0, floor:1},
{bNum:37,room:"Northshore",x:950,y:57.5,rotate:35, floor:1},
{bNum:38,room:"Northshore",x:654,y:37,rotate:0, floor:1},
{bNum:39,room:"Northshore",x:524,y:34,rotate:0, floor:1},
{bNum:40,room:"Northshore",x:319,y:38,rotate:0, floor:1},
{bNum:41,room:"Northshore",x:32.6,y:74.6,rotate:-52, floor:1},
{bNum:42,room:"Northshore",x:40,y:170,rotate:-90, floor:1},
{bNum:43,room:"Northshore",x:39,y:277,rotate:-90, floor:1},
{bNum:44,room:"Northshore",x:42,y:377,rotate:-90, floor:1},
{bNum:45,room:"Northshore",x:42,y:460,rotate:-90, floor:1},
{bNum:46,room:"Northshore",x:38,y:582,rotate:-90, floor:1},
{bNum:47,room:"Northshore",x:262,y:410,rotate:90, floor:1},
{bNum:48,room:"Northshore",x:265,y:312,rotate:90, floor:1},
{bNum:49,room:"Northshore",x:266,y:227,rotate:90, floor:1},
{bNum:50,room:"Northshore",x:315,y:223,rotate:90, floor:1},
{bNum:51,room:"Northshore",x:318,y:314,rotate:90, floor:1},
{bNum:52,room:"Northshore",x:317,y:411,rotate:90, floor:1},
{bNum:53,room:"Northshore",x:488,y:375,rotate:90, floor:1},
{bNum:54,room:"Northshore",x:490,y:260,rotate:90, floor:1},
{bNum:55,room:"Northshore",x:545,y:260,rotate:90, floor:1},
{bNum:56,room:"Northshore",x:545,y:377,rotate:90, floor:1},
{bNum:57,room:"Northshore",x:772,y:408,rotate:0, floor:1},
{bNum:58,room:"Northshore",x:770,y:313,rotate:0, floor:1},
{bNum:59,room:"Northshore",x:770,y:201,rotate:0, floor:1},
{bNum:60,room:"Northshore",x:825,y:201,rotate:0, floor:1},
{bNum:61,room:"Northshore",x:825,y:313,rotate:0, floor:1},
{bNum:62,room:"Northshore",x:825,y:405,rotate:0, floor:1}
];



//{bNum:62,room:"Northshore",x:825,y:405,rotate:0, floor:1}



//var booth_info = [
//{  bNum:  1, x: 240, y: 680, room: "The Grill", floor: 1 , floor:1}, //  compId: will be assigned in a loop


// reverse drawing svg layer fix
//{  bNum: 13, x: 1175, y: 35, rotate: 45, room: "Hallway", floor: 1  , floor:1},


//----------------------------------------------------------------------
//VERTICAL - adjust heritage room y coordinates
//----------------------------------------------------------------------


