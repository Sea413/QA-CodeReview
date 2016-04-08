import Ember from 'ember';

export default Ember.Component.extend({
  voteCount: Ember.inject.service(),
  isImageShowing: false,
  updateQuestionForm: false,
  actions: {
    addToVote(question) {
      this.get('voteCount').add(question);
      console.log(this.get('voteCount'));
      var newTotal = question.get('questionVotes') + 1;
      console.log(newTotal);
        this.sendAction('addtestting',question, newTotal);
        console.log("pretty wonky",question);

    },
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
