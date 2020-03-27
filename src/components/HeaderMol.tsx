import React from 'react';

export const HeaderMol = (props: any) =>
	<header>
		{!!props.backBtn &&
			<button>Back</button>
		}
		<h1 className={!!props.backBtn ? "dib" : ""}>
			AutoFocus
		</h1>
		<h2>{props.h2}</h2>
	</header>