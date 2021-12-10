
import './App.css';
import Header from './components/Header/Header';
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from './components/Feed/Feed';
import Widget  from './components/Widgets/Widget';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_body">
        <Sidebar />
        <Feed/>
        <Widget/>
      </div>
    </div>
  );
}

export default App;
