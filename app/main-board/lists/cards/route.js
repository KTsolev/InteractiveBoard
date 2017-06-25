import Ember from 'ember';

export default Ember.Route.extend({
  model(){
  //  const list = this.modelFor('list');
  //   return this.store.query('card', { param: list });
  },
  setupController(controller, models) {
   controller.set('cards', models);
 }
});
