import React from "react";

const PuzzleBox = (props) => {
	const { name, value, incValue } = props;

	function handleClick() {
		props.onDelete(props.id);
	}

	return (
		<div className='mainPuzzleBox'>
			<div className='puzzleBox'>
				<div className='nameTalent'>
					<div style={{ color: "black" }} className='shadowText'>
						{name}: {value}
					</div>
				</div>
			</div>
			<button className='buttonSkill' onClick={(e) => incValue(e)}>
				➕
			</button>
			<button className='buttonSkill' onClick={handleClick}>
				➖
			</button>
		</div>
	);
};

export default PuzzleBox;
