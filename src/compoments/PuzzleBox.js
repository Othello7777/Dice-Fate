import React from "react";

const PuzzleBox = (props) => {
	const { name, value, incValue, decValue, hasColorBox, color } = props;

    return (
		<div className='mainPuzzleBox'>
			<div className='puzzleBox'>
				<div className='nameTalent'>
					<div style={{ color: "black" }} className='shadowText'>
						{name}: {value}
					</div>
				</div>
				{hasColorBox ? (
					<div
						style={{ backgroundColor: color }}
						className='colorBoxSkill'
					/>
				) : (
					<></>
				)}
			</div>
			<button className='buttonSkill' onClick={(e) => incValue(e)}>
				➕
			</button>
			<button className='buttonSkill' onClick={(e) => decValue(e)}>
				➖
			</button>
		</div>
	);
};

export default PuzzleBox;
