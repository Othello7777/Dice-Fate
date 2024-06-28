import React from "react";
import PuzzleBox from "./PuzzleBox";

const ctrlInc = 5;

const Attribute = (props) => {
	const { index, attrs, setAttrs, lpPlayers, setLpPlayers } = props;
	const attr = attrs[index];

	const incValue = (e) => {
		const clonedAttrs = [...attrs];
		if (e.ctrlKey) {
			if (lpPlayers > ctrlInc - 1) {
				clonedAttrs[index].value += ctrlInc;
				setAttrs(clonedAttrs);
				setLpPlayers(lpPlayers - ctrlInc);
			}
		} else {
			if (lpPlayers > 0) {
				clonedAttrs[index].value++;
				setAttrs(clonedAttrs);
				setLpPlayers(lpPlayers - 1);
			}
		}
	};

	const decValue = (e) => {
		const clonedAttrs = [...attrs];
		if (e.ctrlKey) {
			if (attr.value > ctrlInc - 1) {
				clonedAttrs[index].value -= ctrlInc;
				setAttrs(clonedAttrs);
				setLpPlayers(lpPlayers + ctrlInc);
			}
		} else {
			if (attr.value > 0) {
				clonedAttrs[index].value--;
				setAttrs(clonedAttrs);
				setLpPlayers(lpPlayers + 1);
			}
		}
	};
	return (
		<PuzzleBox
			name={attr.name}
			value={attr.value}
			incValue={incValue}
			decValue={decValue}
			hasColorBox={true}
			color={attr.color}
		/>
	);
};

export default Attribute;
