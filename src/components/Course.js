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
			<Part name={parts[0].name} exercises={parts[0].exercises} />
			<Part name={parts[1].name} exercises={parts[1].exercises} />
			<Part name={parts[2].name} exercises={parts[2].exercises} />
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
			<p>Number of exercises {total}</p>
		</div>
	);
};
