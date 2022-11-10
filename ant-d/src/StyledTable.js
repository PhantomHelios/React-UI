import styled from 'styled-components';
import { Table } from 'antd';

const Styled = styled(Table)`
    width: 800px;
    button{
        height:60px;
        color: green;
    }
`;

const StyledTable = (props) => {
    return <Styled {...props} bordered tableLayout='auto'></Styled>
}

export default StyledTable;