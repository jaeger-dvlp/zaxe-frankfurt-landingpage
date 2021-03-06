import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ContextProvider } from './ContextApi';
import Header from './Components/Header';
import PrintersNav from './Components/PrintersNav';
import PrinterContent from './Components/PrinterContent';
import ContentNav from './Components/ContentNav';
import ImageViewer from './Components/ImageViewer';

AOS.init({
  mirror: true,
  startEvent: 'DOMContentLoaded',
});

function App() {
  return (
    <ContextProvider value="null">
      <div data-aos="fade-in" className="px-20">
        <Header />
        <PrintersNav />
        <PrinterContent />
        <ContentNav />
        <ImageViewer />
      </div>
    </ContextProvider>
  );
}

export default App;
