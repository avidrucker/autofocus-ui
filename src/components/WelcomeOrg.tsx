import React, { Fragment } from 'react';

import { WelcomeHomeMol } from './WelcomeHomeMol';
import { HeaderMol } from './HeaderMol';

// note: this is a HomeOrg variant
export default function WelcomeOrg (props: any) {
	return (
		<Fragment>
			<HeaderMol h2={"Welcome Screen " + props.designId} />
			<WelcomeHomeMol />
		</Fragment>
	);
}