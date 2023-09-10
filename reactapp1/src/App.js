
// import './App.css';

 import Navbar from "./components/Navbar";
import TextF from "./components/TextF";
// import TextForm from './components/Navbar';

function App() {
  return (
    <div >

        <Navbar/>
        {/* <TextForm/>     */}
        <TextF  heading="Enter the text" />
    </div>
  );
}

export default App;
