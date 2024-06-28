import React from "react";
import Reset from "./Reset";
import Talent from "./Talent";

const CharacterTree = (props) => {
	const { trees, index, setTrees } = props;

	const reset = (trees, index, setTrees) => {
		const clonedTress = [...trees];
		clonedTress[index].talents.forEach((talent) => (talent.value = 0));
		setTrees(clonedTress);
	};

	return (
		<div className='visualBox'>
			<div className='puzzleFlex'>
				<div className='puzzleBox'>
					<div style={{ color: "black" }} className='shadowText'>
						{trees[index].name}
					</div>
				</div>
				<Reset handleClick={() => reset(trees, index, setTrees)} />
			</div>

			{trees[index].talents.map((value, talentIndex) => (
				<Talent
					trees={trees}
					setTrees={setTrees}
					talentIndex={talentIndex}
					treeIndex={index}
				/>
			))}
		</div>
	);
};

export default CharacterTree;
