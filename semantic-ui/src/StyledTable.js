import { Table } from 'semantic-ui-react';
import styled from 'styled-components';

const Styled = styled(Table)`
  && {
    width: 600px;
  }
`;

export default function StyledTable({ headers, data, renderBodyRow }) {
  return (
    <Styled headerRow={headers} tableData={data} renderBodyRow={renderBodyRow} fixed color='green'></Styled>
  )
}