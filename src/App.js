import './App.scss';
import Navbar from './components/navbar/navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Films from './components/films/films';
import ProfileFilms from './components/profileFilms/profileFilms';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WindowStar from './components/WindowStar/WindowStar';
import { setFilms, setWindowTrailer } from './redux/reducers/filmsReducer';
import Search from './components/search/search';
import Profile from './components/profile/profile';
import Login from './components/login/Login';
import { setProfileFetch, setProfilesFetch } from './redux/reducers/UserReducer';
import { UserApi } from './Api/userApi';
import Regist from './components/regist/regist';
import { FilmsApi } from './Api/filmsApi';
import { useQuery } from 'react-query'
import SettingProfile from './components/settingProfile/settingProfile';
import { setError } from './redux/reducers/pageReducer';
import Alert from './components/errorAlert/Alert';
import VideoComponent from './components/video/video';
import TrailerPlayer from './components/trailerPlayer/trailerPlayer';

function App() {
  let dispath = useDispatch()
  let isStarWindow = useSelector(state => state.filmsPage.isStarWindow)
  const isTrailerWindow = useSelector(state => state.filmsPage.isTrailerWindow)
  const profiles = useSelector(state => state.UserPage.profiles)
  const profile = useSelector(state => state.UserPage.profile)
  const films = useSelector(state => state.filmsPage.films)
  const errorPage = useSelector(state => state.Page.AlertPage)
  const data = useQuery('films', FilmsApi.getFilms)

  useEffect(() => {
    if (JSON.stringify(profiles) == '[]') {
      dispath(setProfilesFetch())
    }
    if (JSON.stringify(profile) == '{}' && UserApi.getKeyUserId()) {
      dispath(setProfileFetch())
    }
    if (JSON.stringify(films) == '[]' && data.data) {
      dispath(setFilms(data.data))
    }
  })
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Films />} />
          <Route path='/film/:id' element={<ProfileFilms />} />
          <Route path='/search' element={<Search />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/regist' element={<Regist />} />
          <Route path='/settingprofile' element={<SettingProfile />} />
          <Route path='/video/:id' element={<VideoComponent />} />
        </Route>
      </Routes>
      {isTrailerWindow ? <TrailerPlayer setWindowTrailer={() => { dispath(setWindowTrailer()) }} /> : undefined}
      {errorPage.isView ? <Alert setError={() => { dispath(setError()) }} type={errorPage.type} content={errorPage.content} /> : undefined}
      {isStarWindow ? <WindowStar /> : undefined}
    </div>
  );
}

export default App;
