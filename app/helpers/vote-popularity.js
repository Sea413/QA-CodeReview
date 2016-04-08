import Ember from 'ember';

export function votePopularity(params) {
  var question = params[0];

  if(question.get('questionVotes') >= 10) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(votePopularity);
