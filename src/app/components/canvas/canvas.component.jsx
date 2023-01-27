import React, { useState, useCallback, useEffect } from 'react'
import ReactFlow, { Background, Controls, MarkerType, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import './canvas.component.css';
import nodeTypes from "../icons/icons";
import ELK from 'elkjs';

function Canvas() {

	const [nodes, setNodes] = useState(null);
	const [edges, setEdges] = useState(null);


	useEffect(() => {
		fetch(`http://localhost:5000/get-flow-data`)
			.then((response) => response.json())
			.then((data) => {
				data.edges.map(edge => {
					edge.label = edge.data.label;
					edge.markerEnd = {
						type: MarkerType.ArrowClosed, width: 15,
						height: 15,
					}
					return;
				});

				const elk = new ELK({
					defaultLayoutOptions: {
						"elk.layered.spacing.nodeNodeBetweenLayers": 170,
						"elk.spacing.nodeNode": "100",
					}
				});
				const graph = {
					id: "root",
					children: data.nodes,
					edges: data.edges
				}

				elk.layout(graph).then((graph) => {
					graph.children.map((node) => {
						node.position = { x: node.x, y: node.y }

						if (node.appearUnder) {
							const nodeUpper = graph.children.find((node2) => node2.id === node.appearUnder);
							node.position = { x: nodeUpper.x, y: nodeUpper.y + 138 }
						}

						if (node.appearAbove) {
							const nodeLower = graph.children.find((node2) => node2.id === node.appearAbove);
							const lastNodeHorizontal = graph.children.find((node2) => node2.id === node.lastNode.horizontal);
							const lastNodeVertical = graph.children.find((node2) => node2.id === node.lastNode.vertical);

							if (node.type === 'SimpleNode') {
								node.position = { x: nodeLower.x - 15, y: nodeLower.y - 100 }
							}

							if (node.lastNode) {
								node.position = { x: nodeLower.x - 15, y: nodeLower.y - 138 };
								console.log('node lower width---', nodeLower);
								node.style = {
									...node.style,
									width: lastNodeHorizontal
										? lastNodeHorizontal.x - 292 :
										nodeLower.width + 80
								}
							}
						}
					})
					graph.edges.map((edge) => edge)
					setNodes(graph.children);
					setEdges(graph.edges);
				}).catch(console.error)
			})
	}, [])

	const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
	const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

	return (
		<div className='canvas__main-div'>
			{console.log('nodes', nodes)}
			{nodes ? <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} fitView>
				<Background />
				<Controls />
			</ReactFlow> : <p>Loading...</p>}
		</div>
	)
}

export default Canvas
