import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {
    var container = this.$(".map-canvas");

    var options = {
      center: new google.maps.LatLng(this.get("latitude"),
this.get("longitude")),
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    new google.maps.Map(container[0], options);
  }.on('didInsertElement')
});
