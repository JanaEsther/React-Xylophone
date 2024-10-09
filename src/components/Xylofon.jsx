import { zahraj } from '../zahraj';
import { useState } from 'react';
import './Xylofon.css';

// 1. Nahraď jednotlivé tlačítka/kameny za výpis pole pomocí `.map`. Použij následující pole `kameny`.

// 2. Přichystej si stavovou proměnnou `nadpis`, ve které jako výchozí hodnotu nastav „Xylofon“ a proměnnou vypiš uvnitř tagu `<h1>`.
// 3. Po kliknutí na jakýkoliv kámen změň hodnotu nadpisu na text „Cink!“. Zkontroluj, že se nadpis opravdu změní.
// 4. Místo „Cink!“ změň nadpis na název tónu. Nápověda: Název najdeš v `event.target.textContent`.
// 5. Zahraj příslušný tón zavoláním funkce `zahraj('C')` a `'C'` nahraď názvem odpovídajícího tónu. Import přehrávací funkce už máš předchystaný výše.
// 6. Zapni si v počítači zvuk a xylofon otestuj.

const Xylofon = () => {
  const kameny = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  const [nadpis, setNadpis] = useState('Xylofon');

  const handleClick = (ton) => {
    setNadpis(ton);
    zahraj(ton);
  };

  return (
    <>
      <h1>{nadpis}</h1>
      <div className="xylofon">
        {kameny.map((kamen) => (
          <button
            className="kamen"
            key={kamen}
            onClick={() => handleClick(kamen)}
          >
            {kamen}
          </button>
        ))}
      </div>
    </>
  );
};

export default Xylofon;
