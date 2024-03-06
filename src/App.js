import './App.css';
import Header from './header';

function App() {
  const handleNameChange = () => {
    const names = ['Taylin', 'Sox', 'Jacob'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
