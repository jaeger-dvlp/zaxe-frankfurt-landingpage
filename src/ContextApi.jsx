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
          { categoryName: 'Dimensions', categoryContent: '' },
          { categoryName: 'Printhead', categoryContent: '' },
          { categoryName: 'Printare', categoryContent: '' },
          { categoryName: 'Filter', categoryContent: '' },
          { categoryName: 'Electronics', categoryContent: '' },
        ],
      },
      {
        sectionName: 'Z3',
        sectionCategories: [
          { categoryName: 'Dimensions', categoryContent: '' },
          { categoryName: 'Printhead', categoryContent: '' },
          { categoryName: 'Printare', categoryContent: '' },
          { categoryName: 'Filter', categoryContent: '' },
          { categoryName: 'Electronics', categoryContent: '' },
        ],
      },
      {
        sectionName: 'Z3+',
        sectionCategories: [
          { categoryName: 'Dimensions', categoryContent: '' },
          { categoryName: 'Printhead', categoryContent: '' },
          { categoryName: 'Printare', categoryContent: '' },
          { categoryName: 'Filter', categoryContent: '' },
          { categoryName: 'Electronics', categoryContent: '' },
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
