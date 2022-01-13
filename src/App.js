import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Setting from './components/setting/Setting';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Navbar />
        <div className='appWrapperContent'>
          <Routes>
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/dialogs/*'} element={<DialogsContainer />} />
            <Route path={'/music'} element={<Music />} />
            <Route path={'/setting'} element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
