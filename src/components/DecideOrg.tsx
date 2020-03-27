import React, { Fragment } from 'react';

import { HeaderMol } from './HeaderMol';
import { SampleDecideMol } from './SampleDecideMol';

export default function DecideOrg () {
	return (
		<Fragment>
			<HeaderMol h2="Decide Screen" backBtn={true} />
			<SampleDecideMol />
		</Fragment>
	);
}