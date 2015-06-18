import Ember from 'ember';

var TrucksController = {
  sortProperties: ['name:asc'],
  sortedTrucks: Ember.computed.sort('model', 'sortProperties'),
  actions: {

    // sortByMostRated: function() {
    //   // var length = this.get('reviews').length();
    //   this.set('sortProperties', ['name:desc']);
    // },
    sortByName: function() {
      this.set('sortProperties', ['name:asc']);
    }
  }
};

export default Ember.ArrayController.extend(TrucksController);
