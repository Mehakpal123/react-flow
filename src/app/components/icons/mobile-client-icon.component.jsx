import React from 'react'
import MobileClient from 'react-aws-icons/dist/aws/general/MobileClient';
import { Handle } from 'reactflow';

function MobileClientIcon({ iconName }) {
	return (
		<>
			<Handle
				type="source"
				style={{ background: '#555' }}
				isConnectable={true}
			/>

			<MobileClient size={150} />

		</>
	)
}


export default MobileClientIcon 