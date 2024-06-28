import React, { useState } from "react";
import "./App.css";
import { Attribute, Header, Reset, attrsState } from "./compoments";

const lpMax = 0;

const App = () => {
	const [attrs, setAttrs] = useState(attrsState);
	const [lpPlayers, setLpPlayers] = useState(lpMax);

	function rollDices() {
		const value = Math.floor(Math.random() * 3);

		if (value === 0) {
			return "-";
		} else if (value === 1) {
			return "o";
		} else {
			return "+";
		}
	}

	const reset = (attrs) => {
		attrs.forEach((attr) => (attr.value = rollDices()));
		setLpPlayers(0);
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
								Wykonane rzuty: {lpPlayers}
							</div>
						</div>
						<Reset text={"Reset"} handleClick={() => reset(attrs)} />
						{/* <Reset text={"dodaj kość"} handleClick={() => addDice(attrs)} /> */}
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
