'use strict';

app.controllers.HomeController = RouteController.extend({

	waitOn: function() {
		return Meteor.subscribe( 'quizzes' );
	},

	data: function() {
		var quizzes = app.collections.Quizzes.find().fetch();

		return {
			quizzes: quizzes
		};
	},

	actionHome: function() {
		if( !this.ready() ) {
			this.render( 'loading' );
		}
		else {
			this.template = 'home';
			this.render();
		}
	}

});