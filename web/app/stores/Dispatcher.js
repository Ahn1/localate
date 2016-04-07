import {Dispatcher} from 'flux';

export default new class MyDispatcher extends Dispatcher{
  constructor(){
    super();
  }

  async WaitForEvent(eventType){
    return new Promise((res,rej) => {
      let regId = this.register((e) => {
        if(eventType == e.type)
        {
          this.unregister(regId);
          res(e);
        }
      });
    });
  }
}();
