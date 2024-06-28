import React, { useState } from "react";

const HealthBar = (props) => {
	const [hpDamaged, setHpDamaged] = useState(false);
	const [spDamaged, setSpDamaged] = useState(false);
	const { index, healthBars } = props;
	const valueBar = healthBars[index];

	function healthValue() {
		setHpDamaged((current) => !current);
	}

	function stressValue() {
		setSpDamaged((current) => !current);
	}

	return (
		<div className='puzzleFlex'>
			<div className='puzzleFlex'>{valueBar.name}</div>
			<button
				className={hpDamaged ? "healthBoxPress" : "healthBox"}
				onClick={healthValue}>
				{valueBar.valueHP}
			</button>
			<button
				className={spDamaged ? "stressBoxPress" : "stressBox"}
				onClick={stressValue}>
				{valueBar.valueSP}
			</button>
		</div>
	);
};

export default HealthBar;
