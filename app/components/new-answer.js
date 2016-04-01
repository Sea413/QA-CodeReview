save1() {
  var params = {
    username: this.get('username'),
    content: this.get('content'),
  };
  this.set('addNewAnswer', false);
  this.sendAction('save2', params);
}
