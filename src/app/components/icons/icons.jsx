import { Handle } from 'reactflow';
import React, { Component } from 'react';
import APIGateway from 'react-aws-icons/dist/aws/logo/APIGateway';
import AWSCloud from 'react-aws-icons/dist/aws/compute/AWSCloud';
import LambdaFunction from 'react-aws-icons/dist/aws/compute/LambdaFunction';
import MobileClient from 'react-aws-icons/dist/aws/general/MobileClient';
import EC2 from 'react-aws-icons/dist/aws/logo/EC2';
import S3 from 'react-aws-icons/dist/aws/logo/S3';
import DB from 'react-aws-icons/dist/aws/compute/DB';

const nodeTypes = {
	LambdaFunction: GenerateIcon(LambdaFunction, 'LambdaFunction'),
	MobileClient: GenerateIcon(MobileClient, 'MobileClient'),
	AWSCloud: GenerateIcon(AWSCloud, 'AWSCloud'),
	APIGateway: GenerateIcon(APIGateway, 'APIGateway'),
	EC2: GenerateIcon(EC2, 'EC2'),
	S3: GenerateIcon(S3, 'S3'),
	DB: GenerateIcon(DB, 'DB'),
}

export default nodeTypes;

function GenerateIcon(HocComponent, nodeType) {
	return class extends Component {
		render() {
			return (
				<>
					<Handle
						position='top'
						type='source'
					/>

					<Handle
						position='top'
						type='target'
						isConnectable={true}
					/>
					<HocComponent size={100} />

				</>

			);
		}
	}
}
