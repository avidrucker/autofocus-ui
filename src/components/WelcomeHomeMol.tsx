import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomeHomeMol = () =>
	<section>
		<p>Welcome to AutoFocus!</p>
		<p>Tap the button below to add a new todo item.</p>
		<Link to="/input-new">
			<button>Add new todo</button>
		</Link>
	</section>