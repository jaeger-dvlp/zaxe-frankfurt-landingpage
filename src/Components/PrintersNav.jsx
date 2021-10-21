import React, { useContext } from 'react';

import Contexts from '../ContextApi';

export default function buttonsNav() {
  const { setPrinter } = useContext(Contexts);
  const { selectedPrinter, buttons } = useContext(Contexts);

  const buttonSetPrinter = (e) => {
    setPrinter(e.target.innerText);
  };

  const elms = buttons.map((printerName, i) => {
    if (printerName === selectedPrinter) {
      return (
        <div
          data-aos="fade-down"
          data-aos-delay={`150` * i}
          className="p-3"
          key={`${printerName}Button`}
        >
          <button
            type="button"
            onClick={buttonSetPrinter}
            printer={'xlite+'}
            className="printerNavBtn activePrinter"
          >
            {printerName}
          </button>
        </div>
      );
    } else {
      return (
        <div
          data-aos="fade-down"
          data-aos-delay={`150` * i}
          className="p-3"
          key={`${printerName}Button`}
        >
          <button
            type="button"
            onClick={buttonSetPrinter}
            printer={'xlite+'}
            className="printerNavBtn"
          >
            {printerName}
          </button>
        </div>
      );
    }
  });

  return (
    <div className="container mx-auto p-0 py-2">
      <div className="flex flex-wrap justify-start">
        {elms}
        <div
          data-aos="fade-in"
          data-aos-delay="600"
          className="w-full pl-3 buttonHint text-xs text-gray-400"
        >
          <span>*</span>Please select one of the above devices for
          specification.
        </div>
      </div>
    </div>
  );
}
