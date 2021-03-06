import React, { useContext, useState } from 'react';

import Contexts from '../ContextApi';

export default function PrinterContent() {
  const { selectedPrinter, sections, setImage, setImageStatus, fadeEffect } =
    useContext(Contexts);

  const activateImageViewer = (e) => {
    setImage(e.target.getAttribute('src'));
    setImageStatus('viewerActive');
  };

  const elm = sections.map((sect) => {
    if (sect.sectionName === selectedPrinter) {
      return sect.sectionCategories.map((cont, k) => {
        if (cont.selected === true) {
          return (
            <div
              key={`${selectedPrinter}${k}${sect.sectionName}Content`}
              className={`${fadeEffect} flex flex-wrap printerContentSection p-0`}
              style={{ minHeight: '23rem', maxHeight: '23rem' }}
            >
              <div
                className="md:w-1/2 w-full p-3 items-start content-start flex flex-wrap justify-start"
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
                className="md:w-1/2 w-full p-3 flex justify-center content-center align-middle"
                data-aos="fade-left"
                data-aos-easing="ease-in-out-back"
                data-aos-duration="800"
              >
                <img
                  className="self-center"
                  onClick={activateImageViewer}
                  src={cont.imageURL}
                  alt={`${selectedPrinter}Image`}
                  style={{ maxHeight: '348px' }}
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
      className="container mx-auto pt-5"
      data-aos="fade-down"
      data-aos-delay="800"
      data-aos-duration="500"
      data-aos-easing="ease-in-out-back"
    >
      {elm}
    </div>
  );
}
