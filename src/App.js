import { CookiesProvider } from "react-cookie";
import './App.css';
import Schedular from "./components/Scheduler";


export default function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <h1>Manual Scheduler</h1>
        <Schedular />
    
      </div>
    </CookiesProvider>
  );
}

