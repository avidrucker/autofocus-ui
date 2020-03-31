import React from 'react';
import { Link } from 'react-router-dom';

import { BoxWrapper } from './BoxWrapper';

export const SampleFocusMol = () =>
	<section>
		<p>
			<span>You are focusing on </span>
			<strong>finish trig problem sets for today</strong>
		</p>
		<BoxWrapper>
			<Link to="/home-marked">
				<button>Return home without saving</button>
			</Link>
			
			<button disabled>Stopping with work left</button>

			<Link to="/home-with-done">
				<button><strong>Task is 100% complete</strong></button>
			</Link>
		</BoxWrapper>
	</section>