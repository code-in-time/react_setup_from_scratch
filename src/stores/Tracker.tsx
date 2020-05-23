import { observable, action, computed, toJS } from 'mobx';
import { ITodo } from '../types';

interface ITrack {
  ref: any,
  event: any,
  value: string,
  target: string,
  handler? : any
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
    const arr: ITrack[] = toJS(this.track)
    let index = 0;

    // debugger
    // loop
    let interval = setInterval(() => {

      // debugger
      switch (arr[index].target) {
        case 'INPUT':
          // arr[index].ref.current.value = arr[index].value
          arr[index].handler(arr[index].value)
          // debugger
          break;
        case 'BUTTON':
          arr[index].ref.current.click()
          break;
      
        default:
          // console.log('no match')
          break;
      }

      arr[index++]

      // Exit loop
      if (index >= arr.length) {
        clearInterval(interval);
      }

    }, 1000)


  }

  @action
    log(ref: any, event: any, value: string, target: string, handler: any = null) {
    // debugger
    const obj: ITrack = {
      ref,
      event,
      value,
      target,
      handler
    }
    this.track.push(obj)
    // console.log('track', toJS(this.track))
  }




}



export default new Tracker()