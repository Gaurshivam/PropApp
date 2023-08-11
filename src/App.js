import './App.css';
import Prop from './Components/Prop';

function App() {
  return (
    <div className="App" 
    style={{display:"grid",
    gridTemplateColumns:"200px 200px 200px 200px 200px",
    gridGap:"90px",marginLeft:"50px"}}>
      <Prop color="blue" heading="#001100" title="BlueColor" />
      <Prop color="red"  heading="#001100" title="RedColor" />
      <Prop color="pink" heading="#001100" title="PinkColor" />
      <Prop color="yellow" heading="#001100" title="YellowColor" />
      <Prop color="green" heading="#001100" title="GreenColor" />
      <Prop color="darkgray" heading="#001100" title="DarkGrayColor" />
      <Prop color="skyblue" heading="#001100" title="SkyBlueColor" />
      <Prop color="orange" heading="#001100" title="OrangeColor" />
      <Prop color="purple" heading="#001100" title="PurpleColor" />
      <Prop color="brown" heading="#001100" title="Color" />
    </div>
  );
}

export default App;
