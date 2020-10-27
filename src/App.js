import logo from './logo.svg';
import './App.css';
import VideoChatContainer from './Components/VideoChatContainer';

function App() {
  return (
    <div className="App">
      <h1>React Video Chat App</h1>
      <h2>WebRTC + Firebase</h2>
      <VideoChatContainer />
    </div>
  );
}

export default App;
