import React  from 'react';

export const BoxWrapper = 
	(props: any) =>
	<div className={props.className}>
		{props.children}
	</div>;