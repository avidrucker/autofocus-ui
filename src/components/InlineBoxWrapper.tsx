import React  from 'react';

export const InlineBoxWrapper = 
	(props: any) =>
	<div className={props.className + " pa2 ba b--black mb2 mr2 dib"}>
		{props.children}
	</div>;