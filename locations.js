function location(name, discription){
  this.name = name;
  this.discription = discription;
  this.items = [];
 };
 
 var locations = [];
 locations.push(location('room1', 'this is the first room.'));
 locations.push(location('room2', 'this is the second room.'));
 locations.push(location('room3', 'this is the third room.'));
 
 var connections = [];
 connections.push([1,1,0],[1,1,1],[0,1,1]);
 var map ={
  location: locations,
  connection: connection,
 }
 
 var run = function (location, connection){
  for (i=0, i <= locations; i++) {
     if(location[0][i] ===1){
       console.log(location[0] + 'is connected to ' + location[i]);
    };
  };
};
  
