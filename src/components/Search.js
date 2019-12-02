import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import { search } from '../store/actions/search';
import { setLoading } from '../store/actions/loading';
import RangeSlider from '../components/RangeSlider';

const SearchForm = props => {
	const { handleSubmit, search, setLoading, weirdness } = props;

	function onSubmit( formValues ) {
		const { query, weirdnessScale } = formValues;
		setLoading( true );
		search( query, weirdnessScale );
	}

	return(
		<form 
			onSubmit={ handleSubmit( onSubmit ) }
		>
			<label htmlFor="query">Search for GIFs</label>
			<Field 
				name="query"
				component="input"
				type="text"
				placeholder="Search for GIFs"
			/>
			<label htmlFor="weirdnessScale">Weirdness</label>
			<p>{ weirdness }</p>
			<Field 
				name="weirdnessScale"
				component={ RangeSlider }
				defaultValue="1"
			/>
			<button type="submit">Search</button>
		</form>
	)
}

let SearchFormRedux = reduxForm({
	form: "searchGifs",
	initialValues: {
		query: "",
		weirdnessScale: 1
	}
})( SearchForm )

const selector = formValueSelector( "searchGifs" );

SearchFormRedux = connect( state => {
	const weirdness = selector( state, 'weirdnessScale' )

	return {
		weirdness,
	}
}, { search, setLoading })( SearchFormRedux )

export default SearchFormRedux;