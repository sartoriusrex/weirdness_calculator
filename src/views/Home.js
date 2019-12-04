import React from 'react';

import SearchForm from '../components/SearchForm';
import SearchResultContainer from '../components/SearchResultContainer';
import LikesContainer from '../components/LikesContainer';

export default function Home() {
	return(
		<main className="flex flex-col md:mx-12 mx-2">
			<h1 className="text-4xl text-purple-800 text-center my-4">Weirdness Calculator</h1>

			<section className="flex flex-col md:flex-row">
				<p className="my-2 md:block md:w-1/3 md:mx-2">Find out how weird you are by selecting the GIFs that make you laugh. We will show the least weird ones to start. To change the weirdness of the results, you can move the slider.</p>
				<p className="my-2 md:block md:w-1/3 md:mx-2">When you find a GIF you like, press the <em>Like</em> button. Once you like 5 GIFs, you can calculate your weirdness.</p>
				<p className="my-2 md:block md:w-1/3 md:mx-2">You can only select one GIF per search term. For example, you cannot like 3 GIFs that you found by only searching for "pantomine." At any point, you can remove previously liked GIFs.</p>
			</section>

			<hr className="my-4"/>

			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/2 px-4">
						<SearchForm />
					<hr className="my-4"/>
						<SearchResultContainer />
					<hr className="my-4 h-4"/>
				</div>

				<LikesContainer />
			</div>

		</main>
	)
}