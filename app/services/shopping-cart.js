import Ember from 'ember';

export default Ember.Service.extend({
  listings: [],
  currentTotal: 0,

  add(listing) {
    this.get('listings').pushObject(listing);
    this.get('updateTotal')(this);
  },
  removeFromCart(listing) {
    this.get('listings').popObject(listing);
  },
});
