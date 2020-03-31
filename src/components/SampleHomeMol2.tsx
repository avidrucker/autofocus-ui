import React from 'react';

import { Link } from 'react-router-dom';

import { BoxWrapper } from './BoxWrapper';

export const SampleHomeMol2 = () =>
	<section>
		<ul>
			<li className="marked">Finish trig problem sets for today</li>
			<li className="unmarked">Wash the dishes</li>
			<li className="marked">Pack for trip tomorrow</li>
		</ul>
		<BoxWrapper>
			<Link to="/focus">
				<button><strong>Enter Focus Mode</strong></button>
			</Link>
			<Link to="/decide">
				<button>Decide what to do</button>
			</Link>
			<Link to="/input-new">
				<button>Add new todo</button>
			</Link>
		</BoxWrapper>
	</section>