import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>Give Feedback</h1>
			<div>
				<button onClick={() => setGood(good + 1)}>Good</button>
				<button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
				<button onClick={() => setBad(bad + 1)}>Bad</button>
			</div>
			<div>
				<h1>Statistics</h1>
			</div>
			<div>
				<p>good: {good}</p>
				<p>neutral: {neutral}</p>
				<p>bad: {bad}</p>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
