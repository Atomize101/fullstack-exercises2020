import React, { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas' }, { name: 'Chris Patrick' }]);
	const [newName, setNewName] = useState('');
	const [showAll, setShowAll] = useState(true);

	const addPerson = (event) => {
		event.preventDefault();
		console.log('button clicked', event.target);
		setPersons(persons.concat({ name: newName }));
		setNewName('');
	};

	const handleNameChange = (event) => {
		console.log(event.target.vale);
		setNewName(event.target.value);
	};

	const numbers = () => persons.map((person, i) => <p key={i}>{person.name}</p>);

	const personExists = !!persons.find((p) => p.name.toLowerCase() === newName.toLowerCase());

	if (personExists) {
		alert(`${newName} is already added to the phone book`);
		return;
	}
	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<h3>{numbers()}</h3>
		</div>
	);
};

export default App;
