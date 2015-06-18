import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  review: DS.attr('string'),
  rating: DS.attr('number'),
  truck: DS.belongsTo('truck', {async: true})
});
