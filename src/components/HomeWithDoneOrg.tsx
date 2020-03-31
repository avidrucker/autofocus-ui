import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { SampleHomeMol3 } from './SampleHomeMol3';
import { HeaderMol } from './HeaderMol';
import { BoxWrapper } from './BoxWrapper';

// note: this is a HomeOrg variant
export default function HomeWithDoneOrg (props: any) {
	return (
		<Fragment>
			<HeaderMol h2={`Home Screen (with done) ${props.designId}`} />
			<SampleHomeMol3 />
			<BoxWrapper>
				<Link to="/">
					<button><strong>Return to all screens page</strong></button>
				</Link>
			</BoxWrapper>
		</Fragment>
	);
}