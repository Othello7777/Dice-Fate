import React from "react";
import PuzzleBox from "./PuzzleBox";

const ctrlInc = 5;

const Attribute = (props) => {
	const { index, attrs, setAttrs, lpPlayers, setLpPlayers, onDelete } = props;
	const attr = attrs[index];

	function handleClick() {
		props.onDelete(props.id);
	}

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

	return (
		<PuzzleBox
			name={attr.name}
			value={attr.value}
			incValue={incValue}
			onDelete={handleClick}
			hasColorBox={true}
			color={attr.color}
		/>
	);
};

export default Attribute;
