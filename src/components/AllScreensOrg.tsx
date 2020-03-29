import React from 'react';
import { Link } from 'react-router-dom';

import { BoxWrapper } from './BoxWrapper';
import { InlineBoxWrapper } from './InlineBoxWrapper';

import WelcomeOrg from './WelcomeOrg';
import InputNewOrg from './InputNewOrg';
import HomeOrg from './HomeOrg';
import DecideOrg from './DecideOrg';
import HomeMarkedOrg from './HomeMarkedOrg';
import FocusOrg from './FocusOrg';
import HomeWithDoneOrg from './HomeWithDoneOrg';

export default function AllScreensOrg() {
	let compList = [
		<WelcomeOrg designId="001" />,
		<InputNewOrg designId="002" />,
		<HomeOrg designId="004" />,
		<DecideOrg designId="005" />,
		<HomeMarkedOrg designId="006" />,
		<FocusOrg designId="007" />,
		<HomeWithDoneOrg designId="008" />
	];
	compList = compList.map((x, i) => <InlineBoxWrapper key={i}>{x}</InlineBoxWrapper>);

  return (
    <section>
			<BoxWrapper>
				<Link to="/welcome"><button>Try out app</button></Link>
			</BoxWrapper>
			{compList}
    </section>
  );
}