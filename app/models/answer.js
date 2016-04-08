import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  content: DS.attr(),
  answerVotes: DS.attr(),
  questions: DS.belongsTo('question', { async: true })
});
