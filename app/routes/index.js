import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    destroyQuestion(question) {
      rental.destroyQuestion();
      this.transitionTo('index');
    }
  }
});
