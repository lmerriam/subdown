import Ember from 'ember';

const {
	RSVP,
	inject
} = Ember;

export default Ember.Route.extend({
	queryParams: {
		subs: {
			refreshModel: true
		}
	},
	reddit: inject.service(),
	model: function(params){
		let { subs } = params;

		const reddit = this.get('reddit');

    return RSVP.all(subs.map((sub)=>{
			return RSVP.hash({
				sub,
				posts: reddit.newPosts(sub)
			});
		}));
  }
});
