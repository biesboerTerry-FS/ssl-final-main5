// import React from "react";

const PokemonList = ({
	pokemon,
	// _id,
	// removePokemon,
	// editPokemon
}) => {
	if (!pokemon || pokemon.length === 0) {
		return <p>No Pokémon found.</p>;
	}
	console.log("pokemon list", pokemon);

	// removePokemon();
	// editPokemon();

	return (
		<>
			{pokemon.map((pokemon) => (
				<article key={pokemon._id} style={styles.list}>
					<h2>{pokemon.name}</h2>
					<p>Type: {pokemon.type}</p>
					<p>Games: {pokemon.games}</p>
					{/* <button onClick={() => removePokemon(_id)}>Delete</button>
					<button onClick={() => editPokemon(_id)}>Edit</button> */}
				</article>
			))}
		</>
	);
};

export default PokemonList;

const styles = {
	list: {
		padding: "0.5%",
		marginTop: "0.5%",
	},
};
