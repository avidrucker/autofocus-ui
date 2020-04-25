import React from 'react';
import BackBtnAtom from './BackBtnAtom';
import { HeaderWrapper } from './HeaderWrapper';
import { styles } from './theming';

export const HeaderMol = (props: any) =>
	<header className="pa3 pt4 h4 bg-blue relative w-100 white">
		<HeaderWrapper className="flex flex-row items-center">
			{!!props.backBtn &&
				<BackBtnAtom text="Back" className={`pa2 mr2 ${styles.backButton}`} />
			}
			<h1 className={!!props.backBtn ? `dib pl3 ma0 ${styles.header}` : `tc center ma0 ${styles.header}`}>
				AutoFocus
			</h1>
			<div className="dn absolute top-0 right-0 o-70 w-40">
				<label>{props.h2}</label>
			</div>
		</HeaderWrapper>
	</header>