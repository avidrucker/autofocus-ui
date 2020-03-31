import React from 'react';

import { BoxWrapper } from './BoxWrapper';

import { Link } from 'react-router-dom';

export const SampleHomeMol3 = () =>
	<section>
		<ul>
			<li className="complete">Finish trig problem sets for today</li>
			<li className="unmarked">Wash the dishes</li>
			<li className="marked">Pack for trip tomorrow</li>
		</ul>
		<BoxWrapper>
			<button>Enter Focus Mode</button>
			<Link to="/decide">
				<button>Decide what to do</button>
			</Link>
			<Link to="/input-new">
				<button>Add new todo</button>
			</Link>
		</BoxWrapper>
	</section>