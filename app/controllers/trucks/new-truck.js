import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTruck: function() {
      var newTruck = this.store.createRecord('truck', {
        name: this.get('name'),
        description: this.get('description')
      });
      newTruck.save();
      this.setProperties({
        author: '',
        review: ''
      });
    }
  }
});
