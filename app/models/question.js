import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    author: DS.attr(),
    body: DS.attr(),
    image: DS.attr(),
    notes: DS.attr(),
    questionVotes: DS.attr(),
    answers: DS.hasMany('answer', { async: true })
});
