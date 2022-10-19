import Character from '../character';

test.each([
  [['Name', 'Bowerman', 50, 1, 25, 25], 10, 42.5],
  [['Name', 'Zombie', 100, 1, 55, 80], 60, 88],
  [['Name', 'Magician', 0, 1, 25, 25], 10, -7.5],
  [['Name', 'Daemon', -10, 1, 5, 15], 50, -10],
])(
  'should test method "damage", testing class Character',
  (params, points, health) => {
    const hero = new Character(...params);
    hero.damage(points);

    expect(hero.health).toBeCloseTo(health);
  }
);
