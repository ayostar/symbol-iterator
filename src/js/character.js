const typesCharacter = [
  'Bowerman',
  'Daemon',
  'Magician',
  'Swordsman',
  'Undead',
  'Zombie',
];

const possibleErrorTypes = {
  name: 'Введите имя от 2 до 10 символов!',
  type: 'Введите допустимое имя персонажа!',
  levelup: 'Нельзя повысить левел умершего!',
};

class Character {
  constructor(name, type, health, level, attack, defence) {
    if (!name || name.length < 2 || name.length > 10) {
      throw new Error(possibleErrorTypes.name);
    }
    this.name = name;

    if (typesCharacter.indexOf(type) === -1) {
      throw new Error(possibleErrorTypes.type);
    }

    // if (!typesCharacter.includes(type)) {
    //   throw new Error(possibleErrorTypes.type);
    // }
    this.type = type;

    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error(possibleErrorTypes.levelup);
    }

    this.level += 1;
    this.attack += (this.attack / 100) * 20;
    this.defence += (this.defence / 100) * 20;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export { Character as default, typesCharacter, possibleErrorTypes };
