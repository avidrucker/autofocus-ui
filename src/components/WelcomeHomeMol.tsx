import React from 'react';
import { Link } from 'react-router-dom';

import { BoxWrapper } from './BoxWrapper';

export const WelcomeHomeMol = () =>
	<section>
		<p>Welcome to AutoFocus!</p>
		<p>Tap the button below to add a new todo item.</p>
		<BoxWrapper>
			<Link to="/input-new">
				<button><strong>Add new todo</strong></button>
			</Link>
		</BoxWrapper>
	</section>