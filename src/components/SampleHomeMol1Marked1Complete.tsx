import React, { Fragment } from 'react';

import { LinkBtnMol } from './LinkBtnMol';
// import { LoggerAtom } from './LoggerAtom';

export const SampleHomeMol1Marked1Complete = (props: any) =>
	<Fragment>
		{/*<LoggerAtom label="demoCurrent" value={props.demoCurrent} />*/}
		<ul className="tl center">
			<li className="marked"><strong>Finish trig problem sets</strong></li>
			<li className="unmarked">Wash the dishes</li>
			<li className="complete">Pack for trip tomorrow</li>
		</ul>
		<section>

			<LinkBtnMol
				className=""
				disabled={false}
				text="Focus on To-Do"
				to="/focus"
			/>
			<LinkBtnMol
				className=""
				disabled={false}
				text="Review To-Do's"
				to="/review"
			/>
			<LinkBtnMol
				className=""
				disabled={false}
				text="Add To-Do"
				to="/add-new"
			/>
		</section>
	</Fragment>