import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('board');
  },

  setupController(controller,model){
    this._super(controller, model);
    controller.setProperties({
      'attrs.trelloBoards':model
    });
  }
});
