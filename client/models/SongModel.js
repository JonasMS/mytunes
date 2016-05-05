// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    //enqueue song to SongQueue collection
    this.trigger('enqueue', this);
  },

  dequeue: function() {
  //enqueue song to SongQueue collection
    this.trigger('dequeue', this);
  },

  ended: function() {
    //enqueue song to SongQueue collection
    this.trigger('ended', this);
  }
});
