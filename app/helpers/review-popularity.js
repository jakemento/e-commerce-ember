import Ember from 'ember';

export function reviewPopularity(params/*, hash*/) {
  var listing = params[0];

  if (listing.get('reviews').get('length') >=3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(reviewPopularity);
