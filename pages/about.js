import Head from 'next/head';
import { Inter } from '@next/font/google';
// import styles from "../styles/Home.module.css";

// Material UI
import Box from '@mui/material/Box';

// Components
import HobbiesGrid from '../components/hobbies';
import SoftSkillsGrid from '../components/soft_skills';
import TechnicalSkillsGrid from '../components/technical_skills';
import Timeline from "../components/timeline"

export default function Home() {
  // Hobbies
  const hobbyList = [
    'Financial Exploration',
    'Active Lifestyle',
    'Entertainment',
    'Travelling',
  ];

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#FFFFF' }}>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hobbies  */}
      <HobbiesGrid id="" size={4} hobbies={hobbyList} />

      {/* Soft Skills */}
      <div id="Skills">
        <SoftSkillsGrid />
      </div>

      {/* Technical Skills */}
      {/* <TechnicalSkillsGrid /> */}

      {/* Timeline  */}

      <Timeline />

    </Box>
  );
}
