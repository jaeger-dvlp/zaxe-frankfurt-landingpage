import React, { useContext, useState } from 'react';

import Contexts from '../ContextApi';

export default function PrinterContent() {
  const { selectedPrinter, sections } = useContext(Contexts);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const elm = sections.map((sect) => {
    if (sect.sectionName === selectedPrinter) {
      return sect.sectionCategories.map((cont) => {
        if (cont.selected === true) {
          return (
            <div
              key={`${cont.categoryName}${selectedPrinter}`}
              className="w-1/2"
              data-aos="fade-right"
              data-aos-easing="ease-in-out-back"
              data-aos-duration="700"
            >
              <div className="categoryHeader text-4xl">{cont.categoryName}</div>
            </div>
          );
        }
      });
    }
  });

  return (
    <div className="container mx-auto p-3 py-10">
      <div className="w-full flex justify-center align-middle p-0">
        {elm}
        <div className="w-1/2">Image</div>
      </div>
    </div>
  );
}
