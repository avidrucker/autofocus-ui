import React  from 'react';

export const BoxWrapper = 
	(props: any) =>
	<div className={props.className + " pa2 ba b--black mb2 mr2"}>
		{props.children}
	</div>;