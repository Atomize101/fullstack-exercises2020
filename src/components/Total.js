// <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

import React from 'react';

const Total = ({ parts }) => {
	const total = parts.reduce((s, p) => s + p.exercises, 0);
	console.log(total);

	return (
		<div>
			<p>Number of exercises {total}</p>
		</div>
	);
};

export default Total;
