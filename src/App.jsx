import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ContextProvider } from './ContextApi';
import Header from './Components/Header';
import PrintersNav from './Components/PrintersNav';

AOS.init();

function App() {
  return (
    <ContextProvider value="null">
      <div data-aos="fade-in" className="App">
        <Header />
        <PrintersNav />
      </div>
    </ContextProvider>
  );
}

export default App;
