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
			<Handle
				type="target"
				position="left"
				style={{ background: '#555' }}
				isConnectable={true}
			/>
			<div style={{ display: 'flex' }}>
				<EC2 size={40} style={{ position: 'absolute' }} />
				<small style={{
					position: 'relative',
					fontSize: '7px',
					marginTop: '38px',
					marginLeft: '9px'
				}}
				>AWS EC2</small>
			</div>
		</>
	)
}


export default EC2Icon 