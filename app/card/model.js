import DS from 'ember-data';

export default DS.Model.extend({
  checkItemStates: DS.attr(),
  closed: DS.attr('boolean'),
  dateLastActivity: DS.attr('string'),
  desc: DS.attr('string'),
  descData: DS.attr(),
  idBoard: DS.attr('string'),
  idList: DS.attr('string'),
  idMembersVoted: DS.attr(),
  idShort: DS.attr('number'),
  idAttachmentCover: DS.attr(),
  manualCoverAttachment: DS.attr('boolean'),
  idLabels: DS.attr(),
  pos: DS.attr('number'),
  shortLink: DS.attr('string'),
  badges: DS.attr(),
  dueComplete: DS.attr('boolean'),
  due: DS.attr(),
  idChecklists: DS.attr(),
  idMembers: DS.attr(),
  labels: DS.attr(),
  shortUrl: DS.attr('string'),
  subscribed: DS.attr('boolean'),
  url: DS.attr('string')
});
