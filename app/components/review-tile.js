import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(review, params) {
      this.sendAction('edit', review, params);
    },
    delete(review) {
      this.sendAction('deleteReview', review);
    },
  }
});
