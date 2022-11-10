import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

const Styled = styled(DataGrid)`
  
`;

export default function StyledTable({ rows, columns }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Styled
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
} 