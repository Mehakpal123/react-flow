import React, { useState, useCallback, useEffect } from 'react'
import ReactFlow, { Background, Controls, MarkerType, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import './canvas.component.css';
import nodeTypes from "../icons/icons";
import ELK from 'elkjs';

function Canvas() {

	const [nodes, setNodes] = useState(null);
	const [edges, setEdges] = useState(null);
	const [finalNodes, setFinalNodes] = useState(null);


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
							console.log('node upper---', nodeUpper);
							node.position = { x: nodeUpper.position.x, y: nodeUpper.position.y + 138 }

							console.log('final node', node);
						}
					})
					setNodes(graph.children);
					setEdges(graph.edges);
				}).catch(console.error)
			})
	}, [])

	useEffect(() => {
		console.log('pre nodes---', nodes);
		// const allNodes = nodes;
		nodes && nodes.map((node) => {
			if (node.appearAbove) {
				const nodeLower = nodes.find((node2) => node2.id === node.appearAbove);
				let lastNodeHorizontal = nodes.find((node2) => node2.id === node.lastNode.horizontal),
					lastNodeVertical = nodes.find((node2) => node2.id === node.lastNode.vertical);

				let lastNodeHorizontalWidth = lastNodeHorizontal ? lastNodeHorizontal.width : '',
					lastNodeVerticalWidth = lastNodeVertical ? lastNodeVertical.width : '';

				let lastNodeHorizontalHeight = lastNodeHorizontal ? lastNodeHorizontal.height : '',
					lastNodeVerticalHeight = lastNodeVertical ? lastNodeVertical.height : '';

				if (node.type === 'SimpleNode') {
					node.position = { x: nodeLower.x - 15, y: nodeLower.y - 50 }
				}

				if (node.lastNode) {
					let width, height = '';

					if (lastNodeVertical && lastNodeHorizontal) {

						height = lastNodeVertical.position.y + lastNodeVertical.height + 10;
						width = `${lastNodeHorizontal.x - 292}px`;
					}

					if (lastNodeVertical && !lastNodeHorizontal) {
						height = lastNodeVertical.position.y + lastNodeVertical.height + 120
						width = lastNodeVertical.width + 20
					}

					if (lastNodeHorizontal && !lastNodeVertical) {
						width = `${lastNodeHorizontal.x - 292}px`;
						height = `${lastNodeHorizontal.height + lastNodeHorizontal.position.y + 150}px`
					}



					node.position = { x: nodeLower.x - 15, y: nodeLower.y - 138 };
					node.style = {
						...node.style,
						width,
						height
					}
				}
			}
		})
		setFinalNodes(nodes);

	}, [nodes])

	const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
	const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

	return (
		<div className='canvas__main-div'>
			{finalNodes ? <ReactFlow nodeTypes={nodeTypes} nodes={finalNodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} fitView>
				<Background />
				<Controls />
			</ReactFlow> : <p>Loading...</p>}
		</div>
	)
}

export default Canvas
