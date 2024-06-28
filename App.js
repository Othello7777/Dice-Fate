import React, { useState } from "react";
import "./App.css";
import { Attribute, Header, Reset, attrsState } from "./compoments";

const lpMax = 56;

const App = () => {
	const [attrs, setAttrs] = useState(attrsState);
	const [lpPlayers, setLpPlayers] = useState(lpMax);

	const reset = (attrs, setLpPlayers, lpMax) => {
		attrs.forEach((attr) => (attr.value = 3));
		setLpPlayers(lpMax);
	};

	const deleteDice = (id) => {
		setAttrs((prevDices) => {
			return prevDices.filter((diceItem, index) => {
				return index !== id;
			});
		});
	};

	const addDice = (attrs) => {
		attrs.forEach((attr) => (attr.value = 3));
	};

	return (
		<div className='App'>
			<Header />
			<br></br>
			<div className='redBox'>
				<div className='visualBox'>
					<div className='puzzleFlex'>
						<div className='puzzleBox'>
							<div style={{ color: "black" }} className='shadowText'>
								Punkty nauki: {lpPlayers}
							</div>
						</div>
						<Reset
							text={"Reset"}
							handleClick={() => reset(attrs, setLpPlayers, lpMax)}
						/>
						<Reset text={"dodaj kość"} handleClick={() => addDice(attrs)} />
					</div>
					{attrs.map((value, index) => (
						<Attribute
							index={index}
							attrs={attrs}
							setAttrs={setAttrs}
							lpPlayers={lpPlayers}
							setLpPlayers={setLpPlayers}
							onDelete={deleteDice}
						/>
					))}
				</div>
			</div>
			<br></br>
			{/* <div className='blueBox'>
				{trees.map((value, index) => (
					<CharacterTree index={index} trees={trees} setTrees={setTrees} />
				))}
			</div> */}
		</div>
	);
};

export default App;
