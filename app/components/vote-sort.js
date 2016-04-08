import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['title:asc'],
  sortedQuestions: Ember.computed.sort('model.questions', 'sortBy')

});
