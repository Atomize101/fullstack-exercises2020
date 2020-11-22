import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	// const [allFeedBack, setAllFeedBack] = useState([]);

	/*	const handleGoodClick = () => {
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
*/
	const Statistics = () => {
		const total = good + neutral + bad;
		const average = (good - bad) / total;
		const positive = good / total;

		if (isNaN(average && positive)) {
			return 'No data to show yet';
		}

		return (
			<div>
				<Statistic text="good" value={good} />
				<Statistic text="neutral" value={neutral} />
				<Statistic text="bad" value={bad} />
				<Statistic text="Total: " value={total} />
				<Statistic text="Average: " value={average} />
				<Statistic text="Positive: " value={positive} />
			</div>
		);
	};

	const Statistic = ({ text, value }) => {
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<td>{text}</td>
							<td>{value}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	};

	const Button = ({ onClick, text }) => {
		return (
			<div>
				<button onClick={onClick}>{text}</button>
			</div>
		);
	};

	return (
		<div>
			<h1>Give Feedback</h1>
			<div>
				<Button text="good" onClick={() => setGood(good + 1)} />
				<Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
				<Button text="bad" onClick={() => setBad(bad + 1)} />
			</div>
			<div>
				<h1>Statistics</h1>
			</div>
			<div>
				<Statistics good={good} neutral={neutral} bad={bad} />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
