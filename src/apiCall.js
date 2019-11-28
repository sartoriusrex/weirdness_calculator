import axios from 'axios';

export default apiCall = async ( query, weirdness ) => {
	const KEY = PROCESS.env.GIPHY;
	let requestUrl = `api.giphy.com/v1/gifs/translate?s=${query}&weirdness=${weirdness}&api_key=${KEY}`

	try {
		let gif = await axios.get( requestUrl )
		return gif;
	} catch( error ){
		console.log(error.message);
		return error.message;
	}
}