import React from 'react';
import './App.css';

import { BoxWrapper } from './components/BoxWrapper';

import WelcomeOrg from './components/WelcomeOrg';
import InputNewOrg from './components/InputNewOrg';
import HomeOrg from './components/HomeOrg';
import DecideOrg from './components/DecideOrg';

function App() {
  return (
    <main className="border-box">
			<BoxWrapper className="ba b--black mb2">
				<WelcomeOrg />
			</BoxWrapper>

			<BoxWrapper className="ba b--black mb2">
				<InputNewOrg />
			</BoxWrapper>

			<BoxWrapper className="ba b--black mb2">
				<HomeOrg />
			</BoxWrapper>

			<BoxWrapper className="ba b--black mb2">
				<DecideOrg />
			</BoxWrapper>
    </main>
  );
}

export default App;
