import DS from 'ember-data';

export default DS.Model.extend({
   name: DS.attr('string'),
   closed: DS.attr('boolean'),
   pos: DS.attr('number'),
   subscribed: DS.attr('boolean'),
   idBoard: DS.attr('string'),
   cards: DS.hasMany('card'),
   board: DS.belongsTo('board') 
});
