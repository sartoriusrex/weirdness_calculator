import React from 'react';

import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
import LikesContainer from '../components/LikesContainer';

const Home = () => {
	return(
		<main className="container mx-auto">
			<h1>Weirdness Calculator</h1>
			<p>Find out how weird you are by selecting the GIFs that make you laugh. We will show the least weird ones to start. To change the weirdness of the results, you can move the slider.</p>
			<p>When you find a GIF you like, press the <em>Like</em> button. Once you like 5 GIFs, you can calculate your weirdness.</p>
			<p>You can only select one GIF per search term. For example, you cannot like 3 GIFs that you found by only searching for "pantomine." At any point, you can remove previously liked GIFs.</p>

			<SearchForm />

			<SearchResult />

			<LikesContainer />

		</main>
	)
}

export default Home;