function isFlush(cards) {
  const card1=cards[0].split('')
  const suit=card1[card1.length-1]
  return cards.every(card => card.split('')[card.length-1] === suit)
}

/*
check if every card in an array of card strings has matching suit. boolean result.
use every() method
*/