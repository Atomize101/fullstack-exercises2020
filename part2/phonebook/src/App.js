import React, { useState, useEffect } from 'react';
import Filter from './Filter';

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
	const [searchResults, setSearchResults] = useState('');

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

	const allPeople = () =>
		persons.map((person, i) => (
			<p key={i}>
				{person.name} {person.number}
			</p>
		));

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				<Filter onSearchChange={handleSearchChange} search={search} />
			</div>
			<br />
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
			<h3>{allPeople()}</h3>
		</div>
	);
};

export default App;
