import styled from 'styled-components';

const Content = styled.div`
  min-width: 300px;
  min-height: 200px;
  background-color: #e1e1e1;
  border: solid #33332d 2px;
  box-shadow: -3px 5px #33332d;
  display: flex;
  align-items: center;
  z-index: 9999;
  color: ${(props) => props.theme.sidebar.foreground};
  padding: 20px;
`;

export default Content;
