function declareWinner(fighter1, fighter2, firstAttacker) {
  const hero1=Math.ceil(fighter1.health/fighter2.damagePerAttack)
  const hero2=Math.ceil(fighter2.health/fighter1.damagePerAttack)
  return hero1>hero2 ? fighter1.name : hero2>hero1 ? fighter2.name : firstAttacker
}


/*
P: new objects of each fighter object
R: name property of winner
E: declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew"
P:
divide each fighter's health by the other one's attack damage and assign it to a variable
declare winner based on which variable is higher, or if they're equal, then firstAttacker wins
*/