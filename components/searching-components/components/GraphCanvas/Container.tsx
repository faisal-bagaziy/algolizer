import styled from 'styled-components';
import Theme from '../../models/Theme';

interface Props {
  theme: Theme;
}

const Container = styled.div<Props>`
  height: calc(100vh - 400px);
  max-width: 100%;
  max-height: 100%;
  background-color: #E1E1E1;
  transition-duration: 0.3s;
  transition-property: background-color;
  
  margin: 20px;
  border: solid #fff 15px;
  border-radius: 1rem 0 1rem 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);

  position: relative;

  @media (max-width: 550px) {
    height: calc(100vh - 90px);
  }
`;

export default Container;
