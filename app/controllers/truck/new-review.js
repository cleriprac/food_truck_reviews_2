import Ember from 'ember';

export default Ember.Controller.extend({
  ratings: [1, 2, 3, 4, 5],
  needs: ['truck'],
  actions: {
    addReview: function() {
      var newReview = this.store.createRecord('review', {
        author: this.get('author'),
        review: this.get('review'),
        rating: this.get('rating'),
        truck: this.get('controllers.truck.model')
      });
      var truck = this.get('controllers.truck.model');
      newReview.save().then(function() {
        truck.get('reviews').pushObject(newReview);
        truck.save();
      });

      this.setProperties({
        author: '',
        review: '',
        rating: ''

      });
    }
  }
});
