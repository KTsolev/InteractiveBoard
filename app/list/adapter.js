import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers: {
    'board_id': 'FYKrKSq4'
  },
  host: 'http://localhost:8080',
  namespace: 'api'
});
