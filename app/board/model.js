import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  desc: DS.attr('string'),
  descData: DS.attr('date'),
  closed: DS.attr('boolean'),
  isOranization: DS.attr(),
  pinned:  DS.attr(),
  dateLastActivity: DS.attr('string'),
  invitations:  DS.attr(),
  shortLink: DS.attr('string'),
  powerUps: DS.attr(),
  datePluginDisable: DS.attr(),
  invited: DS.attr('boolean'),
  started: DS.attr('boolean'),
  url: DS.attr('string'),
  prefs:  DS.attr(),
  subscribed: DS.attr('boolean'),
  labelNames:  DS.attr(),
  dateLastView: DS.attr('string'),
  shortUrl: DS.attr('string'),
  memberships:  DS.attr(),
});
