import React, { Fragment }  from 'react';
import { styles } from './theming';

export const AppWrapper = 
	(props: any) =>
	<Fragment>
		{
			props.demo === "demo" &&
			<section className="bg-black w-100">
				{/* bg-pink measure-very-narrow */}
				<section
					className={props.className + 
						` flex flex-column vh-100 bg-white center ${styles.global}`}>
					{props.children}
				</section>
			</section>
		}
		{
			!props.demo &&
			<Fragment>
				{props.children}
			</Fragment>
		}
	</Fragment>
	;