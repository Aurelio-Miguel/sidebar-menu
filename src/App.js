import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content title="Hello World!" />
    </div>
  );
}

export default App;
