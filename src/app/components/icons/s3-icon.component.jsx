import React from 'react'
import S3 from 'react-aws-icons/dist/aws/logo/S3';
import { Handle } from 'reactflow';

function S3Icon() {
	return (
		<>
			<Handle
				type="target"
				position="top"
				style={{ background: '#555' }}
				isConnectable={true}
			/>
			<S3 size={100} />

		</>
	)
}


export default S3Icon 