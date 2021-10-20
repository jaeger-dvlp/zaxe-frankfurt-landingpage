import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ContextProvider } from './ContextApi';
import Header from './Components/Header';
import PrintersNav from './Components/PrintersNav';
import PrinterContent from './Components/PrinterContent';

AOS.init({
  mirror: true,
  startEvent: 'DOMContentLoaded',
});

function App() {
  return (
    <ContextProvider value="null">
      <div data-aos="fade-in" className="App">
        <Header />
        <PrintersNav />
        <PrinterContent />
      </div>
    </ContextProvider>
  );
}

export default App;
