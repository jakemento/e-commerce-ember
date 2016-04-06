import Ember from 'ember';

export default Ember.Route.extend({
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
    }
  }
});
