import React, { useEffect, useState, useRef } from 'react';
import { Box } from '@mui/material';

const LandingAnimation = () => {
  const frameCount = 301;
  const startFrame = 70;
  const frameStep = 1;
  const [currentImageSrc, setCurrentImageSrc] = useState(`/assets/images/animation/${startFrame}.png`);
  const [opacity, setOpacity] = useState(0);
  const animationRef = useRef<HTMLDivElement>(null);
  const [showPreloader, setShowPreloader] = useState(true);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  // Estimated height based on animation frames and scroll sensitivity (adjust as needed)
  const estimatedAnimationScrollHeight = 2000;

  const currentFrame = (index: number) => `/assets/images/animation/${index}.png`;

  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        new Image().src = currentFrame(i);
      }
    };

    const startAnimation = () => {
      setShowPreloader(false);
      setTimeout(() => {
        playInitialAnimation();
      }, 500);
    };

    const updateImage = (index: number) => {
      const frameIndex = index * frameStep + startFrame - 1;
      setCurrentImageSrc(currentFrame(frameIndex));

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
        Math.ceil(scrollFraction * ((frameCount - startFrame) / frameStep + 1)) * 4
      );

      // Check if animation container has scrolled past the bottom of the background div
      if (animationRef.current) {
        const animationBottom = animationRef.current.getBoundingClientRect().bottom;
        if (animationBottom < 0) { // Animation container is below the viewport
          setIsAnimationFinished(true);
        } else if (window.scrollY === 0) { // Reset at the top
          setIsAnimationFinished(false);
        }
      }

      requestAnimationFrame(() => updateImage(frameIndex));
    };

    const playInitialAnimation = () => {
      let frameIndex = startFrame;
      let currentFrameOpacity = 0;

      const animate = () => {
        if (frameIndex < startFrame + 100) {
          setCurrentImageSrc(currentFrame(frameIndex));
          currentFrameOpacity += 0.1;
          setOpacity(Math.min(currentFrameOpacity, 1));
          frameIndex++;
          requestAnimationFrame(animate);
        } else {
          window.addEventListener('scroll', handleScroll);
        }
      };

      requestAnimationFrame(animate);
    };

    preloadImages();
    startAnimation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      {showPreloader && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* Preloader content here */}
        </div>
      )}

      {/* Background Div with Fixed Height */}
      <div style={{ height: estimatedAnimationScrollHeight, width: '100%' }}>

        {/* Animation Container - Sticky until animation finishes */}
        <Box
          sx={{
            position: isAnimationFinished ? 'relative' : 'sticky',
            top: 0,
            width: '100%',
            height: 'auto',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '1288px',
              height: '970px',
              overflow: 'hidden',
            }}
            ref={animationRef}
          >
            <img
              src={currentImageSrc}
              alt="Animation"
              style={{
                width: '100%',
                height: 'auto',
                opacity: opacity,
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '30%',
              background: 'linear-gradient(to top, black, transparent)',
            }} />
          </div>
        </Box>
      </div>

      {/* Rest of your page content can flow naturally here */}
    </>
  );
};

export default LandingAnimation;