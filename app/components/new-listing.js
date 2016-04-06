import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing',true);
    },
    listingFormHide() {
      this.set('addNewListing',false);
    },

    saveA() {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        description: this.get('description'),
        image: this.get('image'),
      };
      this.set('addNewListing', false);
      this.sendAction('saveB', params);
    }
  }
});
