import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Setting from './components/setting/Setting';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <div className='appWrapperContent'>
        <Routes>
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/dialogs/*'} element={<DialogsContainer />} />
          <Route path={'/music'} element={<Music />} />
          <Route path={'/setting'} element={<Setting />} />
          <Route path={'/users'} element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
