import React from "react";

function DescriptionPlayer() {
	return (
		<div className='visualBox'>
			<div className='puzzleFlex'>
				Imię
				<input placeholder='Imię' className='puzzleBox' />
			</div>
			<div className='puzzleFlex'>
				Profesja
				<input placeholder='Profesja' className='puzzleBox' />
			</div>
			<div className='puzzleFlex'>
				Poziom
				<input placeholder='Poziom' className='puzzleBox' />
			</div>
			<div className='puzzleFlex'>
				Aspekt
				<input placeholder='Aspekt' className='puzzleBox' />
			</div>
			<div className='puzzleFlex'>
				Rozegrane sesje
				<input placeholder='Rozegrane sesje' className='puzzleBox' />
			</div>
		</div>
	);
}

export default DescriptionPlayer;
