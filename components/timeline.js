import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const Timeline = () => {
  const timelineData = [
    { year: '2023', event: 'Software Engineer', image: '/images/profile.png' },
    { year: '2023', event: 'Web Engineer', image: '/images/profile.png' },
    { year: '2021', event: 'Jr. Web Dev', image: '/images/profile.png' },
    { year: '2020', event: 'Assoc. Web Dev', image: '/images/profile.png' },
    // Add more timeline data as needed
  ];

  const timelineRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, x: 0 });
          } else {
            controls.start({
              opacity: 0,
              x: entry.intersectionRatio < 0 ? -100 : 100,
            });
          }
        });
      },
      { threshold: 0.2 }, // Adjust the threshold as needed
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={timelineRef}
      sx={{
        flexGrow: 1,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
          }}
          animate={controls}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" align="center">
              {item.year}
              <Typography variant="body1" align="center">
                {item.event}
              </Typography>
            </Typography>
            <Box
              sx={{
                borderRadius: '50%',
                overflow: 'hidden',
                width: '80px',
                height: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src={item.image} alt="Icon" width={80} height={80} />
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default Timeline;
