import NotificationEvent from './NotificationEvent';

export default class NotificationEventReceiver {

    receive() {
        return NotificationEvent.event.asObservable();
    }

}