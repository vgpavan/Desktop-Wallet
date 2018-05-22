import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SendAmount.css';

import Header from '../../Header';
import AmountDisplay from './AmountDisplay';

import { Button } from 'semantic-ui-react';
import buttonStyles from '../../Button.css';

import { ContactIcon, BackArrowIcon } from '../../Icons';

export default class SendAmount extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header className={styles.white} headerName="Enter Amount" />
        <div className={styles.backArrow}><BackArrowIcon /></div>
        <div className={styles.subContainer}>
            <div className={styles.addressContainer}>
                <ContactIcon />
                <div className={styles.address}>0xf230b790e05390fc8295f4d3f60332c93bed42e2</div>
            </div>
            <AmountDisplay />
            <Button className={`${buttonStyles.button} ${buttonStyles.black}`}>Send</Button>
        </div>
      </div>
    );
  }
}