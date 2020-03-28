import React from 'react';
import './App.css';

import { BoxWrapper } from './components/BoxWrapper';

import WelcomeOrg from './components/WelcomeOrg';
import InputNewOrg from './components/InputNewOrg';
import HomeOrg from './components/HomeOrg';
import DecideOrg from './components/DecideOrg';
import HomeMarkedOrg from './components/HomeMarkedOrg';
import FocusOrg from './components/FocusOrg';
import HomeWithDoneOrg from './components/HomeWithDoneOrg';

function App() {
	let compList = [
		<WelcomeOrg designId="001" />,
		<InputNewOrg designId="002" />,
		<HomeOrg designId="004" />,
		<DecideOrg designId="005" />,
		<HomeMarkedOrg designId="006" />,
		<FocusOrg designId="007" />,
		<HomeWithDoneOrg designId="008" />
	];
	compList = compList.map((x, i) => <BoxWrapper key={i}>{x}</BoxWrapper>);

  return (
    <main className="border-box">
			{compList}
    </main>
  );
}

export default App;
