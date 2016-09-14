import Ember from 'ember';

export default Ember.Component.extend({
	isEditing: false,
	didReceiveAttrs() {
		this._super(...arguments);
		this.set('_value', this.get('value'));
	},
	stopEditing() {
		this.set('isEditing', false);
	},
	actions: {
		startEditing() {
			this.set('isEditing', true);
		},
		change() {
			this.sendAction('on-change', this.get('_value'));
			this.stopEditing();
		}
	}
});
