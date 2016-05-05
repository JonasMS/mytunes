// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  
  initialize: function() {
    this.on('add', function() {
      debugger;
      if (this.length === 1) {
        playFirst();
      }
    });
  }
});


SongQueue.prototype.playFirst = function() {
  SongQueue.model.play();
};