import * as React from "react";
import { AcceptTicket } from "./AcceptTicket";
import { ActivityIndicator } from "react-native";
import  axios  from 'axios';

export class AcceptTicketContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      loading: true,
      routes: [
        { key: 1, title: "Tab One" },
        { key: 2, title: "Tab Two" }
      ],
      ticketList: []
    };
    this.tabonIndexChange = this.tabonIndexChange.bind(this);
  }

  componentDidMount() {
    // Get movies data
     axios.post('http://api.androidhive.info/json/movies.json')
    .then( (response) =>{
      let onScrollTicketList = response.data

      // Set data in state
       this.setState({
          ticketList: onScrollTicketList,
          loading: false
        });  
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  tabonIndexChange(index) {
    this.setState({ index });
  }

  render() {
    return (
      <>
      {
        this.state.loading && this.state.ticketList.length > 0? 
        <ActivityIndicator/>
        :
        // After  getting API response, load view
        <AcceptTicket
          payload={this.state}
          tabonIndexChange={this.tabonIndexChange}
        />
        }
      </>
    );
  }
}
