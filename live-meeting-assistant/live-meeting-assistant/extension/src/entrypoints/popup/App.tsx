import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';
import './App.css';
import ErrorBoundary from '@/components/ErrorBoundary';

// Add this small component
const FaultyPopupComponent = () => {
  throw new Error("Test WXT popup render-phase error!");
  // eslint-disable-next-line no-unreachable
  return <div>Will not render.</div>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <ErrorBoundary fallbackMessage="The extension popup encountered an error.">
      <>
        {/* <FaultyPopupComponent /> */ /* Uncomment to test */}
        <div>
          <a href="https://wxt.dev" target="_blank">
            <img src={wxtLogo} className="logo" alt="WXT logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>WXT + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the WXT and React logos to learn more
        </p>
        <button style={{ padding: '8px', margin: '10px', backgroundColor: '#ff6666', color: 'white', border: 'none', borderRadius: '4px' }} onClick={() => { throw new Error("Test WXT popup error!"); }}>Throw Popup Error</button>
      </>
    </ErrorBoundary>
  );
}

export default App;
