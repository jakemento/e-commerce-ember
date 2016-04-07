import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),


  namePrice: Ember.computed('listing.name', 'listing.price', function() {
    return this.get('listing.name') + '-' + '$' + this.get('listing.price');
  }),

  actions: {
    delete(listing) {
      if(confirm('Are you sure you want to delete this listing?')) {
        this.sendAction('deleteListing', listing);
      }
    },
    addToCart(listing) {
      this.get('shoppingCart').add(listing);
    },
  }
});
