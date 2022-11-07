import logo from "./logo.svg";
import "./App.css";
import Button from "./components/atoms/Button/Button";
import ButtonStyled from "./components/atoms/ButtonStyled/index";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Button with styled components (JS)</p>
        <Button variant='primary' title='button primary' />
        <br></br>
        <Button variant='secondary' title='button secondary' />
        <p>Button with Cascade Style Sheet (CSS)</p>
        <ButtonStyled variant='primary' title='button primary' size='medium' />
        <br></br>
        <ButtonStyled
          variant='secondary'
          title='button secondary'
          size='medium'
        />
      </header>
    </div>
  );
}

export default App;
