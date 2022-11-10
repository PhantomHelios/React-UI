import { Button, Icon, Label } from 'semantic-ui-react'
import styled from 'styled-components';

const Styled = styled(Button)`
  width: 100%;
`;

export default function StyledButton(){
  return (
    <Button as='div' labelPosition='right'>
      <Styled color='red'>
        <Icon name='heart' />
        Like
      </Styled>
      <Label as='a' basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
  )
}