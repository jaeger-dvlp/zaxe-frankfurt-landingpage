import React, { Component } from 'react';

const Contexts = React.createContext();

class ContextProvider extends Component {
  state = {
    selectedPrinter: 'Z3',
    printers: ['xlite+', 'Z2', 'Z3'],
  };

  setPrinter = (selectedPrinter) => {
    this.setState((prev) => ({ selectedPrinter }));
  };

  render() {
    const { children } = this.props;
    const { selectedPrinter, printers } = this.state;
    const { setPrinter } = this;

    return (
      <Contexts.Provider value={{ selectedPrinter, setPrinter, printers }}>
        {children}
      </Contexts.Provider>
    );
  }
}

export default Contexts;
export { ContextProvider };
