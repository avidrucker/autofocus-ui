import React from 'react';

import { Link } from 'react-router-dom';

import { BoxWrapper } from './BoxWrapper';

export const SampleHomeMol = () =>
	<section>
		<ul>
			<li className="unmarked">Finish trig problem sets for today</li>
			<li className="unmarked">Wash the dishes</li>
			<li className="unmarked">Pack for trip tomorrow</li>
		</ul>
		<BoxWrapper>
			<Link to="/decide">
				<button><strong>Decide what to do</strong></button>
			</Link>
			<Link to="/input-new">
				<button>Add new todo</button>
			</Link>
		</BoxWrapper>
	</section>