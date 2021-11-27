import { computeEditDistance, validateRequest } from "../helperFunctions";

describe("This tests all the Verify BAnk Account HelperFunctions", () => {
  test("should test computeEdit Distance", () => {
    expect(computeEditDistance("levenshtein", "levenshtein")).toBe(true);
    expect(computeEditDistance("gumbo", "gambol")).toBe(true);
    expect(computeEditDistance("sitting", "kitten")).toBe(false);
  });
  test("should fail the validation function ", (done) => {
    const vars = {
      user_bank_code: "05822",
      user_account_number: "0724407028ss1",
      user_account_name: "The way ",
    };
    try {
      expect(validateRequest(vars)).toThrow();
    } catch (e) {
      expect(e.message).toMatch(
        '"user_bank_code" length must be 3 characters long'
      );
    }
    done();
  });
});
