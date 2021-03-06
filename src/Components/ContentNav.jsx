import React, { useContext, useEffect } from 'react';

import Contexts from '../ContextApi';

export default function contentNav() {
  const { setContent } = useContext(Contexts);
  const { selectedPrinter, sections } = useContext(Contexts);

  const buttonSetContent = (e) => {
    setContent(selectedPrinter, e.target.getAttribute('content'));
  };
  const contentElms = sections.map((section) => {
    if (section.sectionName === selectedPrinter) {
      return section.sectionCategories.map((category, i) => {
        if (category.selected === true) {
          return (
            <div
              data-aos="fade-down"
              data-aos-delay={`150` * i}
              data-aos-duration="500"
              data-aos-easing="ease-in-out-back"
              className="p-3"
              key={`${category.categoryName}ContentButton`}
            >
              <button
                type="button"
                onClick={buttonSetContent}
                printer={'xlite+'}
                className="contentNavBtn activeContent"
                content={category.categoryName}
                disabled="disabled"
              >
                {category.categoryName}
              </button>
            </div>
          );
        } else {
          return (
            <div
              data-aos="fade-down"
              data-aos-delay={`150` * i}
              data-aos-duration="500"
              data-aos-easing="ease-in-out-back"
              className="p-3"
              key={`${category.categoryName}ContentButton`}
            >
              <button
                type="button"
                onClick={buttonSetContent}
                printer={'xlite+'}
                className="contentNavBtn"
                content={category.categoryName}
              >
                {category.categoryName}
              </button>
            </div>
          );
        }
      });
    }
  });

  return (
    <div
      data-aos="fade-right"
      data-aos-delay="1200"
      className="container mx-auto p-0"
    >
      <div className="flex flex-wrap justify-start mt-20">{contentElms}</div>
    </div>
  );
}
