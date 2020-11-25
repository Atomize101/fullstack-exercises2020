import React, { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([{ name: '' }]);
	const [newName, setNewName] = useState('');
	const [numbers, setNumbers] = useState([{ number: '' }]);
	const [newNumber, setNewNumber] = useState('');

	const addPerson = (event) => {
		event.preventDefault();
		console.log('button clicked', event.target);
		setPersons(persons.concat({ name: newName }));
		setNewName('');
		setNumbers(numbers.concat({ number: newNumber }));
	};

	const handleNameChange = (event) => {
		console.log(event.target.vale);
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		console.log(event.target.vale);
		setNewNumber(event.target.value);
	};

	const allPeople = () => persons.map((person, i) => <p key={i}>{person.name}</p>);
	const allNumbers = () => numbers.map((number, i) => <p key={i}>{number.number}</p>);

	const personExists = !!persons.find((p) => p.name.toLowerCase() === newName.toLowerCase());

	//if (personExists) {
	//	alert(`${newName} is already added to the phone book`);
	//	return;
	//}
	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					Name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					Number: <input value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<h3>
				{allPeople()}
				{allNumbers()}
			</h3>
		</div>
	);
};

export default App;
