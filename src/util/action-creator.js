export default class ActionCreator {
  constructor(type) {
    this. type = type;
  }

  create(payload) {
    return { type: this.type, payload };
  }
}
