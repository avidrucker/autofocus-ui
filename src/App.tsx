import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import WelcomeOrg from './components/WelcomeOrg';
import InputNewOrg from './components/InputNewOrg';
import HomeOrg from './components/HomeOrg';
import DecideOrg from './components/DecideOrg';
import HomeMarkedOrg from './components/HomeMarkedOrg';
import FocusOrg from './components/FocusOrg';
import HomeWithDoneOrg from './components/HomeWithDoneOrg';
import AllScreensOrg from './components/AllScreensOrg';

function App() {
  return (
    <main className="border-box">
			<Switch>
				<Route
					exact path='/input-new'
					render={(props) => <InputNewOrg {...props} designId="002" />} />
				<Route
					exact path='/home'
					render={(props) => <HomeOrg {...props} designId="004" />} />
				<Route
					exact path='/decide'
					render={(props) => <DecideOrg {...props} designId="005" />} />
				<Route
					exact path='/home-marked'
					render={(props) => 
						<HomeMarkedOrg {...props} designId="006" />} />
				<Route
					exact path='/focus'
					render={(props) => <FocusOrg {...props} designId="007" />} />
				<Route
					exact path='/home-with-done'
					render={(props) => <HomeWithDoneOrg {...props} designId="007" />} />
				<Route
					exact path='/welcome'
					render={(props) => <WelcomeOrg {...props} designId="001" />} />
				<Route
					path='/'
					component={AllScreensOrg} />
			</Switch>
    </main>
  );
}

export default App;
