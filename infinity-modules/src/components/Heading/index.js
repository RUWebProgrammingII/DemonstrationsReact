import React from 'react';
import styles from './heading.module.css';

const Heading = ({ children }) => <h1 className={ styles.heading }>{ children }</h1>;

export default Heading;
