import { observable, action, computed, toJS } from 'mobx';
import { ITodo } from '../types';

interface ITrack {
  ref: any,
  event: any,
  value: string,
  target: string
}

class Tracker {

  @observable
  track: ITrack[] = []

  @action
  reset()  {
    this.track = []
  }

  @action
  play() {
    const arr = toJS(this.track)
    let index = 0;
    debugger
    // loop
    let interval = setInterval(() => {
      console.log(arr[index++]);

      // perform action
      const item = arr[index]
      item.ref.current.value = item.value





      if (index == arr.length) {
        clearInterval(interval);
      }
    }, 1000)


  }

  @action
    log(ref: any, event: any, value: string, target: string,) {
    // debugger
    const obj: ITrack = {
      ref,
      event,
      value,
      target
    }
    this.track.push(obj)
    console.log('track', this.track)
  }




}



export default new Tracker()