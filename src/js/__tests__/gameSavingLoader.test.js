import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gameSaving';
import json from '../parser';

const read = jest.fn();

read
  .mockReturnValueOnce(new Promise((resolve) => resolve(new ArrayBuffer(2))))
  .mockReturnValueOnce(new Promise((reject) => reject(new Error('Error on reader'))))
  .mockReturnValue(new Promise((resolve) => resolve(new ArrayBuffer(2))));


test('Create object GameSaving', () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  GameSavingLoader.load().then((saving) => expect(new GameSaving(saving)).toEqual(expected));
});

test('Catch error on reading ', () => {
  read().then((data) => expect(data).toBeInstanceOf(ArrayBuffer));
  read().catch((error) => expect(error).toBeInstanceOf(Error));
});

test('Catch error on parsing ', () => {
  read().then((data) => json(data).catch((error) => expect(error.message).toBe('Error in parsing file')));
});
