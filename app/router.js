import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("about");
  this.resource("trucks", function() {
    this.route("new-truck");
    this.resource("truck", {path: ":truck_id"}, function() {
        this.route("new-review");
    });
  });
  this.route('featured', {path: '/'});
  this.route('map');
});

export default Router;
