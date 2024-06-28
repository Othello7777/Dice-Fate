import React from "react";
import PuzzleBox from "./PuzzleBox";

const Talent = (props) => {
	const { trees, talentIndex, treeIndex, setTrees, attr } = props;
	const characterTalent = trees[treeIndex].talents[talentIndex];

	const incValue = (e) => {
		const clonedTress = [...trees];
		if (e.ctrlKey) {
			clonedTress[treeIndex].talents[talentIndex].value += 5;
			setTrees(clonedTress);
		} else {
			clonedTress[treeIndex].talents[talentIndex].value += 1;
			setTrees(clonedTress);
		}
	};

	const decValue = (e) => {
		const clonedTress = [...trees];
		if (e.ctrlKey) {
			if (clonedTress[treeIndex].talents[talentIndex].value > 4) {
				clonedTress[treeIndex].talents[talentIndex].value -= 5;
				setTrees(clonedTress);
			}
		} else {
			if (clonedTress[treeIndex].talents[talentIndex].value > 0) {
				clonedTress[treeIndex].talents[talentIndex].value -= 1;
				setTrees(clonedTress);
			}
		}
	};

	return (
		<PuzzleBox
			name={characterTalent.name}
			value={characterTalent.value}
			incValue={incValue}
			decValue={decValue}
			hasColorBox={false}
		/>
	);
};

export default Talent;
