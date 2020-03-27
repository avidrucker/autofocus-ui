import React, { Fragment } from 'react';

import { SampleHomeMol } from './SampleHomeMol';
import { HeaderMol } from './HeaderMol';

// note: this is the main home org component
export default function HomeOrg (props: any) {
	return (
		<Fragment>
			<HeaderMol h2={`Home Screen (unmarked) ${props.designId}`} />
			<SampleHomeMol />
		</Fragment>
	);
}