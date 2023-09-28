import './App.css';
import Question from './components/Question';

function App() {
  // functions

  return (
    // htmls
    <div className='App'>
            Streak:
      <Question />
      <div>
        <button>next</button>
        <div>
          <p>
            {/* Streak:{} */}
            </p>
          </div>
      </div>
    </div>
  );
}

export default App;
