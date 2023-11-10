import { useEffect } from 'react';
import { useState } from 'react';
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

function App() {
  const [fact, setFact] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        setUrl(fact.split(' ', 3).join(' '));
      });
  }, []);

  return (
    <>
      <main>
        <h1>Prueba Tecnica</h1>
        {fact && <p>{fact}</p>}
        {url && <img src={`https://cataas.com/cat/says/${url}`} />}
      </main>
    </>
  );
}

export default App;
