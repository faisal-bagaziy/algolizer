import styled from 'styled-components';

const Container = styled.div.attrs({
  width: 120,
})`
  user-select: none;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  width: ${(props) => `${props.width}px`};
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #33332D;
  background-color: white;
  border: solid #33332d 2px;
  box-shadow: -3px 5px #33332d;  cursor: pointer;
  transition-duration: 0.3s;
  transition-property: background-color;
`;

export default Container;
