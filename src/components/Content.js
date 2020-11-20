import React from 'react';
import Part from '../components/Part';

const Content = ({ props }) => {
	console.log(props.content[0]);
	<div>
		<Part content={props.content[0]} />
		<Part content={props.content[0]} />
		<Part content={props.content[0]} />
	</div>;
};

export default Content;
