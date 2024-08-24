import './App.css';
import Markdown1 from './components/markdown1/Markdown1';
import { useState } from 'react';
import Markdown2 from './components/markdown2/Markdown2';

function App() {
  const [mark1, setMark1] = useState(false);
  const [mark2, setMark2] = useState(false);

  const mark1Open = ()=>{
    setMark1(true)
    setMark2(false)
  }
  const mark2Open = ()=>{
    setMark2(true)
    setMark1(false)
  }

  return (
    <div className="App">
      <button onClick={() => mark1Open()}>Editor 1</button>
      <button onClick={() => mark2Open()}>Editor 2</button>
      {mark1 && <Markdown1 />}
      {mark2 && <Markdown2 />}
    </div>
  );
}

export default App;
