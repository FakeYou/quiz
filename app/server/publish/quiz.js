'use strict';

Meteor.publish( 'quizzes', function() {
	return app.collections.Quizzes.find( {} );
} );