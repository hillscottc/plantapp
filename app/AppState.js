import { observable } from 'mobx';

class AppState {
  @observable timer = 0;
  @observable plants = [];
  @observable common = '';
  @observable family = '';
  @observable symbol = '';
  @observable sci = '';
  @observable offset = 0;
  @observable pageNum = 1;
  @observable limit = 10;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}

export default AppState;
