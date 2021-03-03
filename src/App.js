import anass from './logo.svg';
import './App.css';
import { t, hello } from './Fe';

import NavBar from './components/Navbar';
import Form from './components/Form';
function App() {
  // JSX
  return (
    <div>
      <NavBar />
      <Form />
    </div>
  );
}

export default App;
