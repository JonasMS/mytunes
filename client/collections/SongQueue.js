// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  
  initialize: function() {
    this.on('add', function(e) {
      if (this.length === 1) {
        this.playFirst(e);
      }
    });
    this.on('ended', function(e) {
      this.shift();
      if(this.length > 0) {
        this.playFirst(this.at(0));
      }
    });
  }
});


SongQueue.prototype.playFirst = function(song) {
  song.play();
};