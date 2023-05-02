import styled from 'styled-components';

const ScrollContainer = styled.div`
  display: flex;
  align-items:center;
  gap:50px;
  
  margin-top: 20px;

  @media (max-width: 550px) {
    margin-top: 30px;
  }
`;

export default ScrollContainer;
