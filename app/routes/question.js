import Ember from 'ember';

export default Ember.Route.extend({
  voteCount: Ember.inject.service(),
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
    addtestting(question){
      console.log("please do things");
      console.log("this is a really cool question",question);
      console.log("I believe in ember", question.get('questionVotes'));
      var newVotes = question.get('questionVotes') +1;
      console.log(newVotes);
      console.log(question.get('questionVotes'));
      question.set('questionVotes', newVotes);
      question.save();
    },
    save3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
