import React, { useContext } from 'react';

import Contexts from '../ContextApi';

export default function contentNav() {
  const { setContent } = useContext(Contexts);
  const { selectedPrinter, sections } = useContext(Contexts);

  const buttonSetContent = (e) => {
    setContent(e.target.innerText);
  };

  const elms = sections.map((theSect, i) => {
    theSect.sectionCategories.map((theCat) => {
      if (theCat.selected === true) {
        return (
          <div
            data-aos="fade-down"
            data-aos-delay={`150` * i}
            className="p-3"
            key={`${theCat.categoryName}ContentButton`}
          >
            <button
              type="button"
              onClick={buttonSetContent}
              printer={'xlite+'}
              className="contentNavBtn activePrinter"
            >
              {i + 1} - {theCat.categoryName}
            </button>
          </div>
        );
      } else {
        <div
          data-aos="fade-down"
          data-aos-delay={`150` * i}
          className="p-3"
          key={`${theCat.categoryName}ContentButton`}
        >
          <button
            type="button"
            onClick={buttonSetContent}
            printer={'xlite+'}
            className="contentNavBtn"
          >
            {i + 1} - {theCat.categoryName}
          </button>
        </div>;
      }
    });
  });

  return (
    <div className="container mx-auto p-0 py-2">
      <div className="flex flex-wrap justify-start">{elms}</div>
    </div>
  );
}
