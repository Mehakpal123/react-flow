import React, { useState, useCallback, useEffect } from 'react'
import ReactFlow, { Background, Controls, MarkerType, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import './canvas.component.css';
import nodeTypes from "../icons/icons";
// import nodeTypes from "../../../common/flowData.js";

function Canvas() {

	const [nodes, setNodes] = useState({});
	const [edges, setEdges] = useState({});
	useEffect(() => {
		fetch(`http://localhost:5000/get-flow-data`)
			.then((response) => response.json())
			.then((data) => {
				// data.nodes.map(node => node.id !==1 && node.position = { x: 0, y: 0 });
				data.edges.map(edge => {
					edge.label = edge.data.label;
					edge.markerEnd = {
						type: MarkerType.ArrowClosed, width: 15,
						height: 15,
					}
					return;
				});
				setNodes(data.nodes);
				setEdges(data.edges);
			})
	}, [])

	const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
	const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

	return (
		<div className='canvas__main-div'>
			{nodes.length > 0 && edges.length > 0 ? <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} fitView>
				<Background />
				<Controls />
			</ReactFlow> : <p>Loading</p>}
		</div>
	)
}

export default Canvas
