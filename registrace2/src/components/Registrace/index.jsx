import React, { useState } from 'react';

const Registrace = () => {
  const [userName, setUserName] = useState('');
  const [country, setCountry] = useState('Česká Republika');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Registrován nový uživatel ${userName} ze země ${country}`);
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {userName !== '' ? '' : <div>Uživatelské jméno je povinný údaj</div>}
      <label>
        Uživatelské jméno:
        <input type="text" onChange={handleChange} value={userName} />
      </label>
      <label>
        Země původu:
        <select
          onChange={(event) => {
            setCountry(event.target.value);
          }}
          value={country}
        >
          <option value="Česká republika">Česká republika</option>
          <option value="Chorvatsko">Chorvatsko</option>
          <option value="Polsko">Polsko</option>
          <option value="Slovenská republika">Slovenská republika</option>
        </select>
      </label>
      <button type="submit" disabled={userName === ''}>
        Registrovat
      </button>
    </form>
  );
};

export default Registrace;
