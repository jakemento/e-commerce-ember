import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },

  actions: {
    deleteListing(listing) {
      listing.destroyRecord();
      this.transitionTo('index');
    },

    save3(params) {
      var newReview = this.store.createRecord('review', params);
      var post = params.post;
      post.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return post.save();
      });
      this.transitionTo('listing');
    },

    editReview(review, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          review.set(key,params[key]);
        }
      });
      review.save();
      this.transitionTo('listing', params.listing);
    },

    deleteReview(review) {
      review.destroyRecord();
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
