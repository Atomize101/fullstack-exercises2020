import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
	const [selected, setSelected] = useState(0);
	// Create an array of how many anecdotes and set each value to 0 initially.
	const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

	const getRandomAnecdote = () => {
		var randomIndex = Math.floor(Math.random() * anecdotes.length);
		setSelected(randomIndex);
	};

	const vote = () => {
		// Create a new array to store the votes being selected, then update state
		const newVotes = [...votes];
		newVotes[selected]++;
		console.log(votes);
		setVotes(newVotes);
	};

	const mostVotes = votes.reduce((a, b, i, arr) => (b > arr[a] ? i : a), 0);

	const TopAnecdote = () => {
		return (
			<div>
				<h1>Anecdote with the most votes</h1>
				{props.anecdotes[mostVotes]}
			</div>
		);
	};

	return (
		<div>
			<h1>Anecdote of the day</h1>
			{props.anecdotes[selected]}
			<br />
			<p>This anecdote has {votes[selected]} votes</p>
			<button onClick={vote}>Vote</button>
			<button onClick={getRandomAnecdote}>Test</button>
			<br />
			<TopAnecdote />
		</div>
	);
};

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
