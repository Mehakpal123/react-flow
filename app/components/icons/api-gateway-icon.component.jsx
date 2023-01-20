import React from 'react'
import APIGateway from 'react-aws-icons/dist/aws/logo/APIGateway';
import { Handle } from 'reactflow';

function APIGatewayIcon() {
	return (
		<>
			<Handle
				type="source"
				position="right"
				style={{ background: '#555' }}
				isConnectable={true}
			/>
			<Handle
				type="target"
				position="left"
				style={{ background: '#555' }}
				isConnectable={true}
			/>
			<div style={{ display: 'flex' }}>
				<APIGateway size={30} style={{ position: 'absolute' }} />
				<small style={{
					position: 'relative',
					fontSize: '7px',
					marginTop: '30px',
					marginLeft: '-6px'
				}}
				>API Gateway</small>
			</div>
		</>
	)
}


export default APIGatewayIcon 