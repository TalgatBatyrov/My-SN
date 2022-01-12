import './App.css';

function App() {
  return (
    <div>
      <Hello name={'Talgat'} />
      <Hello name={'Jarkyn'} />
      <Hello name={'Ayzada'} />
    </div>
  );
}

export default App;


const Hello = ({ name }) => {
  return (
    <div>
      Hello {name}
    </div>
  )
}
