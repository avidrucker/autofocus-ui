import React, { Fragment } from 'react';

import { SampleHomeMol3 } from './SampleHomeMol3';
import { HeaderMol } from './HeaderMol';

// note: this is a HomeOrg variant
export default function HomeWithDoneOrg (props: any) {
	return (
		<Fragment>
			<HeaderMol h2={`Home Screen (with done) ${props.designId}`} />
			<SampleHomeMol3 />
		</Fragment>
	);
}