import React from 'react';

import { BoxWrapper } from './BoxWrapper';
import { Link } from 'react-router-dom';

export const SampleDecideMol = () =>
	<section>
		<p>
			<span>Do you want to </span>
			<strong>wash the dishes</strong>
			<span> more than </span>
			<strong>finish trig problem sets for today</strong>
			<span>?</span>
		</p>
		<BoxWrapper>
		<Link to="/home-marked">
			<button><strong>No</strong></button>
		</Link>
		<Link to="/home-marked">
			<button>Yes</button>
		</Link>
		<Link to="/home">
			<button>Stop Reviewing</button>
		</Link>
		</BoxWrapper>
	</section>