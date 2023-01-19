import React from 'react'
import LambdaFunction from 'react-aws-icons/dist/aws/compute/LambdaFunction';
import { Handle } from 'reactflow';

function LambdaFunctionIcon() {
	return (

		<>
			<Handle
				type="source"
				position="right"
				style={{ background: '#555' }}
				isConnectable={true}
			/>
			<LambdaFunction size={100} />
		</>
	)
}


export default LambdaFunctionIcon 