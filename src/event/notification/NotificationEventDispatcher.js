import NotificationEvent from './NotificationEvent';

export default class NotificationEventDispatcher {

    dispatch(event) {
        return NotificationEvent.event.next(event);
    }

}
