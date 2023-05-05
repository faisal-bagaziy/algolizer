import React, {ReactElement, useState} from 'react';
import StyledSideNav from './SideNavStyle';
import ItemText from './ItemText';
import Row from '../common/Row';
import OptionButton from './Options/OptionButton';
import ClearButton from './ClearButton';
import Algorithms from '../../models/Algorithms';
import ScrollContainer from './ScrollContainer';
import AlgorithmSettings from './AlgorithmSettings/AlgorithmSettings';
import AlgorithmOptions from '../../models/AlgorithmOptions';

interface Props {
  adjacencyList: Array<Array<number>>;
  addNewNode: () => void;
  setZoomPercentage: Function;
  zoomPercentage: number;
  onUndirectedEdgeClick: VoidFunction;
  onDirectedEdgeClick: VoidFunction;
  visualizationSpeed: number;
  setVisualizationSpeed: Function;
  clearCanvas: Function;
  selectedAlgorithm: Algorithms;
  setSelectedAlgorithm: Function;
  algorithmOptions: AlgorithmOptions;
  setAlgorithmOptions: Function;
}


const SideNav: React.FC<Props> = (props: Props): ReactElement => {
  const [isVisible] = useState<boolean>(true);


  //TODO: Implement set selected algorithm logic


  return (
    <StyledSideNav isVisible={isVisible}>
      <ScrollContainer>

        <AlgorithmSettings
          algorithmOptions={props.algorithmOptions}
          setAlgorithmOptions={props.setAlgorithmOptions}
          selectedAlgorithm={props.selectedAlgorithm}
          adjacencyList={props.adjacencyList}
        ></AlgorithmSettings>

        <Row justifyContent="center">
        </Row>
        <Row justifyContent="space-evenly" margin="10px 0px">
          {/* add new node */}
          <OptionButton tooltipContent="Add node" onClick={props.addNewNode}>
            Add Node
          </OptionButton>
          <OptionButton
            tooltipContent="Add undirected edge"
            onClick={() => {
              props.onUndirectedEdgeClick();
            }}
          >
           Create Edge
          </OptionButton>

        </Row>
        <ClearButton
          onClick={() => {
            props.clearCanvas();
          }}
        >
          Clear Canvas
        </ClearButton>

        

      </ScrollContainer>
    </StyledSideNav>
  );
};

export default SideNav;
