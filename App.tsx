
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import FreeGuide from './components/FreeGuide';
import PremiumService from './components/PremiumService';
import TutorialStep from './components/TutorialStep';
import ConsentBanner from './components/ConsentBanner';
import { Course, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [fontSizeLevel, setFontSizeLevel] = useState(0); 
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (fontSizeLevel === 0) root.style.fontSize = '20px';
    if (fontSizeLevel === 1) root.style.fontSize = '24px';
    if (fontSizeLevel === 2) root.style.fontSize = '28px';
    
    if (highContrast) {
        document.body.classList.add('text-high-contrast');
    } else {
        document.body.classList.remove('text-high-contrast');
    }
  }, [fontSizeLevel, highContrast]);

  const toggleFontSize = () => {
    setFontSizeLevel((prev) => (prev + 1) % 3);
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === 'partners') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setView({ type: 'partners' });
        return;
    }

    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 0);
    } else {
      scrollToSection(targetId);
    }
  };

  const getTutorialContent = (step: number) => {
    switch (step) {
        case 1:
            return {
                question: "Vamos falar com a família?",
                visualDescription: "Esta é a tela de conversa do seu celular.",
                instruction: "Toque na barra branca lá embaixo para escrever.",
                mainLabel: "QUERO COMEÇAR",
                secLabel: "TENHO DÚVIDA"
            };
        case 2:
            return {
                question: "Quer mandar sua voz?",
                visualDescription: "O desenho mostra o botão de gravar áudio.",
                instruction: "Segure o dedo no microfone verde.",
                mainLabel: "JÁ SEI FAZER",
                secLabel: "ME ENSINA"
            };
        case 3:
            return {
                question: "Onde você está agora?",
                visualDescription: "Um mapa para mostrar sua localização.",
                instruction: "Aperte no mapa para avisar que chegou bem.",
                mainLabel: "JÁ ENVIEI",
                secLabel: "NÃO ENTENDI"
            };
        default:
            return {
                question: "Gostou da aula grátis?",
                visualDescription: "Parabéns por chegar até aqui!",
                instruction: "Escolha um curso abaixo para aprender mais coisas.",
                mainLabel: "IR PARA O INÍCIO",
                secLabel: "VER CURSOS"
            };
    }
  };

  const tutorialContent = view.type === 'tutorial' ? getTutorialContent(view.step) : null;

  return (
    <div className={`min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900 ${highContrast ? 'bg-black text-yellow-300' : 'bg-white text-slate-900'}`}>
      
      {view.type !== 'tutorial' && (
        <Navbar 
            onNavClick={handleNavClick} 
            onToggleFont={toggleFontSize}
            onToggleContrast={() => setHighContrast(!highContrast)}
            highContrast={highContrast}
            fontSizeLevel={fontSizeLevel}
        />
      )}
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero 
                onCtaClick={() => scrollToSection('courses')} 
                onSecondaryCtaClick={() => setView({ type: 'tutorial', step: 1 })}
            />
            <Features />
            <FreeGuide />
            <PremiumService />
            <ProductGrid onProductClick={(c) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'course', course: c });
            }} />
            <Journal />
          </>
        )}

        {view.type === 'course' && (
          <ProductDetail 
            course={view.course} 
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('courses'), 50);
            }}
          />
        )}

        {view.type === 'partners' && (
            <Checkout 
                onBack={() => setView({ type: 'home' })}
            />
        )}

        {view.type === 'tutorial' && tutorialContent && (
          <TutorialStep 
            currentStep={view.step}
            totalSteps={4}
            question={tutorialContent.question}
            visualDescription={tutorialContent.visualDescription}
            instruction={tutorialContent.instruction}
            mainActionLabel={tutorialContent.mainLabel}
            secondaryActionLabel={tutorialContent.secLabel}
            onMainAction={() => {
                if (view.step === 4) setView({ type: 'home' });
                else setView({ type: 'tutorial', step: view.step + 1 });
            }}
            onSecondaryAction={() => {
                if (view.step === 4) {
                    setView({ type: 'home' });
                    setTimeout(() => scrollToSection('courses'), 100);
                } else {
                    setView({ type: 'tutorial', step: view.step + 1 });
                }
            }}
            onHelp={() => alert('Um de nossos professores humanos entrará em contato em breve.')}
            onRepeat={() => {}}
            onBack={() => {
              if (view.step === 1) setView({ type: 'home' });
              else setView({ type: 'tutorial', step: view.step - 1 });
            }}
            highContrast={highContrast}
          />
        )}
      </main>

      {view.type !== 'tutorial' && (
        <>
          <Footer onLinkClick={handleNavClick} />
          <Assistant />
          <ConsentBanner />
        </>
      )}
      
    </div>
  );
}

export default App;
