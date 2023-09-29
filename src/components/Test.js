import React, { useState, useEffect } from 'react';

export default function Test() {
  const [options, setOptions] = useState([
    { text: 'Beurs, boek', isCorrect: true },
    { text: 'Eten, drinken', isCorrect: false },
    // Diğer seçenekleri buraya ekleyebilirsiniz
  ]);

  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const synth = window.speechSynthesis;

  const handleOptionClick = (option) => {
    synth.cancel(); // Önceki seslendirmeleri iptal et
    setSelectedOption(option);
    speakText(option.text);
  };

  const handleCheckAnswer = () => {
    synth.cancel(); // Cevabı kontrol etmeden önce önceki seslendirmeleri iptal et
    if (selectedOption && selectedOption.isCorrect) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'nl-NL'; // Dil ayarını Hollandaca ("nl-NL") olarak ayarlayın
    synth.speak(speech);
  };

  // Seçilen seçeneği konuşmak için bir etkileşim eklemek isterseniz
  useEffect(() => {
    if (selectedOption) {
      speakText(selectedOption.text);
    }
  }, [selectedOption]);

  return (
    <div>
      <h3>Hangisi doğru seçenek?</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => handleOptionClick(option)}
              className={selectedOption === option ? 'selected' : ''}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckAnswer}>Cevabı Kontrol Et</button>
      {isAnswerCorrect !== null && (
        <p>
          {isAnswerCorrect ? 'Doğru!' : 'Yanlış!'} Cevap: {selectedOption.text}
        </p>
      )}
    </div>
  );
}
