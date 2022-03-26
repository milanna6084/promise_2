
export default class GameSaving {
  constructor(saving) {
    const {
      id,
      created,
      userInfo,
    } = saving;
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}
