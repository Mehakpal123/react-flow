import React from 'react'
import DB from 'react-aws-icons/dist/aws/compute/DB';
import { Handle } from 'reactflow';

function DBIcon() {
	return (
		<>
			<Handle
				type="target"
				position="top"
				style={{ background: '#555' }}
				isConnectable={true}
			/>
			<DB size={100} />
		</>
	)
}


export default DBIcon 