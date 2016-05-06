// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  defaults: {
    query: ''
  },

  model: SongModel,

  

  options: {
    data: 'where=' + JSON.stringify({title: this.query}), 
    success: function() {
      this.trigger('songsLoaded', this);
    }.bind(this),
    error: function () {
      console.log('fail');
    }
  },
 
  url: 'https://api.parse.com/1/classes/songs',
  
  parse: function(response, options) {

    return response.results.map(function(song) {
      return song;
    });
  },

  initialize: function() {
    this.set('query', '');

    this.on('change:query', function() {
      this.fetch(this.options);
    }, this);


    this.fetch({
      // data: 'where=' + JSON.stringify({title: this.query}), 
      success: function() {
        this.trigger('songsLoaded', this);
      }.bind(this)
    });
  }
});