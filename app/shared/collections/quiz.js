'use strict';

app.schemas.Quiz = new SimpleSchema( {
	title: {
		type: 	String,
		label: 	'Title',
		max: 		100
	},

	author: {
		type: 	String,
		label:  'Author',
		max: 		200
	}
} );

app.collections.Quizzes = new Meteor.Collection('quizzes', {
	schema: app.schemas.Quiz
});