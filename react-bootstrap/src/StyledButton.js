import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styled = styled(Button)`
  width: 20px;
  height: 20px;
`;

export default function StyledButton() {
  return (
    <Styled variant="outline-primary" />
  );
}