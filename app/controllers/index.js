// TODO: replace 'nsfw' and 'default' imgs
// TODO:

import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['subs'],
	subs: ['buildapcsales','hardwareswap','gamedeals'],
	actions: {
		replaceSub(oldSub, newSub) {
			let subs = this.get('subs');

			var index = subs.indexOf(oldSub);

			if (index !== -1) {
			  subs[index] = newSub;
			}
			this.set('subs', subs.slice());
		}
	}
});
