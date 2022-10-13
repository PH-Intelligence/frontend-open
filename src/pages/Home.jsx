import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Process from '../partials/Process';
import FeaturesHome from '../partials/FeaturesHome';
import Tabs from '../partials/Tabs';
import Target from '../partials/Target';
import News from '../partials/News';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DataGrid from '../components/DataGrid';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}

        <HeroHome />
        <Container maxWidth="md">
        <Box sx={{
            '.MuiTablePagination-displayedRows': {
              'margin-top': '1em',
              'margin-bottom': '1em'
            },
            '.MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel': {
              'margin-top': '1em',
              'margin-bottom': '1em'
            }
            
            }}>
            <Typography variant="h4" component="h1" gutterBottom>
            </Typography>
            <DataGrid></DataGrid>
            {/* <BasicTable></BasicTable> */}
        </Box>
        </Container>
        <Process />
        <FeaturesHome />

        <Tabs />
        <Target />
        <News />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;