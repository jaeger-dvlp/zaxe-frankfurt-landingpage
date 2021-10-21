import React, { useContext, useState } from 'react';

import Contexts from '../ContextApi';

export default function PrinterContent() {
  const { selectedPrinter, sections, setImage, setImageStatus } =
    useContext(Contexts);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const activateImageViewer = (e) => {
    setImage(e.target.getAttribute('src'));
    setImageStatus('viewerActive');
  };

  const elm = sections.map((sect) => {
    if (sect.sectionName === selectedPrinter) {
      return sect.sectionCategories.map((cont) => {
        if (cont.selected === true) {
          return (
            <div
              key={`${selectedPrinter}${sect.sectionName}Content`}
              className="flex  printerContentSection max-h-96 p-0"
              style={{ minHeight: '24rem' }}
            >
              <div
                className="w-1/2 p-3 items-start content-start flex flex-wrap justify-start"
                data-aos="fade-right"
                data-aos-easing="ease-in-out-back"
                data-aos-duration="800"
              >
                <div className="categoryHeader w-full text-4xl ">
                  {cont.categoryName}
                </div>
                <div
                  className="mt-1 w-96 "
                  style={{
                    height: '2px',
                    backgroundColor: '#009ade',
                    marginLeft: '-50%',
                    width: '100%',
                  }}
                ></div>
                <div
                  dangerouslySetInnerHTML={{ __html: cont.categoryContent }}
                  className="categoryContent w-full py-2 text-lg whitespace-pre-wrap"
                ></div>
              </div>
              <div
                className="w-1/2 p-3 flex justify-center content-center align-middle"
                data-aos="fade-left"
                data-aos-easing="ease-in-out-back"
                data-aos-duration="800"
              >
                <img
                  onClick={activateImageViewer}
                  src={cont.imageURL}
                  alt={`${selectedPrinter}Image`}
                />
              </div>
            </div>
          );
        }
      });
    }
  });

  return (
    <div
      className="container mx-auto py-5"
      data-aos="fade-down"
      data-aos-delay="800"
      data-aos-duration="500"
      data-aos-easing="ease-in-out-back"
    >
      {elm}
    </div>
  );
}
