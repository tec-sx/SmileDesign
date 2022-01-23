import logo from './logo.svg';
import './app.css';

import useNavigation from "./hooks/useNavigation";
import navigationData from "./data/navigation";

import Navbar from "./components/navbar/navbar";
import { Outlet } from 'react-router';

const App = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();
  return (
    <div className="App">
      <Navbar navigationData={navigationData} currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
      <Outlet />
    </div>
  );
}

export default App;
