import React, { Component } from 'react';

const Contexts = React.createContext();

class ContextProvider extends Component {
  state = {
    selectedPrinter: '',
  };
  setPrinter = (selectedPrinter) => {
    this.setState((prev) => ({ selectedPrinter }));
  };

  render() {
    const { children } = this.props;
    const { selectedPrinter } = this.state;
    const { setPrinter } = this;

    return (
      <Contexts.Provider valeue={{ selectedPrinter, setPrinter }}>
        {children}
      </Contexts.Provider>
    );
  }
}

export default Contexts;
export { ContextProvider };
