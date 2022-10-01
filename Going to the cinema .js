function movie(card, ticket, perc) {
  let x = 0;
  let systemA=ticket*x
  let systemB=card
  while (systemA<=Math.ceil(systemB)){
    x++
    systemA+=ticket
    systemB+=ticket*(Math.pow(perc, x))
  }
  console.log(systemA, systemB)
  return x
};

/*
given a base price of a card, price of ticket, and recursive fractional cost of each additional ticket,
calculate the point where a system of buying a ticket for the flat rate is worse
than a system of buying the card, then paying the recursive fractional cost of each ticket.

note it's rounded up to the dollar. can use Math.pow(), which takes in the number, then to the power of
*/