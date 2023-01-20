import React from 'react'
import LambdaFunction from 'react-aws-icons/dist/aws/compute/LambdaFunction';
import { Handle } from 'reactflow';

function LambdaFunctionIcon() {
	return (

		<>
			<Handle
				type="target"
				position="left"
				style={{ background: '#555' }}
				isConnectable={true}
			/>
			<Handle
				id="bottom_source_0"
				type="source"
				position="bottom"
				style={{ background: '#555' }}
				isConnectable={true}
			/>
			<Handle
				id="right_source_0"
				type="source"
				position="right"
				style={{ background: '#555' }}
				isConnectable={true}
			/>
			<LambdaFunction size={45} />
		</>
	)
}


export default LambdaFunctionIcon 