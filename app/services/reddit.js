import Ember from 'ember';
import EmberAjax from 'ember-ajax/services/ajax';

const {
	get
} = Ember;

export default EmberAjax.extend({
	host: 'https://www.reddit.com',
	newPosts(sub) {
		return this.request(`/r/${sub}/new.json`)
			.then((res)=>{
				return get(res, 'data.children').mapBy('data');
			});
	}
});
