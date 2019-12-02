import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from '../views/Home';
import Results from '../views/Results';

const Main = () => {
	return(
		<Switch>
			<Route 
				exact
				path="/"
				render={ () => <Home /> }
			/>
			<Route 
				exact
				path="/results"
				render={ () => <Results /> }
			/>
		</Switch>
	)
}

const mapStateToProps = state => ({
	likes: state.likes,
	search: state.search
})

export default withRouter( connect( mapStateToProps, {} )( Main ));