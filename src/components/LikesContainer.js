import React from 'react';

import LikesList from './LikesList';

export default function LikesContainer() {
	return(
		<article className="flex flex-col items-center md:w-1/2 px-4 w-full">
			<h2
				className="text-2xl my-4"
			>Your Liked GIFs</h2>

			<LikesList from="likes" />

		</article>
	)
}