import React, { useContext } from 'react';

import Contexts from '../ContextApi';

export default function PrintersNav() {
  const { setPrinter } = useContext(Contexts);
  const { selectedPrinter, printers } = useContext(Contexts);

  const buttonSetPrinter = (e) => {
    setPrinter(e.target.innerText);
  };

  const elms = printers.map((printerName) => {
    if (printerName === selectedPrinter) {
      return (
        <div className="p-3" key={`${printerName}Button`}>
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
        <div className="p-3" key={`${printerName}Button`}>
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
    <div className="container mx-auto p-0 py-5">
      <div className="flex flex-wrap justify-start">
        {elms}
        <div className="w-full pl-3 buttonHint text-xs text-gray-400">
          <span>*</span>Please select one of the above devices for
          specification.
        </div>
      </div>
    </div>
  );
}
