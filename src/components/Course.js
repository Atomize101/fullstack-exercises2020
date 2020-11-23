/*
Structure will look like this
App
  Course
    Header
    Content
      Part
      Part
      ... */

import React from 'react';

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default Course;

const Header = ({ course }) => {
	return (
		<div>
			<h1>{course}</h1>
		</div>
	);
};

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map(({ id, name, exercises }) => (
				<Part key={id} name={name} exercises={exercises} />
			))}
		</div>
	);
};

const Part = ({ name, exercises }) => {
	return (
		<div>
			<p>
				{name} {exercises}
			</p>
		</div>
	);
};

const Total = ({ parts }) => {
	const total = parts.reduce((s, p) => s + p.exercises, 0);
	console.log(total);

	return (
		<div>
			<p>Total Number of exercises {total}</p>
		</div>
	);
};
