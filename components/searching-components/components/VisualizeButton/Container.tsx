import styled from 'styled-components';

interface Props {
  isVisualizing: boolean;
}

const Container = styled.div<Props>`
  z-index: 1;
  left: calc(100% - 150px - 20px);
  top: calc(100% - 35px - 20px);
  display: flex;
  justify-content: center;
  font-size: 24px;
  align-items: center;
  width: 150px;
  height: 35px;
  margin-right: 20px;
  margin-bottom: 20px;
  color: white;
  transition-duration: 0.3s;
  user-select: none;
  cursor: pointer;

  background-color: white;
  border: solid #33332d 2px;
  box-shadow: -3px 5px #33332d;
  color: #33332D;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #33332d;
  }
`;


export default Container;
