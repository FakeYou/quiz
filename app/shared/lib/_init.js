'use strict';

if( typeof window !== 'undefined' ) {
	var global = window;
}
else {
	var global = root;
}

global.app = {
	controllers: {},
	collections: {},
	schemas: {}
};

Meteor.startup( function() {
	if(Meteor.isServer) {
		var quizzes = app.collections.Quizzes.find().fetch();
		var chance = new Chance();

		if( quizzes.length == 0 ) {
			for( var i = 0; i < 1000; i++ ) {

				var quiz = {
					title: chance.word(),
					author: chance.name()
				};

				app.collections.Quizzes.insert( quiz );

			}
		}
	}
} );