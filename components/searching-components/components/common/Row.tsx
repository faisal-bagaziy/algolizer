import styled from 'styled-components';

interface Props {
  justifyContent: string;
  margin?: string;
}

const Row = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  gap:15px;
  margin: ${(props) => props.margin};
  color: #E1E1E1;
`;

export default Row;
