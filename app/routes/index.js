import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      listings: this.store.findAll('listing'),
      reviews: this.store.findAll('review')
    });
  },

  actions: {

    saveC(params) {
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      this.transitionTo('index');
    },

    update(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          listing.set(key,params[key]);
        }
      });
      listing.save();
      this.transitionTo('index');
    },
  }
});
