import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [allFeedBack, setAllFeedBack] = useState([]);

	const handleGoodClick = () => {
		setGood(good + 1);
		setAllFeedBack(allFeedBack.concat(1));
		console.log(allFeedBack);
	};

	const handleNeutralClick = () => {
		setNeutral(neutral + 1);
		setAllFeedBack(allFeedBack.concat(1));
		console.log(allFeedBack);
	};

	const handleBadClick = () => {
		setBad(bad + 1);
		setAllFeedBack(allFeedBack.concat(1));
		console.log(allFeedBack);
	};

	const Statistics = () => {
		const total = good + neutral + bad;
		const average = (good - bad) / total;
		const positive = good / total;

		if (isNaN(average && positive)) {
			return 'No data to show yet';
		}

		return (
			<div>
				<p>Total: {total}</p>
				<p>Average: {average}</p>
				<p>Positive: {positive}</p>
			</div>
		);
	};

	return (
		<div>
			<h1>Give Feedback</h1>
			<div>
				<button onClick={handleGoodClick}>Good</button>
				<button onClick={handleNeutralClick}>Neutral</button>
				<button onClick={handleBadClick}>Bad</button>
			</div>
			<div>
				<h1>Statistics</h1>
			</div>
			<div>
				<p>good: {good}</p>
				<p>neutral: {neutral}</p>
				<p>bad: {bad}</p>
				<Statistics good={good} neutral={neutral} bad={bad} />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
