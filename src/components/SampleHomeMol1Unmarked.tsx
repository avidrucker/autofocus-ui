import React, { Fragment } from 'react';

import { LinkBtnMol } from './LinkBtnMol';
// import { LoggerAtom } from './LoggerAtom';

export const SampleHomeMol1Unmarked = (props: any) =>
	<Fragment>
		{/*<LoggerAtom label="demoCurrent" value={props.demoCurrent} />*/}
		<ul className="tl center">
			<li className="unmarked">Finish trig problem sets</li>
		</ul>
		<section>

			<LinkBtnMol
				className=""
				disabled={false}
				text="Review To-Do's"
				to="/review"
			/>

			{
				props.demoCurrent === "C" &&
				<LinkBtnMol
					className="b"
					disabled={false}
					text="Add To-Do"
					to="/add-new-2"
				/>
			}
			{
				!props.demoCurrent &&
				<LinkBtnMol
					className="b"
					disabled={false}
					text="Add To-Do"
					to="/add-new"
				/>
			}
		</section>
	</Fragment>