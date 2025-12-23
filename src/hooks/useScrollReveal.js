/**
 * useScrollReveal Hook
 * 
 * Hook customizado para adicionar animações de scroll usando ScrollReveal
 * Carrega a biblioteca do CDN
 */

import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Carrega a biblioteca ScrollReveal do CDN
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/scrollreveal';
    script.async = true;
    
    script.onload = () => {
      // ScrollReveal está agora disponível
      const ScrollReveal = window.ScrollReveal;
      
      if (ScrollReveal) {
        const sr = ScrollReveal({
          distance: '50px',
          duration: 1500,
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
          reset: false
        });

        // Animações para diferentes elementos
        sr.reveal('.home-text', { origin: 'left' });
        sr.reveal('.home-image', { origin: 'right', delay: 200 });
        
        sr.reveal('section h2', { origin: 'top', delay: 100 });
        
        sr.reveal('.project-card', { interval: 100, origin: 'bottom' });
        sr.reveal('.skill-box', { interval: 100, origin: 'bottom' });
        sr.reveal('.certificate-card', { interval: 100, origin: 'bottom' });
        
        sr.reveal('.about-text', { origin: 'left' });
        sr.reveal('.about-image', { origin: 'right', delay: 200 });
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      // Limpeza do script se necessário
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
};

export default useScrollReveal;
