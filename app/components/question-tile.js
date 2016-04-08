import Ember from 'ember';

export default Ember.Component.extend({
  voteCount: Ember.inject.service(),
  isImageShowing: false,
  updateQuestionForm: false,
  actions: {
    addToVote(item) {
      this.get('voteCount').add(item)
      console.log("hey there");
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
