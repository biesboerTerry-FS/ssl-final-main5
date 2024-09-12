import React from "react";

function Pokemon({ pokemon }) {
	const { name, type, games } = pokemon;
	return (
		<>
			<h3>{name}</h3>
			<p>{type}</p>
			<p>{games}</p>
		</>
	);
}

export default Pokemon;
