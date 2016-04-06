import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow(){
      this.set('addNewReview', true);
    },
    cancel() {
      this.set('addNewReview', false);
    },
    save1() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        rating: this.get('rating'),
        post: this.get('post')
      };
      this.set('addNewReview', false);
      this.sendAction('save2', params);
    }
  }
});
