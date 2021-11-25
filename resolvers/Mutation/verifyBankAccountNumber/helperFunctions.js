/*  Each function should ideally be in a file with the same name. However because of the size of this project this will be done in this file for easy readability. */
/*
  This function was "stolen" from the internet. The comunit continously iterated and tweaked this function till it became speedy.
  Find the original here https://gist.github.com/andrei-m/982927#gistcomment-1931258
*/

const levenshtein = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  let tmp, i, j, prev, val, row;
  // swap to save some memory O(min(a,b)) instead of O(a)
  if (a.length > b.length) {
    tmp = a;
    a = b;
    b = tmp;
  }

  row = Array(a.length + 1);
  // init the row
  for (i = 0; i <= a.length; i++) {
    row[i] = i;
  }

  // fill in the rest
  for (i = 1; i <= b.length; i++) {
    prev = i;
    for (j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        val = row[j - 1]; // match
      } else {
        val = Math.min(
          row[j - 1] + 1, // substitution
          Math.min(
            prev + 1, // insertion
            row[j] + 1
          )
        ); // deletion
      }
      row[j - 1] = prev;
      prev = val;
    }
    row[a.length] = prev;
  }
  return row[a.length];
};

const computeEditDistance = (a, b) => {
  // convert strings to lowercase
  a = a.toLowerCase();
  b = b.toLowerCase();
  console.log("a", a);
  console.log("b", b);

  if (levenshtein(a, b) <= 2) {
    return true;
  } else return false;
};

export { levenshtein, computeEditDistance };
