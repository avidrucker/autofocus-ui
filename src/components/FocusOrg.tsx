import React, { Fragment } from 'react';

import { HeaderMol } from './HeaderMol';
import { SampleFocusMol } from './SampleFocusMol';

export default function FocusOrg (props: any) {
	return (
		<Fragment>
			<HeaderMol
				h2={`Focus Screen ${props.designId}`}
				backBtn={true} 
			/>
			<SampleFocusMol />
		</Fragment>
	);
}