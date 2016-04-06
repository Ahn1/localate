import {Dispatcher} from 'flux';

export default new class MyDispatcher extends Dispatcher{
  constructor(){
    super();

    this.register((e) => this.HandleInternal(e))
    console.log(this);
  }

  HandleInternal(e){

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
