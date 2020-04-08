import React from 'react';

import { BoxWrapper } from './BoxWrapper';

import { prototypeMap } from '../scripts';
import { LinkBtnMol } from './LinkBtnMol';

export default function AllScreensOrg() {
	let compList = [
		//prototypeMap("welcome", {all:"all"}),
		prototypeMap("welcome", ""),
		prototypeMap("add-new", ""),
		prototypeMap("home-3", ""),
		prototypeMap("review", ""),
		prototypeMap("home-marked", ""),
		prototypeMap("focus", ""),
		prototypeMap("home-with-done", {all:"all"})
	];
	compList = compList.map((x, i) =>
		<section className="measure-narrow w5 pa2" key={i}>
			<BoxWrapper className="h56 flex flex-column justify-between">
				{x}
			</BoxWrapper>
		</section>);

  return (
		<section className="">
			<section className="pt2 ph2">
					<LinkBtnMol
						className="b"
						disabled={false}
						text="Try out the app"
						to="/welcome"
					/>
				</section>
			<section className="flex flex-wrap">
				{compList}
			</section>
		</section>
  );
}