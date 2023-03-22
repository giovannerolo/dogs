import React from 'react';
import URL from './URL';

const PhotoGet = () => {
  const [id, setId] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${URL}/api/photo/${id}`)
      .then((r) => {
        console.log(r);
        return r.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
