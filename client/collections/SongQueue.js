// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  
  initialize: function() {
    this.on('add', function(e) {
      if (this.length === 1) {
        this.playFirst(e);
      }
    });
  }
});


SongQueue.prototype.playFirst = function(song) {
  song.play();
};