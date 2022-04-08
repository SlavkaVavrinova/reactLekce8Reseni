import React, { useState } from 'react';
import './style.css';

const Registrace = () => {
  const [userName, setUserName] = useState('');
  const [country, setCountry] = useState('Česká Republika');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Registrován nový uživatel ${userName} ze země ${country}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {userName !== '' ? (
        ''
      ) : (
        <div className="form__message">Uživatelské jméno je povinný údaj</div>
      )}
      <label>
        Uživatelské jméno:
        <input
          className="form__input"
          type="text"
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
        />
      </label>

      <label>
        Země původu:
        <select
          className="form__select"
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

      <div className="form__checkboxArea">
        <label>
          <input
            className="form__checkbox"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={(event) => {
              setTermsAccepted(event.target.checked);
            }}
          />
          Souhlasím s obchodními podmínkami
        </label>
      </div>

      <button
        className="form__button"
        type="submit"
        disabled={userName === '' || !termsAccepted}
      >
        Registrovat
      </button>
    </form>
  );
};

export default Registrace;
