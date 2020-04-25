import React  from 'react';

export const HeaderWrapper = 
	(props: any) =>
	<div className={props.className}>
		{props.children}
	</div>;