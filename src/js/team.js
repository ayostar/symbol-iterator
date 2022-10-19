export default class Team {
  constructor(characters) {
    this.characters = Array.isArray(characters) ? characters : [];
  }

  [Symbol.iterator]() {
    const values = this.characters;
    let index = 0;
    return {
      next() {
        const result = {
          index: index,
          value: values[index],
          done: index >= values.length,
        };
        index++;
        return result;
      },
    };
  }
}
