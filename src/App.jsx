import favicon from './assets/profile.png';

import { Router } from './routes/Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={favicon} className="App-logo" alt="logo" />
      </header>

      <Router />
    </div>
  );
}

export default App;
