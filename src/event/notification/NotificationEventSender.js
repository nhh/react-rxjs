import NotificationEvent from './NotificationEvent';

export default class NotificationEventSender {

    dispatch(event) {
        return NotificationEvent.event.next(event);
    }

}