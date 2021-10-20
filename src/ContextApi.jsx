import React, { Component } from 'react';

const Contexts = React.createContext();

class ContextProvider extends Component {
  state = {
    selectedPrinter: 'Z3',
    buttons: ['xlite+', 'Z3', 'Z3+', 'Materials'],
  };

  setPrinter = (selectedPrinter) => {
    this.setState((prev) => ({ selectedPrinter }));
  };

  render() {
    const { children } = this.props;
    const { selectedPrinter, buttons } = this.state;
    const { setPrinter } = this;

    return (
      <Contexts.Provider value={{ selectedPrinter, setPrinter, buttons }}>
        {children}
      </Contexts.Provider>
    );
  }
}

export default Contexts;
export { ContextProvider };
