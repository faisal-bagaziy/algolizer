import React, {ReactElement} from 'react';
import Container  from './Container';
import ParentContainer from './ParentContainer';

interface Props {
  onClick: Function;
  isVisualizing: boolean;
}

const VisualizeButton: React.FC<Props> = (props: Props): ReactElement => {
  return (
   <ParentContainer>
    <Container
      isVisualizing={props.isVisualizing}
      onClick={() => props.onClick()}
    >
      {props.isVisualizing ? 'Visualizing' : 'Start!'}
    </Container>
    </ParentContainer>
  );
};

export default VisualizeButton;
