import { Logo } from './components/logo';
import './App.css';

function App() {
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => alert('Login clicked')}>Login</button>
      </div>
      <div>
        <button onClick={() => alert('Register clicked')}>Register</button>
      </div>
    </div>
  );
}

export default App;
