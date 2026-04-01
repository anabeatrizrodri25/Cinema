import { useState } from 'react';
import '@/App.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [btnNoPosition1, setBtnNoPosition1] = useState({ left: 'auto', top: 'auto' });
  const [btnNoPosition2, setBtnNoPosition2] = useState({ left: 'auto', top: 'auto' });
  const [showSuccess, setShowSuccess] = useState(false);

  const goToScreen = (screenNumber) => {
    setCurrentScreen(screenNumber);
  };

  const moveButton = (buttonId) => {
    const randomX = Math.random() * 200;
    const randomY = Math.random() * 200;
    
    if (buttonId === 1) {
      setBtnNoPosition1({ left: `${randomX}px`, top: `${randomY}px` });
    } else {
      setBtnNoPosition2({ left: `${randomX}px`, top: `${randomY}px` });
    }
  };

  const celebrate = () => {
    setShowSuccess(true);
    
    // Create confetti
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        createConfetti();
      }, i * 30);
    }
    
    // Create hearts
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createHeart();
      }, i * 200);
    }
  };

  const createConfetti = () => {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    const colors = ['#ffb6c1', '#ffd700', '#ff69b4', '#ffa07a', '#98fb98'];
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  };

  const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = (Math.random() * (window.innerWidth - 50)) + 'px';
    heart.style.bottom = '0px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 4000);
  };

  return (
    <div className="cinema-app">
      <div className="container">
        {/* Screen 1 */}
        <div className={`screen ${currentScreen === 1 ? 'active' : ''}`} id="screen1">
          <div className="screen-content">
            <div className="image-container">
              <img 
                src="https://customer-assets.emergentagent.com/job_efd1aa61-243b-4311-99b2-5c971d65bdc2/artifacts/mk8tixig_cineflix.webp" 
                alt="Cinema" 
                data-testid="cinema-image"
              />
            </div>
            <h1 data-testid="screen1-title">Byanca Eduarda...</h1>
            <p className="text-content" data-testid="screen1-text">Vamos cineminha comigo?</p>
            <div className="button-container">
              <button className="btn btn-yes" onClick={() => goToScreen(2)} data-testid="btn-yes-screen1">Sim</button>
              <button 
                className="btn btn-no" 
                style={{ position: btnNoPosition1.left !== 'auto' ? 'absolute' : 'relative', ...btnNoPosition1 }}
                onMouseEnter={() => moveButton(1)}
                onTouchStart={() => moveButton(1)}
                onClick={() => goToScreen(2)} 
                data-testid="btn-no-screen1"
              >
                Não
              </button>
            </div>
          </div>
        </div>

        {/* Screen 2 */}
        <div className={`screen ${currentScreen === 2 ? 'active' : ''}`} id="screen2">
          <div className="screen-content">
            <div className="image-container">
              <img 
                src="https://customer-assets.emergentagent.com/job_efd1aa61-243b-4311-99b2-5c971d65bdc2/artifacts/a3qgixqg_jogos%20vorazes11.jpg" 
                alt="Jogos Vorazes" 
                data-testid="hunger-games-image"
              />
            </div>
            <p className="text-content" data-testid="screen2-text">
              Não é jogos vorazes, mas eu prometo que vai ser um bom filme...
            </p>
            <div className="button-container">
              <button className="btn btn-next" onClick={() => goToScreen(3)} data-testid="btn-next-screen2">Avançar →</button>
            </div>
          </div>
        </div>

        {/* Screen 3 */}
        <div className={`screen ${currentScreen === 3 ? 'active' : ''}`} id="screen3">
          <div className="screen-content">
            <div className="image-container">
              <img 
                src="https://customer-assets.emergentagent.com/job_efd1aa61-243b-4311-99b2-5c971d65bdc2/artifacts/kknkqvxp_devorador.jpg" 
                alt="Devorador de Estrelas" 
                data-testid="stareater-image"
              />
            </div>
            <p className="text-content" data-testid="screen3-text">
              Mas eu prometo que vai ser um bom filme, e se for ruim a gente fica conversando o filme todo, e eu ainda deixo você tirar uma soneca durante o filme
            </p>
            <div className="button-container">
              <button className="btn btn-next" onClick={() => goToScreen(4)} data-testid="btn-next-screen3">Avançar →</button>
            </div>
          </div>
        </div>

        {/* Screen 4 (Final) */}
        <div className={`screen ${currentScreen === 4 ? 'active' : ''}`} id="screen4">
          <div className="screen-content">
            <h1 data-testid="screen4-title">Só eu tenho saudadessss</h1>
            <div className="image-container">
              <img 
                src="https://customer-assets.emergentagent.com/job_efd1aa61-243b-4311-99b2-5c971d65bdc2/artifacts/atnk90g6_Captura%20de%20tela%202026-03-31%20221732.png" 
                alt="Flork" 
                data-testid="flork-image"
              />
            </div>
            <div className="button-container">
              <button className="btn btn-yes" onClick={celebrate} data-testid="btn-yes-final">Eu também tenho!</button>
              <button 
                className="btn btn-no" 
                style={{ position: btnNoPosition2.left !== 'auto' ? 'absolute' : 'relative', ...btnNoPosition2 }}
                onMouseEnter={() => moveButton(2)}
                onTouchStart={() => moveButton(2)}
                data-testid="btn-no-final"
              >
                Não tenho
              </button>
            </div>
            <div className={`success-message ${showSuccess ? 'show' : ''}`} data-testid="success-message">
              ❤️
            </div>
            <div className="post-it" data-testid="post-it-note">
              Eu sei que a sua rotina é corrida, mas o convite está feito, vou deixar você me avisar o dia... Mas só se quiser ir, prometo que não vou ficar magoado
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;