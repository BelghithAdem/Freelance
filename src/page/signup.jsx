import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import Navbar from '../component/navbar.jsx';
import EyeIcon from '../page/eye.svg';

function Signup({ onSubmit }) {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [cpassword, setCpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [cpasswordValid, setCpasswordValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/user/signup', {
        name,
        userName,
        email,
        password,
        cpassword
      });
      alert("L'utilisateur a été créé");
      console.log(response.data);

      setName('');
      setUsername('');
      setEmail('');
      setPassword('');
      setCpassword('');
      if (onSubmit) onSubmit();
    } catch (error) {
      alert('Les mots de passe ne correspondent pas');
    } finally {
      setLoading(false);
    }
  };

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleShowPassword1 = (e) => {
    e.preventDefault();
    setShowPassword1(!showPassword1);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(validatePassword(newPassword));
  };

  const handleCPasswordChange = (e) => {
    const newCPassword = e.target.value;
    setCpassword(newCPassword);
    setCpasswordValid(validateCPassword(newCPassword));
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateCPassword = (cpassword) => {
    return cpassword === password;
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="row justify-content-center mt-5">
            <div className="col-md-5">
              <div className="bs">
                <h1>Inscription</h1>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength={4}
                  maxLength={15}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nom d'utilisateur"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  minLength={4}
                  maxLength={15}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="password-input">
                  <input
                    type={showPassword1 ? 'text' : 'password'}
                    className={`form-control ${showPassword1 ? 'show-password' : ''}`}
                    placeholder="Mot de passe"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <button type="button" className="password-toggle" onClick={toggleShowPassword1}>
                    <img src={EyeIcon} alt="Toggle visibility" className={`eye-icon ${showPassword1 ? 'show' : ''}`} />
                  </button>
                </div>

                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={`form-control ${showPassword ? 'show-password' : ''}`}
                    placeholder="Confirmez le mot de passe"
                    value={cpassword}
                    onChange={handleCPasswordChange}
                    required
                  />
                  <button type="button" className="password-toggle" onClick={toggleShowPassword}>
                    <img src={EyeIcon} alt="Toggle visibility" className={`eye-icon ${showPassword ? 'show' : ''}`} />
                  </button>
                </div>

                <button
                  className="btn btn-primary mt-3"
                  type="submit"
                  disabled={  !cpasswordValid || loading}
                >
                  {loading ? 'Chargement...' : 'Inscription'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
