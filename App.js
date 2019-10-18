/**
 * React Native App - Exceptionaire Demo
 * Name -  Shivani Agrawal
 */

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { AcceptTicketContainer } from "./AcceptTicket";

export default class App extends Component {

  componentDidMount() {
    // Hide splash screen when app loaded
      SplashScreen.hide();
  }

  render() {
    return (
      // Load Ticket container screen
     <AcceptTicketContainer/>
    );
  }
}
