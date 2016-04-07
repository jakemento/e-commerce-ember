import Ember from 'ember';

export default Ember.Component.extend({

  shoppingCart: Ember.inject.service(),
  actions: {
    removeFromCart(listing) {
      this.get('shoppingCart').removeFromCart(listing);
    }
  }
});
