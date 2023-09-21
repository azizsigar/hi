import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // functions
  const [quotes, setQuotes] = useState(""); 
  // quotes adında bir state tanımlıyoruz. Bu state, alınan alıntıları saklamak için kullanılacak.

  // getQuotes adında bir işlev tanımlıyoruz. Bu işlev, alıntıları almak için API'ye istek yapacak.
  const getQuotes = () => {
    fetch("https://type.fit/api/quotes") // API'den alıntıları çekmek için fetch kullanılıyor.
      .then((res) => res.json()) // API yanıtını JSON formatına dönüştürüyoruz.
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length); 
        // API'den alınan alıntılar arasından rastgele bir alıntı seçiyoruz.
        setQuotes(data[randomNum]); 
        // Seçilen alıntıyı "quotes" adlı state'e ayarlıyoruz.
      });
  }

  // useEffect kullanarak, bileşen yüklendiğinde bir kere "getQuotes" işlemini çağırıyoruz.
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    // HTML içeriği
    <div className="App">
      <div>
        {quotes.text} {/* quotes state'indeki alıntı metni burada görüntülenir. */}
      </div> 
      <div>
        {quotes.author} {/* Alıntı yazarı burada görüntülenir. */}
      </div>
      <div>
        <button onClick={getQuotes}>get Quotes</button> {/* "getQuotes" işlevini çağırmak için bir düğme. */}
      </div>
    </div>
  );
}

export default App;
