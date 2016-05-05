// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs',

  parse: function(response) {

    return response.results.map(function(song) {
      return song;
    });
  },

  initialize: function() {
    this.fetch({
      success: function() {
        this.trigger('songsLoaded', this);
      }.bind(this)
    });
  }
});