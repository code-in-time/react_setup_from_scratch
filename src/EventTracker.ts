export default class EventTracker {

  static log(type: string, change: string) {
    console.log('event', [type, change])
  }
}
