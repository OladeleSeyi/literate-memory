import { computeEditDistance } from "../helperFunctions";

describe("This tests all the Verify BAnk Account Helper Functions", () => {
  test("should test computeEdit Distance", () => {
    expect(computeEditDistance("levenshtein", "levenshtein")).toBe(true);
    expect(computeEditDistance("gumbo", "gambol")).toBe(true);
    expect(computeEditDistance("sitting", "kitten")).toBe(false);
  });
});
