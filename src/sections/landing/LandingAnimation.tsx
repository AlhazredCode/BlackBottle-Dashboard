import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material';
const LandingAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCount = 148;
  const [paddingTop, setPaddingTop] = useState(0);
  const maxPadding = 770; // Altura del canvas - puedes ajustarlo

  const currentFrame = (index: number) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
      .toString()
      .padStart(4, '0')}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas!.width = 1158;
    canvas!.height = 770;

    img.onload = () => {
      context?.drawImage(img, 0, 0);
    };

    const updateImage = (index: number) => {
      img.src = currentFrame(index);
      context?.drawImage(img, 0, 0);
    };

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      // Calculate paddingTop based on scroll and stop at maxPadding
      const calculatedPadding = Math.min(maxPadding, scrollTop);
      setPaddingTop(calculatedPadding);

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    };

    window.addEventListener('scroll', handleScroll);

    preloadImages();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div style={{ height: paddingTop * 0.7, width: '100%' }}></div>
     <Box sx={{ 
 
  mt: 20, 
  pb: 20,
  position: 'relative', 
  top: paddingTop * 0.2,
  display: 'flex', // Activa Flexbox
  justifyContent: 'center', // Centra horizontalmente
}}>


  <canvas 
    ref={canvasRef} 
    id="hero-lightpass" 

  />
</Box>
    </>
  );
};

export default LandingAnimation;