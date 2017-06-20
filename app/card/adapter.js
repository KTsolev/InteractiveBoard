import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers: {
    list_ids:['5924d5633e8fe22361a5438b','5924d5326e579da07b27e55e','5924d4feb4dc0cd8b3ba94e2','5924d5633e8fe22361a5438b','5925adc8d5f4d5e7b06fb8c3']
  },
  host: 'http://localhost:8080',
  namespace: 'api'
});
