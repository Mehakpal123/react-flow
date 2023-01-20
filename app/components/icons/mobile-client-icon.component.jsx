import React from 'react'
import MobileClient from 'react-aws-icons/dist/aws/general/MobileClient';
import { Handle } from 'reactflow';

function MobileClientIcon({ iconName }) {
	return (
		<>
			<Handle
				type="source"
				position="right"
				style={{ background: '#555' }}
				isConnectable={true}
			/>
			<div>
				<MobileClient size={80} />
				<small style={{ marginLeft: -57 }}>Client</small>
			</div>

		</>
	)
}


export default MobileClientIcon 