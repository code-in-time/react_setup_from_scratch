
interface ITrack {
  ref: any,
  event: any,
  value: string
}

export default class EventTracker {
  static track: any[] = []

  static log(ref: any, event: any, value: string) {
    // debugger
    const obj: ITrack = {
      ref,
      event,
      value
    }
    this.track.push(obj)
    console.log('track', this.track)
  }
}
