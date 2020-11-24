import React, { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
	const [newName, setNewName] = useState('A new phone number');

	const addPerson = (event) => {
		event.preventDefault();
		setPersons(persons.concat({ name: newName }));
		setNewName('');
	};

	const numbers = () => persons.map((p, i) => <p key={i}>{p.name}</p>);

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<h2>{numbers()}</h2>
		</div>
	);
};

export default App;
