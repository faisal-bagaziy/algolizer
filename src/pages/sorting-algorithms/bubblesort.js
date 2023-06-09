import React, { Component } from 'react';
import HeaderForRest from '../../../components/header-for-rest-section/header-for-rest-section'
import SortVisualizer from '../../../components/sorting-components/SortVisualizer/SortVisualizer';
import  '../../styles/Home.module.css';
import BubbleSort, {  BubbleSortKey, BubbleSortDesc } from '../../../sort-algorithms/BubbleSort';
import Head from 'next/head';

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
    const sort = BubbleSort;
    if (sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };    

render() {
  return (
    <>
      <Head>
        <title>Algolizer | Bubble Sort</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sort.svg" />
      </Head>
        <HeaderForRest />
        <SortVisualizer
            array={this.state.array}
            trace={this.state.trace}
            desc={BubbleSortDesc}
          />

    </>
  );
}
}
export default Bubblee;
