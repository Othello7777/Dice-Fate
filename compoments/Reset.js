import React from "react";

const Reset = (props) => (
	<button className='buttonSkill' onClick={props.handleClick}>
		{props.text}
	</button>
);

export default Reset;
