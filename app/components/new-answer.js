import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save3() {
      var params = {
        username: this.get('username'),
        content: this.get('content'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('save4', params);
    }
  }
});
