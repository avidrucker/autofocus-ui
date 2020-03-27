import React, { Fragment } from 'react';

import { SampleHomeMol } from './SampleHomeMol';
import { HeaderMol } from './HeaderMol';

export default function HomeOrg () {
	return (
		<Fragment>
			<HeaderMol h2="Home Screen" />
			<SampleHomeMol />
		</Fragment>
	);
}