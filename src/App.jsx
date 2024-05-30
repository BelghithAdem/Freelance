import { RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './page/Accueil.jsx';
import Contact from './page/contact.jsx';
import Connexion from './page/connexion.jsx';
import Poster from './page/poster.jsx';
import Home from './page/home.jsx';
import apropos from './page/apropos.jsx';
import signup from './page/signup.jsx';
import Notifications from './page/notifications.jsx';
import SpacesForOwner from './page/SpaceForOwner.jsx';
import 'devextreme/dist/css/dx.light.css';

import "./App.css"

import router from 'routes';
import ThemeCustomization from 'themes';


export default function App() {
  return (
    <ThemeCustomization>
   <RouterProvider router={router} /> 
     
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/accueil" Component={Accueil} />
          <Route path="/connexion" Component={Connexion} />
          <Route path="/inscription" Component={signup} />
          <Route path="/contact" Component={Contact} />
          <Route path="/apropos" Component={apropos} />
          <Route path="/notifications" Component={Notifications} />
          <Route path="/spaces-for-owner" Component={SpacesForOwner} />
          <Route path="/poster" element={<Poster />} />
        </Routes>
      </Router>
    </ThemeCustomization>
  );
}
