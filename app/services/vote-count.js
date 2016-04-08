import Ember from 'ember';

export default Ember.Service.extend({
  votes: [],
  adminShowing: false,

  totalVote: Ember.computed('votes.length', function() {
    var totalVote = 0;
    for (let question of this.get('votes')){
      totalVote += 1;
    }
    return totalVote;

  }),
  add(item) {
    this.get('votes').pushObject(item);
  },
  testAdmin(){
      var adminShowing = this.get('adminShowing');
      if(adminShowing === true){
        this.set('adminShowing', false);
      } else if (adminShowing !== true) {
        this.set('adminShowing', true);
      }
    console.log(this.get('isAdminShow'));
  }

});
