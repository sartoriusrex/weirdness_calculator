import React from 'react';

export default function LikesListitemText( props ){
	const { title, searchTerm, weirdness, from } = props;

	return(
		<div className="mx-1">
			<h4 className="mb-2 break-normal">
				<strong>GIF Title: </strong>
				{ title }
			</h4>

			{/* Only display the search term in LikesContainer - Not Results Page */}
			{ from === "likes" ? 
				<p className="break-normal">
					<strong>Search Term: </strong>
					{ searchTerm }
				</p> :
				<p><strong>Weirdness: { weirdness } / 10</strong></p>
			}
		</div>
	)
}