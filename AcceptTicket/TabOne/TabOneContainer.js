import * as React from "react";
import { TabOne } from "./TabOne";

export class TabOneContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 1, title: "Push TabOne" },
        { key: 2, title: "Email TabOne" }
      ]
    };
    this.tabonIndexChange = this.tabonIndexChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  static navigationOptions = {
    header: null
  };
  tabonIndexChange(index) {
    this.setState({ index });
  }
  goBack() {
    this.props.navigation.goBack();
  }
  componentDidMount() {
    console.log('DidMount', this.props);
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }
  render() {
    return (
      <TabOne
        payload={this.state}
        tabonIndexChange={this.tabonIndexChange}
        goBack={this.goBack}
        ticketList={this.props.ticketList}
      />
    );
  }
}
