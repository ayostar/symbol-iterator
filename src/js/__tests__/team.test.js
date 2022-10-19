import Bowerman from '../bowerman';
import Team from '../team';
import Zombie from '../zombie';

test.each([
  [[], []],
  [undefined, []],
  [{}, []],
  [
    [new Bowerman('Лучник'), new Zombie('Zombie')],
    [new Bowerman('Лучник'), new Zombie('Zombie')],
  ],
])('should test Team class interable', (params, expected) => {
  const teamIterable = new Team(params);
  const allCharacters = [];
  let index = 0;
  for (const character of teamIterable) {
    allCharacters.push(character);

    expect(expected[index]).toEqual(character);
    index++;
  }

  expect(expected).toEqual(allCharacters);
});
