import {Subject} from "rxjs";

class NotificationEvent {
  event = new Subject();
}

// Singleton
export default (new NotificationEvent())
