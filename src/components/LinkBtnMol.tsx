import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './theming';

export const LinkBtnMol = (props: any) =>
		<Link to={props.to}>
			<button
				disabled={props.disabled}
				className={props.className + ` w-100 pa2 mt3 ${styles.button}`}
				>
				{props.text}
			</button>
		</Link>