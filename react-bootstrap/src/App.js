import './App.css';
import StyledTable from './StyledTable';
import StyledButton from './StyledButton';

const columns = ['ID', 'Name', 'Delete']

const data = [
  { id: 1, name: 'Isa' },
  { id: 2, name: 'Musa' },
  { id: 3, name: 'Ahmet' },
  { id: 4, name: 'Mehmet' }
]

function App() {
  return (
    <div className="App">
      <StyledTable columns={columns} data={data}></StyledTable>
    </div>
  );
}

export default App;
