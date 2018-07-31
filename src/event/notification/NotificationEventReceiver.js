import NotificationEvent from './NotificationEvent';

export default class NotificationEventReceiver {

    event() {
        return NotificationEvent.event.asObservable();
    }

}