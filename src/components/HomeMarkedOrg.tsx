import React, { Fragment } from 'react';

import { SampleHomeMol2 } from './SampleHomeMol2';
import { HeaderMol } from './HeaderMol';

// note: this is a HomeOrg variant
export default function HomeMarkedOrg (props: any) {
	return (
		<Fragment>
			<HeaderMol h2={`Home Screen (marked) ${props.designId}`} />
			<SampleHomeMol2 />
		</Fragment>
	);
}