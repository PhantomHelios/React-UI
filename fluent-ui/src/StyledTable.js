// !!!!!!!!!!!!!!! TABLE IS UNSTABLE
// Icons needs react version below 18

import styled from 'styled-components';

import { Avatar} from "@fluentui/react-components";
import StyledButton from './StyledButton';
import * as React from 'react';
import { TableBody, TableCell, TableRow, Table, TableHeader, TableHeaderCell, TableCellActions, TableCellLayout } from '@fluentui/react-components/unstable';

// const Styled = styled(Table)`
//   width: 800px;
// `;

const items = [{
  file: {
    label: 'Meeting notes',
  },
  author: {
    label: 'Max Mustermann',
    status: 'available'
  },
  lastUpdated: {
    label: '7h ago',
    timestamp: 1
  },
  lastUpdate: {
    label: 'You edited this',
  }
}, {
  file: {
    label: 'Thursday presentation',
  },
  author: {
    label: 'Erika Mustermann',
    status: 'busy'
  },
  lastUpdated: {
    label: 'Yesterday at 1:45 PM',
    timestamp: 2
  },
  lastUpdate: {
    label: 'You recently opened this',
  }
}, {
  file: {
    label: 'Training recording',
  },
  author: {
    label: 'John Doe',
    status: 'away'
  },
  lastUpdated: {
    label: 'Yesterday at 1:45 PM',
    timestamp: 2
  },
  lastUpdate: {
    label: 'You recently opened this',
  }
}, {
  file: {
    label: 'Purchase order',
  },
  author: {
    label: 'Jane Doe',
    status: 'offline'
  },
  lastUpdated: {
    label: 'Tue at 9:30 AM',
    timestamp: 3
  },
  lastUpdate: {
    label: 'You shared this in a Teams chat',
  }
}];
const columns = [{
  columnKey: 'file',
  label: 'File'
}, {
  columnKey: 'author',
  label: 'Author'
}, {
  columnKey: 'lastUpdated',
  label: 'Last updated'
}, {
  columnKey: 'lastUpdate',
  label: 'Last update'
},
{
  columnKey: 'Delete',
  label: 'delete'
}];


export const StyledTable = () => {
  return <Table>
    <TableHeader>
      <TableRow>
        {columns.map(column => <TableHeaderCell key={column.columnKey}>{column.label}</TableHeaderCell>)}
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map(item => <TableRow key={item.file.label}>
        <TableCell>
          <TableCellLayout media={item.file.icon}>{item.file.label}</TableCellLayout>
          <TableCellActions>
          </TableCellActions>
        </TableCell>
        <TableCell>
          <TableCellLayout media={<Avatar name={item.author.label} badge={{
            status: (item.author.status)
          }} />}>
            {item.author.label}
          </TableCellLayout>
        </TableCell>
        <TableCell>{item.lastUpdated.label}</TableCell>
        <TableCell>
          <TableCellLayout media={item.lastUpdate.icon}>{item.lastUpdate.label}</TableCellLayout>
        </TableCell>
        <TableCell>
          <TableCellLayout ><StyledButton>Delete me</StyledButton></TableCellLayout>
        </TableCell>
      </TableRow>)}
    </TableBody>
  </Table>;
};