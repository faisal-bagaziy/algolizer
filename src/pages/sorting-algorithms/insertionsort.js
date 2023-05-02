import React, { Component } from 'react';
import HeaderForRest from '../../../components/header-for-rest-section/header-for-rest-section'
import SortVisualizer from '../../../components/sorting-components/SortVisualizer/SortVisualizer';
import  '../../styles/Home.module.css';
import InsertionSort, {  InsertionSortKey, InsertionSortDesc } from '../../../sort-algorithms/InsertionSort';

class Bubblee extends Component {
  state = {
    array: [],
    arraySize: 10,
    trace: [],
    algorithm: null
  };


componentDidMount() {
    this.generateRandomArray();
  }

 generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    const array = Array(this.state.arraySize)
      .fill(0)
      .map(() => getRandomInt(this.state.arraySize * 5));

    this.setState(
      {
        array,
        trace: []
      },
      this.createTrace
    );
  };
  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = InsertionSort;
    if (sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };    

render() {
  return (
    <>
        <HeaderForRest />
        <SortVisualizer
            array={this.state.array}
            trace={this.state.trace}
            desc={InsertionSortDesc}
          />

    </>
  );
}
}
export default Bubblee;
