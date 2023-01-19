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
			<APIGateway size={100} />
		</>
	)
}


export default APIGatewayIcon 