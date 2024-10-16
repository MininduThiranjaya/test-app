import logo from './logo.svg';
import './App.css';
import WebAuthnDemo from './component/FingerprintSupportChecker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>Login</h1>
        </center>
        <WebAuthnDemo/>
      </header>
    </div>
  );
}

export default App;
