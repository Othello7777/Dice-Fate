import React from "react";
import PuzzleBox from "./PuzzleBox";

const Attribute = (props) => {
	const { index, attrs, setAttrs, lpPlayers, setLpPlayers } = props;
	const attr = attrs[index];

	function handleClick() {
		props.onDelete(props.id);
	}

	const incValue = (e) => {
		const clonedAttrs = [...attrs];

		const value = Math.floor(Math.random() * 3);

		if (value === 0) {
			clonedAttrs[index].value = "-";
		} else if (value === 1) {
			clonedAttrs[index].value = "o";
		} else {
			clonedAttrs[index].value = "+";
		}
		setAttrs(clonedAttrs);
		setLpPlayers(lpPlayers + 1);
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
