import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  cotent: DS.attr(),
  questions: DS.hasMany('question', { async: true })
});
