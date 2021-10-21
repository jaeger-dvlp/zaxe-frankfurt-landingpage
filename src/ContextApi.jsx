import React, { Component } from 'react';

const Contexts = React.createContext();
class ContextProvider extends Component {
  state = {
    selectedPrinter: 'Z3',
    buttons: ['xlite+', 'Z3', 'Z3+', 'Materials'],
    sections: [
      {
        sectionName: 'xlite+',
        sectionCategories: [
          {
            categoryName: 'Dimensions',
            categoryContent: `<span>Single Printhead</span>
<span class=" font-semibold">Filament Diameter : </span> <span>1.75</span>
<span class=" font-semibold">Print Volume : </span> <span>220 x 230 x 200 mm</span>
<span class=" font-semibold">Nozzle Diameters : </span> <span>0,2/0,4/0,6/0,8 mm</span>
<span class=" font-semibold">Calibration : </span> <span>Fully Automatic </span>
<span>Filament Sensor</span>`,
            imageURL: 'https://zaxe.com/wp-content/uploads/2021/09/xlite-4.png',
            selected: true,
          },
          { categoryName: 'Printhead', categoryContent: '', selected: false },
          { categoryName: 'Printarea', categoryContent: '', selected: false },
          { categoryName: 'Electronics', categoryContent: '', selected: false },
        ],
      },
      {
        sectionName: 'Z3',

        sectionCategories: [
          {
            categoryName: 'Dimensions',
            categoryContent: `<span>Single Printhead</span>
<span class=" font-semibold">Filament Diameter : </span> <span>1.75</span>
<span class=" font-semibold">Print Volume : </span> <span>400 x 300 x 350 mm</span>
<span class=" font-semibold">Nozzle Diameters : </span> <span>0,2/0,4/0,6/0,8 mm</span>
<span class=" font-semibold">Calibration : </span> <span>Fully Automatic and Z Tilt</span>
<span>Filament Sensor</span>`,
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/Z3-e1632095337489.png',
            selected: true,
          },
          { categoryName: 'Printhead', categoryContent: '', selected: false },
          { categoryName: 'Printarea', categoryContent: '', selected: false },
          { categoryName: 'Filter', categoryContent: '', selected: false },
          { categoryName: 'Electronics', categoryContent: '', selected: false },
        ],
      },
      {
        sectionName: 'Z3+',
        sectionCategories: [
          {
            categoryName: 'Dimensions',
            categoryContent: `<span>Dual Independent Printhead</span>
<span class=" font-semibold">Filament Diameter : </span> <span>1.75</span>
<span class=" font-semibold">Print Volume : </span> <span>300 x 300 x 300 mm</span>
<span class=" font-semibold">Nozzle Diameters : </span> <span>0,2/0,4/0,6/0,8 mm</span>
<span class=" font-semibold">Calibration : </span> <span>Fully Automatic and Z Tilt</span>
<span>Filament Sensor</span>`,
            imageURL:
              'https://zaxe.com/wp-content/uploads/2021/09/Urun-sayfasi-Z3-tasarim.png',
            selected: true,
          },
          { categoryName: 'Printhead', categoryContent: '', selected: false },
          { categoryName: 'Printarea', categoryContent: '', selected: false },
          { categoryName: 'Filter', categoryContent: '', selected: false },
          { categoryName: 'Electronics', categoryContent: '', selected: false },
        ],
      },
    ],
  };

  setPrinter = (selectedPrinter) => {
    this.setState((prev) => ({ selectedPrinter }));
  };

  render() {
    const { children } = this.props;
    const { selectedPrinter, buttons, sections } = this.state;
    const { setPrinter } = this;

    return (
      <Contexts.Provider
        value={{ selectedPrinter, setPrinter, buttons, sections }}
      >
        {children}
      </Contexts.Provider>
    );
  }
}

export default Contexts;
export { ContextProvider };
