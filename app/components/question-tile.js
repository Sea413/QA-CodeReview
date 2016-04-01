import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(questions) {
    if (confirm('Do you wish to remove the question?')) {
      this.sendAction('destroyQuestion', rental);
    }
  }
});
