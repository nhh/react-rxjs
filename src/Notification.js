import React, {Component} from 'react';
import NotificationEventReceiver from "./event/notification/NotificationEventReceiver";

export default class Notification extends Component {

  notificationEventReceiver = new NotificationEventReceiver();

  constructor(props) {
    super(props);
    this.state = {id: Math.floor(Math.random() * Math.floor(100))};
    this.notificationEventReceiver.receive().subscribe((event) => this.setState(event))
  }

  render() {
    return <div>{this.state.notification + " ID -> " + this.state.id}</div>
  }

}
