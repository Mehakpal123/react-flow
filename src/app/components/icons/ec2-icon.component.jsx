import React from 'react'
import EC2 from 'react-aws-icons/dist/aws/logo/EC2';
import { Handle } from 'reactflow';

function EC2Icon() {
	return (
		<>
			<Handle
				type="source"
				position="right"
				style={{ background: '#555' }}
				isConnectable={true}
			/>
			<EC2 size={100} />
		</>
	)
}


export default EC2Icon 