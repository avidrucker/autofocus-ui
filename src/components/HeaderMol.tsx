import React from 'react';
import BackBtnAtom from './BackBtnAtom';

export const HeaderMol = (props: any) =>
	<header>
		{!!props.backBtn &&
			<BackBtnAtom text="Back" />
		}
		<h1 className={!!props.backBtn ? "dib" : ""}>
			AutoFocus
		</h1>
		<h2>{props.h2}</h2>
	</header>