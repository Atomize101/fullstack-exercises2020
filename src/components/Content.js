import React from 'react';
import Part from '../components/Part';

const Content = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
	return (
		<div>
			<Part part1={part1} exercises1={exercises1} />
			<Part part1={part1} exercises1={exercises1} />
			<Part part1={part1} exercises1={exercises1} />
		</div>
	);
};

export default Content;
