import React, { Fragment } from 'react';

import { LinkBtnMol } from './LinkBtnMol';
// import { LoggerAtom } from './LoggerAtom';

export const SampleReviewMol = (props: any) =>
	<Fragment>
		{/*<LoggerAtom label="demoCurrent" value={props.demoCurrent} />*/}
		<p>
			<span>Do you want to<br /></span>
			<strong>"{props.current}"<br /></strong>
			<span> more than<br /></span>
			<strong>"{props.cmwtd}"</strong>
			<span>?</span>
		</p>
		<section className="flex flex-column">
			{
				props.demoCurrent === "H" &&
				<Fragment>
					<LinkBtnMol
						className="b"
						text="No"
						to="review-2"
					/>
					<LinkBtnMol
						disabled={false}
						text="Yes"
						to="/"
					/>
				</Fragment>
			}
			{
				props.demoCurrent === "I" &&
				<Fragment>
					<LinkBtnMol
						disabled={false}
						text="No"
						to="/home-marked"
					/>
					<LinkBtnMol
						className="b"
						disabled={false}
						text="Yes"
						to="/home-marked"
					/>
				</Fragment>
			}
			<LinkBtnMol
				disabled={false}
				text="Stop Review"
				to="/home"
			/>
		</section>
	</Fragment>