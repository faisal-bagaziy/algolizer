import styled from 'styled-components';


const Container = styled.div`
  position: relative;
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
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
