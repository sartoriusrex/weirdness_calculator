import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

// actions
import { search } from '../store/actions/search';
import { setLoading } from '../store/actions/loading';

// components
import RangeSlider from '../components/RangeSlider';
import SearchInput from '../components/SearchInput';

// form validations for redux-form
import { validateSearchInput } from '../formValidations/validateSearchInput';


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
			className="flex flex-col items-center mb-8"
		>
			<Field 
				name="query"
				component={ SearchInput }
				label="Search Term"
			/>

			<label 
				htmlFor="weirdnessScale"
				className="text-sm text-gray-600 px-2 mb-1 w-full"
			>Weirdness </label>

			<Field 
				name="weirdnessScale"
				component={ RangeSlider }
				defaultValue="0"
			/>

			<p 
				className="text-lg mb-2"
			>Weirdness: { weirdness }</p>
			
			<button 
				type="submit"
				className="bg-purple-800 text-white w-full md:w-1/4"
			>Search</button>

		</form>
	)
}

let SearchFormRedux = reduxForm({
	form: "searchGifs", //redux form names the form for later reference
	initialValues: { //sets the initial values
		query: "",
		weirdnessScale: 0
	},
	validate: validateSearchInput //validates the inputs
})( SearchForm )

const selector = formValueSelector( "searchGifs" ); //selects the value from a field for reference

SearchFormRedux = connect( state => {
	const weirdness = selector( state, 'weirdnessScale' ) //selects weirdness from the RangeSlider to pass onto props

	return {
		weirdness,
	}
}, { search, setLoading })( SearchFormRedux )

export default SearchFormRedux;