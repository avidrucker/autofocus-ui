import React, { Fragment } from 'react';
import { HeaderMol } from './HeaderMol';

export default function InputNewOrg () {
	return (
		<Fragment>
			<HeaderMol h2="Import New Screen" backBtn={true} />
			<section>
				<p>Enter a new todo:</p>
				<textarea style={{width: '100%'}} placeholder="eg. Wash the dishes" />
				<button disabled>Confirm</button>
			</section>
		</Fragment>
	);
}