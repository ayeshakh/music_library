var Library = function(name, creator, playlist) {
  this.name = name;
  this.creator = creator;
  this.playlist = [];
}

var Playlist = function(name, tracks) {
  this.name = name;
  this.tracks = [];
}

var Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Playlist.prototype.overallRating = function () {
  var sum = 0;
  for (var i=0; i<this.tracks.length; i++) {
    sum += this.tracks[i].rating;
  }

  return sum/this.tracks.length;
}

Playlist.prototype.totalDuration = function () {
  var duration = 0;
  for (var i=0; i<this.tracks.length; i++) {
    duration += this.tracks[i].length;
  }

  return duration;
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlist.push(playlist);
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

var track1 = new Track("t01", 5, 3);
var track2 = new Track("t02", 4, 2);

console.log("track1 is:", track1);
console.log("track2 is;", track2);

var playlist1 = new Playlist("p01", [track1, track2]);
playlist1.addTrack(track1);
playlist1.addTrack(track2);
var library = new Library("Code Monkey", "Jonathan Coulton", [playlist1]);
library.addPlaylist(playlist1);

console.log("playlist1 is:", playlist1);
console.log("library is:" ,library);

for(var x in library.playlist) {
  console.log("library name is :", library.playlist[x].name);
  console.log("total length is:" ,library.playlist[x].overallRating());
  console.log("total duration is:" ,library.playlist[x].totalDuration());
}
