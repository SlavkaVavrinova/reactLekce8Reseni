import React, { useState } from 'react';

const Registrace = () => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName);
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

      <button type="submit" disabled={userName === ''}>
        Registrovat
      </button>
    </form>
  );
};

export default Registrace;
