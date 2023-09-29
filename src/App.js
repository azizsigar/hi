import './App.css';
import Test from './components/Test';
// import Question from './components/Question';

function App() {
  // functions

  return (
    // htmls
    <div className='App'>
      <Test/>
            Streak:
      {/* <Question /> */}
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
