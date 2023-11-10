import { useEffect } from 'react';
import { useState } from 'react';
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

function App() {
  const [fact, setFact] = useState();
  const [threeFristWords, setThreeFristWords] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        setThreeFristWords(fact.split(' ', 3).join(' '));
      });
  }, []);

  return (
    <>
      <main>
        <h1>Prueba Tecnica</h1>
        {fact && <p>{fact}</p>}
        {threeFristWords && (
          <img src={`https://cataas.com/cat/says/${threeFristWords}`} />
        )}
      </main>
    </>
  );
}

export default App;
