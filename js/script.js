const fetchPokemon = async (pokemon) {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log(APIresponse);
}