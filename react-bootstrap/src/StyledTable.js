import { Table } from 'react-bootstrap';
import styled from 'styled-components';

const Styled = styled(Table)`
  width: 600px;
  background-color: cyan;
`;

export default function StyledTable({ data, columns }) {
  return (
    <Styled>
      <thead>
        <tr>
          {
            columns.map(
              column => <th>{column}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map(
            row => <tr>
              {
                Object.values(row).map(
                  c => <td>{c}</td>
                )
              }
            </tr>
          )
        }
      </tbody>
    </Styled>
  )
}