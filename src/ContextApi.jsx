import React, { Component } from 'react';

const Contexts = React.createContext();
class ContextProvider extends Component {
  state = {
    selectedImage: null,
    imageViewerStatus: null,
    selectedPrinter: 'Z3',
    buttons: ['xlite+', 'Z3', 'Z3+', 'Materials'],
    sections: [
      {
        sectionName: 'xlite+',
        sectionCategories: [
          {
            categoryName: 'Dimensions',
            selected: true,
            categoryContent: `<span>Single Printhead</span>
<span class=" font-semibold">Filament Diameter : </span> <span>1.75</span>
<span class=" font-semibold">Print Volume : </span> <span>220 x 230 x 200 mm</span>
<span class=" font-semibold">Nozzle Diameters : </span> <span>0,2/0,4/0,6/0,8 mm</span>
<span class=" font-semibold">Calibration : </span> <span>Fully Automatic </span>
<span>Filament Sensor</span>\n
<span style='position: relative !important;top: 10px !important;'><img width="300px" src="https://zaxe.com/wp-content/uploads/2021/09/xlite-2.png"/></span>`,
            imageURL: 'https://zaxe.com/wp-content/uploads/2021/09/xlite-4.png',
          },
          {
            categoryName: 'Printhead',
            selected: false,
            categoryContent: 'New E3D Printhead.',
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/Mobil_cropped.png',
          },
          {
            categoryName: 'Printarea',
            selected: false,
            categoryContent: 'Flexible Printarea.',
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/9M4A40671.png',
          },
          {
            categoryName: 'Electronics',
            selected: false,
            categoryContent: 'New Zaxe xBoard',
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/xlite_anakart.png',
          },
        ],
      },
      {
        sectionName: 'Z3',

        sectionCategories: [
          {
            categoryName: 'Dimensions',
            selected: true,
            categoryContent: `<span>Single Printhead</span>
<span class=" font-semibold">Filament Diameter : </span> <span>1.75</span>
<span class=" font-semibold">Print Volume : </span> <span>400 x 300 x 350 mm</span>
<span class=" font-semibold">Nozzle Diameters : </span> <span>0,2/0,4/0,6/0,8 mm</span>
<span class=" font-semibold">Calibration : </span> <span>Fully Automatic and Z Tilt</span>
<span>Filament Sensor</span>\n
<span style='position: relative !important;top: 10px !important;'><img width="300px" src="https://zaxe.com/wp-content/uploads/2021/09/z2-2.png"/></span>`,
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/Z3-e1632095337489.png',
          },
          {
            categoryName: 'Printhead',
            selected: false,
            categoryContent: 'E3D & Titanium  Printhead.',
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/Urun-S-Mobil-Z2_Z3-Ext.png',
          },
          {
            categoryName: 'Printarea',
            selected: false,
            categoryContent: 'Flexible Printarea.',
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/9M4A40711.png',
          },
          {
            categoryName: 'Filter',
            selected: false,
            categoryContent: 'New Hepa Filter.',
            imageURL: 'https://zaxe.com/wp-content/uploads/hepa-filtre.jpg',
          },
          {
            categoryName: 'Electronics',
            selected: false,
            categoryContent: 'New Zaxe zBoard',
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/xlite_anakart.png',
          },
        ],
      },
      {
        sectionName: 'Z3+',
        sectionCategories: [
          {
            categoryName: 'Dimensions',
            selected: true,
            categoryContent: `<span>Dual Independent Printhead</span>
<span class=" font-semibold">Filament Diameter : </span> <span>1.75</span>
<span class=" font-semibold">Print Volume : </span> <span>300 x 300 x 300 mm</span>
<span class=" font-semibold">Nozzle Diameters : </span> <span>0,2/0,4/0,6/0,8 mm</span>
<span class=" font-semibold">Calibration : </span> <span>Fully Automatic and Z Tilt</span>
<span>Filament Sensor</span>\n
<span style='position: relative !important;top: 10px !important;'><img width="300px" src="https://zaxe.com/wp-content/uploads/2021/09/z2-2.png"/></span>`,
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/Urun-sayfasi-Z3-tasarim.png',
          },
          {
            categoryName: 'Printhead',
            selected: false,
            categoryContent: 'E3D & Titanium Double Printhead.',
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/Urun-S-Mobil-Z2_Z3-Ext.png',
          },
          {
            categoryName: 'Printarea',
            selected: false,
            categoryContent: 'Flexible Printarea.',
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/9M4A40711.png',
          },
          {
            categoryName: 'Filter',
            selected: false,
            categoryContent: 'New Hepa Filter.',
            imageURL: 'https://zaxe.com/wp-content/uploads/hepa-filtre.jpg',
          },
          {
            categoryName: 'Electronics',
            selected: false,
            categoryContent: 'New Zaxe zBoard',
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/xlite_anakart.png',
          },
        ],
      },
      {
        sectionName: 'Materials',
        sectionCategories: [
          {
            categoryName: 'Zaxe PLA',
            selected: true,
            categoryContent: `<span>Zaxe PLA is lorem ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>`,
            imageURL: 'https://zaxe.com/public/svg-main/naturalFla.png',
          },
          {
            categoryName: 'Zaxe ABS',
            selected: false,
            categoryContent: `<span>Zaxe PLA is lorem ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>`,
            imageURL: 'https://zaxe.com/public/svg-main/blueFla.png',
          },
          {
            categoryName: 'Zaxe PETG',
            selected: false,
            categoryContent: `<span>Zaxe PLA is lorem ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>`,
            imageURL: 'https://zaxe.com/public/svg-main/greenFla.png',
          },
          {
            categoryName: 'Zaxe FLEX',
            selected: false,
            categoryContent: `<span>Zaxe PLA is lorem ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>
<span class=" font-semibold">Lorem : </span> <span>ipsum</span>`,
            imageURL: 'https://zaxe.com/public/svg-main/yellowFla.png',
          },
        ],
      },
    ],
  };

  setPrinter = (selectedPrinter) => {
    this.setState((prev) => ({ selectedPrinter }));
  };

  setImage = (selectedImage) => {
    this.setState((prev) => ({ selectedImage }));
  };
  setImageStatus = (imageViewerStatus) => {
    this.setState((prev) => ({ imageViewerStatus }));
  };

  setContent = (selectedPrinterIncoming, contentButtonInner) => {
    this.state.sections.map((section, s) => {
      if (section.sectionName === selectedPrinterIncoming) {
        section.sectionCategories.map((category, c) => {
          if (category.categoryName === contentButtonInner) {
            if (category.selected !== true) {
              this.setState(
                (prev) =>
                  (prev.sections[s].sectionCategories[c].selected = true)
              );
            }
          } else {
            this.setState(
              (prev) => (prev.sections[s].sectionCategories[c].selected = false)
            );
          }
        });
      }
    });
  };

  render() {
    const { children } = this.props;
    const {
      selectedPrinter,
      sectionButtons,
      buttons,
      sections,
      selectedImage,
      imageViewerStatus,
    } = this.state;
    const { setPrinter, setContent, setImage, setImageStatus } = this;

    return (
      <Contexts.Provider
        value={{
          selectedPrinter,
          setContent,
          setPrinter,
          setImage,
          setImageStatus,
          sectionButtons,
          buttons,
          sections,
          selectedImage,
          imageViewerStatus,
        }}
      >
        {children}
      </Contexts.Provider>
    );
  }
}

export default Contexts;
export { ContextProvider };
