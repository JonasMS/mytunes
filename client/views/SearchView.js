var SearchView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
    this.$el.on('change', function() { console.log('yahoo!'); });
  },

  events: {
    'keydown': function() {
      this.collection.set('query', this.$('.searchBar')[0].value);
      // this.keyAction();
    }
  },

  keyAction: function(e) {
    this.collection.set('query', this.$('.searchBar')[0].value);
  },

  render: function() {
    var html = [
      '<div class="searchContainer">',
      '<input class="searchBar">',
      '</div>'
    ].join('');

    return this.$el.html(html);
  }
});