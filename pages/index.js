import React from 'react';
import ChartComponent from './ect';
import MyComponent from './indexy';

const containerStyle = {
  display: 'flex',
};

const leftContainerStyle = {
  flex: 1,
};

const rightContainerStyle = {
  flex: 1,
};

const Container = () => {
  return (
    <div style={containerStyle}>
      <div style={leftContainerStyle}>
        <ChartComponent />
        <ChartComponent />
      </div>
      <div style={rightContainerStyle}>
        <MyComponent />
      </div>
    </div>
  );
};

export default Container;

