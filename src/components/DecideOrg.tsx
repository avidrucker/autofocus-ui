import React, { Fragment } from 'react';

import { HeaderMol } from './HeaderMol';
import { SampleDecideMol } from './SampleDecideMol';

export default function DecideOrg (props: any) {
	return (
		<Fragment>
			<HeaderMol
				h2={`Decide Screen ${props.designId}`}
				backBtn={true}
			/>
			<SampleDecideMol />
		</Fragment>
	);
}