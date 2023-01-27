import React from 'react'
import './simple-node-component.css';

function SimpleNode({ data: { label } }) {
	return (
		<>
			<div id="simple-node__main">
				<p>{label}</p>
			</div>
		</>
	)
}

export default SimpleNode
