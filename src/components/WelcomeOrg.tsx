import React, { Fragment } from 'react';

import { WelcomeHomeMol } from './WelcomeHomeMol';
import { HeaderMol } from './HeaderMol';

export default function HomeOrg () {
	return (
		<Fragment>
			<HeaderMol h2="Welcome Screen" />
			<WelcomeHomeMol />
		</Fragment>
	);
}