import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    save3(params) {
      var newQuestion = this.store.createRecord('question', params);
      var answer = params.answer;
      answer.get('questions').addObject(newQuestion);
      newQuestion.save().then(function() {
        return answer.save();
      });
      this.transitionTo('answer', params.answer);
      },
    destroyQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    }
});
