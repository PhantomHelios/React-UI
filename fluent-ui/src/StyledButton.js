import { Button } from '@fluentui/react-components';
import styled from 'styled-components';


const Styled = styled(Button)`
    color: palevioletred;
    font-weight: normal;
    :focus {
    color: palevioletred;
    border-color: palevioletred;
    }
    :hover {
    color: palevioletred;
    border-color: palevioletred;
    }
`;

const StyledButton = (props) => {
    return (
        <Styled {...props}></Styled>
    );
}

export default StyledButton;