import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    delete(listing) {
      if(confirm('Are you sure you want to delete this listing?')) {
        this.sendAction('deleteListing', listing);
      }
    },
    update(listing, params) {
      this.sendAction('update', listing, params);
    },
    addToCart(listing) {
      this.get('shoppingCart').add(listing);
    }
  }
});
