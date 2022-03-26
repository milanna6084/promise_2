// TODO: write your code here
import GameSavingLoader from './gameSavingLoader';
import GameSaving from './gameSaving';

(async () => {
  const dataSaving = await GameSavingLoader.load();
  dataSaving((saving) => {
    const newSaving = new GameSaving(saving);
    console.log(newSaving);
  },
  (error) => console.error(error.message));
})();
