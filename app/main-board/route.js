import Ember from 'ember';

export default Ember.Route.extend({
  cards:[],
  model(){
    return Ember.RSVP.hash({
      boards: this.store.findAll('board').then(results => results.filter((board) => {
          return board.get('name') === 'sprint01';
      })),
      lists: this.store.findAll('list')
    });
  },
  setupController(controller, model){
    controller.setProperties({
      trelloBoards: model.boards,
      trelloLists: model.lists,
      trelloCards: this.get('cards')
    });
  }
});
