import Ember from 'ember';

export default Ember.Service.extend({
  listings: [],

  add(listing) {
    this.get('listings').pushObject(listing);
  },
  removeFromCart(listing) {
    this.get('listings').popObject(listing);
  },
});
