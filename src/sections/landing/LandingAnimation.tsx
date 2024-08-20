import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const LandingAnimation = () => {
  const frameCount = 301;
  const [paddingTop, setPaddingTop] = useState(0);
  const maxPadding = 770;
  const startFrame = 70;
  const frameStep = 2;
  const [currentImageSrc, setCurrentImageSrc] = useState(`/assets/images/animation/${startFrame}.png`);
  const [opacity, setOpacity] = useState(0); // Estado para la opacidad

  const currentFrame = (index: number) => `/assets/images/animation/${index}.png`;

  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        new Image().src = currentFrame(i);
      }
    };

    const updateImage = (index: number) => {
      const frameIndex = index * frameStep + startFrame - 1;
      setCurrentImageSrc(currentFrame(frameIndex));

      // Calcula la opacidad gradualmente
      let newOpacity = index / 2;
      if (newOpacity > 1) {
        newOpacity = 1;
      }
      setOpacity(newOpacity);
    };

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        Math.floor((frameCount - startFrame) / frameStep),
        Math.ceil(scrollFraction * ((frameCount - startFrame) / frameStep + 1))
      );

      const calculatedPadding = Math.min(maxPadding, scrollTop);
      setPaddingTop(calculatedPadding);

      requestAnimationFrame(() => updateImage(frameIndex));
    };

    window.addEventListener('scroll', handleScroll);
    preloadImages();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    
      <Box
        sx={{
          mt: 20,
          pb: 20,
          position: 'relative',
          top: paddingTop ,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ 
          position: 'relative', 
          width: '1158px', // Ajusta el ancho si es necesario
          height: '770px', // Ajusta la altura si es necesario
          overflow: 'hidden'
        }}>
          <img
            src={currentImageSrc}
            alt="Animation"
            style={{ 
              width: '100%', 
              height: 'auto', // Ajusta la altura a 'auto' para evitar la deformación
              opacity: opacity
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '30%',
            background: 'linear-gradient(to top, black, transparent)'
          }} />
        </div>
        

      </Box>
      <div style={{ height: paddingTop , width: '100%' }}></div>
    </>
  );
};

export default LandingAnimation;