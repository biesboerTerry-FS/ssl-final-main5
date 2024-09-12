import { useState } from "react";
import { savePokemon } from "../services/pokemonService.js";

const PokemonForm = ({ onSave, name, type, games }) => {
	const [pname, setName] = useState("");
	const [ptype, setType] = useState("");
	const [pgames, setGames] = useState("");

	const addPokemon = async (event) => {
		console.log("Saving Pokémon:", { name: pname, type: ptype, games: pgames });
		event.preventDefault();
		try {
			const pokemon = await savePokemon(pname, ptype, pgames);
			onSave(pokemon);
		} catch (error) {
			console.error("Error saving Pokémon:", error);
		}
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleTypeChange = (event) => {
		setType(event.target.value);
	};

	const handleGamesChange = (event) => {
		setGames(event.target.value);
	};

	return (
		<form onSubmit={addPokemon} style={styles.PokemonForm}>
			<p>Add Pokemon</p>
			<label>Pokemon name:</label>
			<input
				type="text"
				id="name"
				placeholder="Name"
				value={pname}
				name="name"
				onChange={handleNameChange}
				required
			/>
			<label>Pokemon type</label>
			<input
				type="text"
				id="type"
				placeholder="Type"
				value={ptype}
				name="type"
				onChange={handleTypeChange}
				required
			/>
			<label>Pokemon games</label>
			<input
				type="text"
				id="games"
				placeholder="Games"
				value={pgames}
				name="games"
				onChange={handleGamesChange}
			/>
			<button type="submit">Add Pokemon!</button>
		</form>
	);
};

export default PokemonForm;

const styles = {};
