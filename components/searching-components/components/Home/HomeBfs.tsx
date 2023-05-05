import React, { ReactElement, useState } from "react";
import SideNav from "../SideNav/SideNav";
import GraphCanvas from "../GraphCanvas/GraphCanvas";
import VisualizeButton from "../VisualizeButton/VisualizeButton";
import Algorithms from "../../models/Algorithms";
import NodeInfo from "../../models/NodeInfo";
import CreateEdgeModal from "../CreateEdgeModal/CreateEdgeModal";
import { v4 as uuidv4 } from "uuid";
import AlgorithmOptions from "../../models/AlgorithmOptions";
import algorithms from "../../algorithms";


interface HomeProps {
  changeTheme: Function;

}

const HomeBfs: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  const [adjacencyList, setAdjacencyList] = useState<Array<Array<number>>>([]);
  const [nodeKeys, setNodeKeys] = useState<Array<string>>([]);
  const [visited, setVisited] = useState<Array<number>>([]);
  const [currentEdge, setCurrentEdge] = useState<[number, number]>([-1, -1]);
  const [graphInfo, setGraphInfo] = useState<Array<NodeInfo>>([]);

  const [isVisualizing, setIsVisualizing] = useState<boolean>(false);
  const [zoomPercentage, setZoomPercentage] = useState<number>(1);
  const [visualizationSpeed, setVisualizationSpeed] = useState<number>(1000);
  const [isConnectingUndirected, setIsConnectingUndirected] = useState<boolean>(
    false
  );
  const [isConnectingDirected, setIsConnectingDirected] = useState<boolean>(
    false
  );

  const [algorithmOptions, setAlgorithmOptions] = useState<AlgorithmOptions>({
    startNode: 0,
  });

  const resetGraphState = () => {
    setVisited([]);
    setCurrentEdge([-1, -1]);
    setGraphInfo([]);
  };

  const addNewEdge = (
    firstNode: number,
    secondNode: number,
    isDirected: boolean
  ) => {
    if (isVisualizing) return;
    const newAdjacencyList = adjacencyList.slice();
    newAdjacencyList[firstNode].push(secondNode);
    if (!isDirected) newAdjacencyList[secondNode].push(firstNode);
    setAdjacencyList(newAdjacencyList);
  };

  const connectNodes = (
    firstNode: number,
    secondNode: number,
    directed: boolean
  ) => {
    if (firstNode === undefined || secondNode === undefined) return;
    if (firstNode === secondNode) return;
    if (
      firstNode > adjacencyList.length - 1 ||
      secondNode > adjacencyList.length - 1
    )
      return;
    if (adjacencyList[firstNode].includes(secondNode)) return;
    if (adjacencyList[secondNode].includes(firstNode)) return;

    addNewEdge(firstNode, secondNode, directed);
  };

  const deleteEdge = (firstNode: number, secondNode: number) => {
    if (isVisualizing) return;
    const newAdjacencyList = adjacencyList.slice();
    newAdjacencyList[firstNode] = newAdjacencyList[firstNode].filter(
      (val: number) => val !== secondNode
    );
    newAdjacencyList[secondNode] = newAdjacencyList[secondNode].filter(
      (val: number) => val !== firstNode
    );

    setAdjacencyList(newAdjacencyList);
    resetGraphState();
  };
  const deleteNode = (node: number) => {
    if (isVisualizing) return;
    let newAdjacencyList = adjacencyList.map((val: Array<number>) => {
      //remove node from neighbours and decrement all nodes bigger than the
      //removed node
      return val
        .filter((neighbour: number) => node !== neighbour)
        .map((current: number) => {
          if (current >= node) return current - 1;
          return current;
        });
    });

    newAdjacencyList = newAdjacencyList.filter(
      (_, index: number) => index !== node
    );

    const newNodeKeys = nodeKeys.filter((_, index: number) => index !== node);

    setNodeKeys(newNodeKeys);
    setAdjacencyList(newAdjacencyList);
    resetGraphState();

    const newAlgorithmOptions: AlgorithmOptions = Object.create(
      algorithmOptions
    );
    newAlgorithmOptions.startNode = 0;
    setAlgorithmOptions(newAlgorithmOptions);
  };

  const handleEdgeModalExit = () => {
    setIsConnectingUndirected(false);
    setIsConnectingDirected(false);
  };

  const onCreateUndirectedEdge = (firstNode: number, secondNode: number) => {
    connectNodes(firstNode, secondNode, isConnectingDirected);
  };

  const addNewNode = () => {
    if (isVisualizing) return;
    const newAdjacencyList = adjacencyList.slice();
    const newNodeKeys = nodeKeys.slice();
    newAdjacencyList.push([]);
    newNodeKeys.push(uuidv4());
    setNodeKeys(newNodeKeys);
    setAdjacencyList((prev: Array<Array<number>>) => newAdjacencyList);
  };

  //TODO: switch case between algorithms
  const handleVisualize = async () => {
    if (adjacencyList.length === 0) return;
    if (isVisualizing) return;
    setIsVisualizing(true);
    setVisited([]);
    setCurrentEdge([-1, -1]);
    setGraphInfo([]);

    const startingNode = algorithmOptions.startNode ?? 0;

        await algorithms.bfs(
          adjacencyList,
          setVisited,
          startingNode,
          visualizationSpeed,
          setGraphInfo,
          setCurrentEdge
        );
    setIsVisualizing(false);
  };

  const changeVisualizationSpeed = (speed: number) => {
    if (isVisualizing) return;
    setVisualizationSpeed(speed);
  };

  const changeZoomPercentage = (percentage: number) => {
    if (isVisualizing) return;
    setZoomPercentage(percentage);
  };

  const clearCanvas = () => {
    if (isVisualizing) return;
    setVisited([]);
    setAdjacencyList([]);
    setGraphInfo([]);
    setCurrentEdge([-1, -1]);
    setNodeKeys([]);
  };


  const availableAlgorithms: Array<Algorithms> = [
    Algorithms.dfs,
    Algorithms.bfs,
  ];
  
  const setSelectedAlgorithm = (val: number) => {
    const newSelectedAlgorithm = availableAlgorithms[1];
  };

  return (
    <div>

      <GraphCanvas
        onNodeDelete={deleteNode}
        onEdgeDelete={deleteEdge}
        visited={visited}
        adjacencyList={adjacencyList}
        nodeKeys={nodeKeys}
        zoomPercentage={zoomPercentage}
        graphInfo={graphInfo}
        currentEdge={currentEdge}
        addNewNode={addNewNode}
        addNewEdge={addNewEdge}
        clearCanvas={clearCanvas}
      ></GraphCanvas>
            <SideNav
        onUndirectedEdgeClick={() => setIsConnectingUndirected(true)}
        onDirectedEdgeClick={() => setIsConnectingDirected(true)}
        adjacencyList={adjacencyList}
        addNewNode={addNewNode}
        setZoomPercentage={changeZoomPercentage}
        zoomPercentage={zoomPercentage}
        visualizationSpeed={visualizationSpeed}
        setVisualizationSpeed={changeVisualizationSpeed}
        clearCanvas={clearCanvas}
        selectedAlgorithm={ Algorithms.bfs}
        setSelectedAlgorithm={setSelectedAlgorithm}
        algorithmOptions={algorithmOptions}
        setAlgorithmOptions={setAlgorithmOptions}
      />
      <VisualizeButton
        isVisualizing={isVisualizing}
        onClick={handleVisualize}
      ></VisualizeButton>
      <CreateEdgeModal
        directed={isConnectingDirected}
        isVisible={isConnectingDirected || isConnectingUndirected}
        onExit={handleEdgeModalExit}
        onAddEdge={onCreateUndirectedEdge}
        adjacencyList={adjacencyList}
      />
    </div>
  );
};

export default HomeBfs;
