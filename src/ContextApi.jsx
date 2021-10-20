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
          { categoryName: 'Dimensions', categoryContent: '', selected: true },
          { categoryName: 'Printhead', categoryContent: '', selected: false },
          { categoryName: 'Printarea', categoryContent: '', selected: false },
          { categoryName: 'Electronics', categoryContent: '', selected: false },
        ],
      },
      {
        sectionName: 'Z3',
        sectionCategories: [
          { categoryName: 'Dimensions', categoryContent: '', selected: false },
          { categoryName: 'Printhead', categoryContent: '', selected: true },
          { categoryName: 'Printarea', categoryContent: '', selected: false },
          { categoryName: 'Filter', categoryContent: '', selected: false },
          { categoryName: 'Electronics', categoryContent: '', selected: false },
        ],
      },
      {
        sectionName: 'Z3+',
        sectionCategories: [
          { categoryName: 'Dimensions', categoryContent: '', selected: false },
          { categoryName: 'Printhead', categoryContent: '', selected: false },
          { categoryName: 'Printarea', categoryContent: '', selected: false },
          { categoryName: 'Filter', categoryContent: '', selected: true },
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
