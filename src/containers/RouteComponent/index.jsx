import React from 'react'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import MainPage from '../../pages/Main'

const RouteComponent = () => (
	<Router>
		<Switch>
			<Route path="/">
				<MainPage />
			</Route>
		</Switch>
	</Router>
)

export default RouteComponent
