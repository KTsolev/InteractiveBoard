import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main-board', function() {
    this.route('lists', function() {
      this.route('cards',{path:'/:list_id'});
    });
  });
});

export default Router;
