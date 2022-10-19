import Bowerman from './bowerman';
import Swordsman from './swordsman';
import Magician from './magician';
import Undead from './undead';
import Zombie from './zombie';
import Daemon from './daemon';
import Team from './team';
import Character from './character';

const hero = new Character('Alex', 'Swordsman', 100, 1, 25, 25);
const heroBowerman = new Bowerman('Лучник');
const heroSwordsman = new Swordsman('Jilly');
const heroMagician = new Magician('Mike');
const heroUndead = new Undead('Holly');
const heroZombie = new Zombie('Jully');
const heroDaemon = new Daemon('Dady');

const myTeam = new Team([heroBowerman, heroDaemon, heroSwordsman, heroZombie]);
const opponentTeam = new Team([heroUndead, heroMagician, hero]);

for (let character of myTeam) {
  console.log(character);
}

for (let character of opponentTeam) {
  console.log(character);
}
