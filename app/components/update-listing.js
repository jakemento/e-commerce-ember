import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    updateListingForm() {
      this.set('updateListingForm', true);
    },
    cancel() {
      this.set('updateListingForm', false);
    },
    update(listing) {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        description: this.get('description'),
        image: this.get('image')
      };
      this.set('updateListingForm', false);
      this.sendAction('update', listing, params);
    }
  }
});
