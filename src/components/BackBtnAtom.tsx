import React from 'react';
import { withRouter } from 'react-router-dom';

const BackBtnAtom = (props: any) =>
		<button onClick={props.history.goBack}>{props.text}</button>

export default withRouter(BackBtnAtom);