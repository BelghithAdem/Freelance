import React, { useState, useEffect } from 'react';

import './Accueil.css';
import axios from 'axios';
import Space from '../component/Space'
import Navbar from '../component/navbar.jsx';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const Accueil = ({ space }) => {

  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();


  useEffect(() => {
    getSpaces();
  }, []);

  async function getSpaces() {
    const token = localStorage.getItem('token'); // Récupérer le token depuis le localStorage
    const cleanToken = token.replace('JWT ', ''); // Retirer le préfixe "JWT "
    var dataArray;

    try {
      setLoading(true);

      // Ajouter le token nettoyé aux en-têtes de la requête
      const response = await axios.get('http://localhost:5000/spaces/getSpacesForUseConnected', {
        headers: {
          'x-auth-token': cleanToken
        }
      });

      const data = response.data;
      console.log(data);
      dataArray = data.spaces;

      setSpaces(dataArray);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }
  return (
    <>
     <Navbar />
    <div className='container'>
      <div className='row mt-5 bs'>
        <div className='col-md-4'>
          <input type="text" className='form-control' placeholder='Recherche' />
        </div>
        <div className='col-md-4'>
          <select className='form-control'>
            <option value="Prix croissant">Prix croissant</option>
            <option value="Prix décroissant">Prix décroissant</option>
            <option value="Dimension croissante">Dimension croissante</option>
            <option value="Dimension Décroissante">Dimension Décroissante</option>
            <option value="Places croissantes">Places croissantes</option>
            <option value="Places décroissantes">Places décroissantes</option>

          </select>
        </div>
        <div className='col-md-4'>
          <select className='form-control' >
          <option value="jardin">Jardin</option>
          <option value="terrasse">Terrasse</option>
          <option value="piscine">Piscine</option>
          <option value="salle de reunion">Salle de réunion</option>
          <option value="salle de fete"> Salle de fête</option>
        </select></div>
      </div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>Loading ....</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          spaces.map((space) => {
            return <div className='col-md-9 mt-2'>
              <Space space={space} />
            </div>
          }))}
      </div>
    </div>
    </>
   

  )
}

export default Accueil;
