import React, { Fragment } from 'react';

import { LinkBtnMol } from './LinkBtnMol';

export const SampleFocusMol = (props: any) =>
	<Fragment>
		<p>
			<span>You are focusing on <br /></span>
			<strong>{props.cmwtd}</strong>
			<span><br />...</span>
		</p>
		<section className="flex flex-column">
			<LinkBtnMol
				className=""
				disabled={false}
				text="Stop with work left"
				to="/"
			/>

			<LinkBtnMol
				className="b"
				disabled={false}
				text="Mark 100% complete"
				to="/home-with-done"
			/>
		</section>
	</Fragment>