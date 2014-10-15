
 //  compId: will be assigned in a loop
 // that way compId, which is used for accessing picture folders and in urls,
 //  is assigned in only 1 file/table/js array (the grid)

var boothWidth = 75;
var boothHeight = 30;

/* // values specific to THIS floorplan svg image
    // i have code to calculate it as well but fixed for now
  // viewBox="-10 -800 1000 2225"
  $scope.startX = -10;
  $scope.startY = -800;
  $scope.mapWidth = 1100;
  $scope.mapHeight = 2435;
  */

var booth_info = [


{bNum:1,room:"The Grill",x:60,y:-25,rotate:42},
{bNum:2,room:"The Grill",x:35,y:-185,rotate:-40},
{bNum:3,room:"The Grill",x:40,y:-335,rotate:-90},
{bNum:4,room:"The Grill",x:60,y:-534,rotate:0},
{bNum:5,room:"The Grill",x:35,y:-625,rotate:-90},
{bNum:6,room:"The Grill",x:60,y:-775,rotate:0},
{bNum:7,room:"The Grill",x:290,y:-775,rotate:0},
{bNum:8,room:"The Grill",x:625,y:-140,rotate:90},
{bNum:9,room:"The Grill",x:525,y:90,rotate:null},
    
/*{bNum:10,room:"Hallway",x:248,y:947,rotate:null},*/
    
    
{bNum:10,room:"Hallway",x:660,y:70,rotate:null},
    
{bNum:11,room:"Hallway",x:23,y:923,rotate:0},
{bNum:12,room:"Hallway",x:183,y:1025,rotate:0},
{bNum:13,room:"Hallway",x:283,y:1025,rotate:0},
{bNum:14,room:"Hallway",x:514,y:1025,rotate:0},
    
{bNum:15,room:"Hallway",x:595,y:921,rotate:0},
{bNum:16,room:"Hallway",x:625,y:1025,rotate:0},
{bNum:17,room:"Hallway",x:740,y:1025,rotate:0},
    
{bNum:18,room:"Lakeshore",x:851,y:918,rotate:0},
{bNum:19,room:"Lakeshore",x:845,y:1025,rotate:0},
    
{bNum:20,room:"Lakeshore",x:515,y:1190,rotate:90},
{bNum:21,room:"Lakeshore",x:650,y:1085,rotate:0},
{bNum:22,room:"Lakeshore",x:780,y:1180,rotate:90},
    
{bNum:23,room:"Lakeshore",x:675,y:1370,rotate:-45},
    
{bNum:24,room:"Lakeshore",x:243,y:1335,rotate:55},
{bNum:25,room:"Lakeshore",x:215,y:1275,rotate:-90},
{bNum:26,room:"Lakeshore",x:215,y:1120,rotate:-35},
    
{bNum:27,room:"Northshore",x:410,y:1265,rotate:-90},
{bNum:28,room:"Northshore",x:65,y:830,rotate:0},
{bNum:29,room:"Northshore",x:269,y:830,rotate:0},
{bNum:30,room:"Northshore",x:565,y:845,rotate:0},
    
{bNum:31,room:"Northshore",x:850,y:850,rotate:-42},
    
{bNum:32,room:"Northshore",x:935,y:670,rotate:90},
{bNum:33,room:"Northshore",x:935,y:571,rotate:90},
{bNum:34,room:"Northshore",x:935,y:493,rotate:90},
{bNum:35,room:"Northshore",x:935,y:409,rotate:90},
{bNum:36,room:"Northshore",x:935,y:324,rotate:90},
    
{bNum:37,room:"Northshore",x:850,y:215,rotate:35},
    
{bNum:38,room:"Northshore",x:576,y:216,rotate:0},
{bNum:39,room:"Northshore",x:463,y:214,rotate:0},
{bNum:40,room:"Northshore",x:284,y:217,rotate:0},
    
{bNum:41,room:"Northshore",x:33,y:275,rotate:-52},
    
{bNum:42,room:"Northshore",x:35,y:390,rotate:-90},
{bNum:43,room:"Northshore",x:35,y:480,rotate:-90},
{bNum:44,room:"Northshore",x:35,y:570,rotate:-90},
{bNum:45,room:"Northshore",x:35,y:660,rotate:-90},
{bNum:46,room:"Northshore",x:35,y:750,rotate:-90},
    
{bNum:47,room:"Northshore",x:260,y:540,rotate:90},
{bNum:48,room:"Northshore",x:260,y:440,rotate:90},
{bNum:49,room:"Northshore",x:260,y:340,rotate:90},
    
{bNum:50,room:"Northshore",x:285,y:415,rotate:-90},
{bNum:51,room:"Northshore",x:285,y:515,rotate:-90},
{bNum:52,room:"Northshore",x:285,y:615,rotate:-90},
    
{bNum:53,room:"Northshore",x:455,y:510,rotate:90},
{bNum:54,room:"Northshore",x:455,y:410,rotate:90},
    
{bNum:55,room:"Northshore",x:480,y:485,rotate:-90},
{bNum:56,room:"Northshore",x:480,y:585,rotate:-90},
    
{bNum:57,room:"Northshore",x:705,y:540,rotate:90},
{bNum:58,room:"Northshore",x:705,y:440,rotate:90},
{bNum:59,room:"Northshore",x:705,y:340,rotate:90},
    
{bNum:60,room:"Northshore",x:727,y:415,rotate:-90},
{bNum:61,room:"Northshore",x:727,y:515,rotate:-90},
{bNum:62,room:"Northshore",x:725,y:615,rotate:-90}
    /*
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

{bNum:28,room:"Northshore",x:175,y:750,rotate:0, floor:1},
{bNum:29,room:"Northshore",x:375,y:750,rotate:0, floor:1},
{bNum:30,room:"Northshore",x:575,y:750,rotate:0, floor:1},
{bNum:31,room:"Northshore",x:950,y:755,rotate:-42, floor:1},
    
{bNum:32,room:"Northshore",x:1035,y:560,rotate:90, floor:1},
{bNum:33,room:"Northshore",x:1035,y:460,rotate:90, floor:1},
{bNum:34,room:"Northshore",x:1035,y:360,rotate:90, floor:1},
{bNum:35,room:"Northshore",x:1035,y:260,rotate:90, floor:1},
{bNum:36,room:"Northshore",x:1035,y:160,rotate:90, floor:1},
    
{bNum:42,room:"Northshore",x:40,y:235,rotate:-90, floor:1},
{bNum:43,room:"Northshore",x:40,y:335,rotate:-90, floor:1},
{bNum:44,room:"Northshore",x:40,y:435,rotate:-90, floor:1},
{bNum:45,room:"Northshore",x:40,y:535,rotate:-90, floor:1},
{bNum:46,room:"Northshore",x:40,y:635,rotate:-90, floor:1},

    
{bNum:37,room:"Northshore",x:950,y:57.5,rotate:35, floor:1},
    
{bNum:38,room:"Northshore",x:675,y:35,rotate:0, floor:1},
{bNum:39,room:"Northshore",x:500,y:35,rotate:0, floor:1},
{bNum:40,room:"Northshore",x:325,y:35,rotate:0, floor:1},
    
{bNum:41,room:"Northshore",x:32.6,y:74.6,rotate:-52, floor:1},

    

    
{bNum:47,room:"Northshore",x:285,y:435,rotate:90, floor:1},
{bNum:48,room:"Northshore",x:285,y:340,rotate:90, floor:1},
{bNum:49,room:"Northshore",x:285,y:245,rotate:90, floor:1},
    
{bNum:57,room:"Northshore",x:795,y:435,rotate:90, floor:1},
{bNum:58,room:"Northshore",x:795,y:340,rotate:90, floor:1},
{bNum:59,room:"Northshore",x:795,y:245,rotate:90, floor:1},
    
{bNum:50,room:"Northshore",x:315,y:320,rotate:-90, floor:1},
{bNum:51,room:"Northshore",x:315,y:415,rotate:-90, floor:1},
{bNum:52,room:"Northshore",x:315,y:510,rotate:-90, floor:1},
    
{bNum:60,room:"Northshore",x:825,y:320,rotate:-90, floor:1},
{bNum:61,room:"Northshore",x:825,y:415,rotate:-90, floor:1},
{bNum:62,room:"Northshore",x:825,y:510,rotate:-90, floor:1},    
    
{bNum:53,room:"Northshore",x:545,y:375,rotate:90, floor:1},
{bNum:54,room:"Northshore",x:545,y:270,rotate:90, floor:1},
{bNum:55,room:"Northshore",x:575,y:345,rotate:-90, floor:1},
{bNum:56,room:"Northshore",x:575,y:450,rotate:-90, floor:1},
*/


];



//{bNum:62,room:"Northshore",x:825,y:405,rotate:0, floor:1}



//var booth_info = [
//{  bNum:  1, x: 240, y: 680, room: "The Grill", floor: 1 , floor:1}, //  compId: will be assigned in a loop


// reverse drawing svg layer fix
//{  bNum: 13, x: 1175, y: 35, rotate: 45, room: "Hallway", floor: 1  , floor:1},


//----------------------------------------------------------------------
//VERTICAL - adjust heritage room y coordinates
//----------------------------------------------------------------------


