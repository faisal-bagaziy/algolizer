import styled from 'styled-components';
import themes from '../../themes';

const StyledButton = styled.div`
  background-color: white;
  color: #33332D;
  height: 30px;
  width: 100px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: solid #33332d 2px;
  box-shadow: -3px 5px #33332d;

  user-select: none;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    background-color: #33332D;
    color: white;

  }
`;

export default StyledButton;
