import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('answer', params.answer_id);
  },
  save1() {
  var params = {
    username: this.get('content'),
    content: this.get('content'),
    question: this.get('question')
    };
    this.set('addNewAnswer', false);
    this.sendAction('save2', params);
  },
  destroyAnswer(answer) {
    answer.destroyRecord();
    this.transitionTo('index');
}
});
