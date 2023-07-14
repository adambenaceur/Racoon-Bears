import React from 'react';
import { StyleSheet } from 'react-native';

const Home = () => {
  return (
    <div style={styles.header}>
      <h1 style={styles.headerText}> Hi next.js </h1>
    </div>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white'
  },
  headerText: {
    fontFamily: 'Coiny'
  }
});

export default Home;
