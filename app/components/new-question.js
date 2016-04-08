import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save3() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        image: this.get('image'),
        notes: this.get('notes'),
        answers: this.get('answer')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
