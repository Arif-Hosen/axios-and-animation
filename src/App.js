import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false);
  return (
    <div className="App">
      <animated.div style={useSpring({
        to: { opacity: 1 },
        reset: true,
        reverse: flip,
        delay: 200,
        from: { opacity: 0 },
        onRest: () => set(!flip)
      })}>I am animated.</animated.div>
    </div>
  );
}

export default App;
