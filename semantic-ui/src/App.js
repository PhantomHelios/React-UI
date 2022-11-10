import './App.css';
import StyledButton from './StyledButton';
import StyledTable from './StyledTable';

const columns = ['ID', 'Name', 'Delete']

const data = [
  { id: 1, name: 'Isa' },
  { id: 2, name: 'Musa' },
  { id: 3, name: 'Ahmet' },
  { id: 4, name: 'Mehmet' }
]

const renderBodyRow = ({ id, name }, i) => ({
  key: name || `row-${i}`,
  cells: [
    id || i,
    name || 'No name specified',
    <StyledButton>Delete</StyledButton>
  ],
})

function App() {
  return (
    <div className="App">
      <StyledTable headers={columns} data={data} renderBodyRow={renderBodyRow}></StyledTable>
    </div>
  );
}

export default App;