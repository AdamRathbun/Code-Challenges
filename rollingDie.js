function rotations(dieArray) {
  const opposites = {
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1
  };

  if (dieArray.length == 0) { return 0; }

  const appearances = [0, 0, 0, 0, 0, 0];

  for (let dieFace = 1; dieFace <= 6; dieFace++) {
    let count = 0;
    for (let k = 0; k < dieArray.length; k++) {
      if (dieArray[k] == dieFace) {
        continue;
      }

      if (opposites[dieArray[k]] == dieFace) {
        count += 2;
      } else {
        count++;
      }
    }
    appearances[dieFace - 1] = count;
  }

  return Math.min(...appearances);
}

// You are given an array of 6-faced dice. Each die is represented by its face up.

// Calculate the minimum number of rotations needed to make all faces the same.

// 1 will require one rotation to have 2, 3, 4 and 5 face up, but would require two rotations to make it the face 6, as 6 is the opposite side of 1.

// The opposite side of 2 is 5 and 3 is 4.