import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Space from '../component/Space';
import Navbar from '../component/navbar.jsx';

export const Accueil = ({ space }) => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    getSpaces();
  }, []);

  async function getSpaces() {
    try {
      setLoading(true);
      const data = (await axios.get('http://localhost:5000/spaces')).data;
      console.log(data.spaces)
      setSpaces(data.spaces);
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
            <input type="text" className='form-control' placeholder='Recherche' 
            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className='col-md-4'>
            <select className='form-control' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="">Trier par</option>
              <option value="prixCroissant">Prix croissant</option>
              <option value="prixDécroissant">Prix décroissant</option>
              <option value="dimensionCroissante">Dimension croissante</option>
              <option value="dimensionDécroissante">Dimension Décroissante</option>
              <option value="placesCroissantes">Places croissantes</option>
              <option value="placesDécroissantes">Places décroissantes</option>
            </select>
          </div>
          <div className='col-md-4'>
          <select className='form-control' value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
              <option value="">Filtrer par</option>
              <option value="jardin">Jardin</option>
              <option value="Terrasse">Terrasse</option>
              <option value="Piscine">Piscine</option>
              <option value="Salle de réunion">Salle de réunion</option>
              <option value="Salle de fête">Salle de fête</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
        {loading ? (
            <h1>Loading ....</h1>
          ) : error ? (
            <h1>Error</h1>
          ) : (
            spaces
              .filter(space => space.titre.toLowerCase().includes(searchTerm.toLowerCase()) || space.description.toLowerCase().includes(searchTerm.toLowerCase()))
              .filter(space => filterBy ? space.categorie && space.categorie.toLowerCase() === filterBy.toLowerCase()
              : true)
              .sort((a, b) => {
                switch (sortBy) {
                  case 'prixCroissant':
                    return a.prix - b.prix;
                  case 'prixDécroissant':
                    return b.prix - a.prix;
                  case 'dimensionCroissante':
                    return a.dimension - b.dimension;
                  case 'dimensionDécroissante':
                    return b.dimension - a.dimension;
                  case 'placesCroissantes':
                    return a.places - b.places;
                  case 'placesDécroissantes':
                    return b.places - a.places;
                  default:
                    return 0;
                }
              })
              .map((space, index) => (
                <div key={index} className='col-md-9 mt-2'>
                  <Space space={space} />
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
};

export default Accueil;