import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Image from 'next/image';

// ==============================|| LANDING - BROWSER  PAGE ||============================== //

export default function MockBlockPage() {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState<'Tablet.png' | 'mobile.png'>('Tablet.png');
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasAnimated.current) {
      setIsVisible(true);
      hasAnimated.current = true;
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === 'Tablet.png' ? 'mobile.png' : 'Tablet.png'
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        height: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsVisible(true)}
    >
      <Image
        src={`/assets/images/landing/${currentImage}`}
        alt="image"
        fill
        style={{
          objectFit: 'contain',
          transition: 'opacity 5s ease-in-out, transform 0.5s ease-in-out',
          opacity: isVisible ? (currentImage === 'Tablet.png' ? 1 : 0.7) : 0, // Opacidad condicional combinada
          transform: currentImage === 'Tablet.png' ? 'scale(1)' : 'scale(1.03)',
        }}
      />
    </Box>
  );
}