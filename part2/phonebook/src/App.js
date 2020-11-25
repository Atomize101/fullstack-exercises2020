import React, { useState } from 'react';
import Filter from './Filter';
import Persons from './Persons';
import PersonForm from './PersonForm';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [search, setSearch] = useState('');

	const addPerson = (event) => {
		event.preventDefault();
		setPersons(persons.concat({ name: newName, number: newNumber }));
		setNewName('');
		setNewNumber('');
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	const handleSearchChange = (event) => {
		const searchTerm = event.target.value;
		setSearch(searchTerm);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				<Filter
					onSearchChange={handleSearchChange}
					onNameChange={handleNameChange}
					name={newName}
					onNumberChange={handleNumberChange}
					number={newNumber}
				/>
			</div>
			<br />
			<PersonForm onSubmit={addPerson} />
			<h2>Numbers</h2>
			<Persons search={search} persons={persons} />
		</div>
	);
};

export default App;
