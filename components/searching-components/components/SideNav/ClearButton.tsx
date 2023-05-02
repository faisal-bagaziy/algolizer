import styled from 'styled-components';


const ClearButton = styled.div`
  background-color: #33332d;
  color: white;
  height: 30px;
  width: 180px;
  font-size: 18px;
  margin: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  transition-duration: 0.3s;
  
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

export default ClearButton;
