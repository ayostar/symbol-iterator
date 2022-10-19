import Character, { possibleErrorTypes } from '../character';

test.each([
  [
    ['Name', 'Bowerman', 100, 1, 25, 25],
    {
      name: 'Name',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    ['Name', 'Undead', 80, 2, 65, 15],
    {
      name: 'Name',
      type: 'Undead',
      health: 80,
      level: 2,
      attack: 65,
      defence: 15,
    },
  ],
  [
    ['Name', 'Zombie', 10, 3, 15, 100],
    {
      name: 'Name',
      type: 'Zombie',
      health: 10,
      level: 3,
      attack: 15,
      defence: 100,
    },
  ],
  [
    ['', 'Zombie', 10, 3, 15, 100],
    {
      name: '',
      type: 'Zombie',
      health: 10,
      level: 3,
      attack: 15,
      defence: 100,
    },
  ],
  [
    [123, 'Superman', 10, 3, 15, 100],
    {
      name: 123,
      type: 'Spiderman',
      health: 10,
      level: 3,
      attack: 15,
      defence: 100,
    },
  ],
])('should create hero, testing class Character', (params, recieved) => {
  try {
    const expected = new Character(...params);
    expect(expected).toEqual(recieved);
  } catch (error) {
    expect([possibleErrorTypes.name, possibleErrorTypes.type]).toContain(
      error.message
    );
  }
});
