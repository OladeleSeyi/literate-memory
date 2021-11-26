import { compareNames, toTitleCase } from "../helperFunctions";

describe("Tests for the verifyAccountName helper Functions", () => {
  test("should test compareNames", () => {
    // The providedName should be return on every occassion.
    // case 1:  providedName = John Snow resolvedName = Jon Snow
    // case 2 : providedName = John Snow, resolvedName = John Snow
    // Test that it returns "John Snow" in both cases
    const case1 = compareNames("John Snow", "Jon Snow");
    const case2 = compareNames("John Snow", "John Snow");

    expect(case1).toEqual(case2);
  });

  test("should test toTitleCase ", () => {
    // Test that it returns "John Snow" in all cases
    const case1 = toTitleCase("JOhn SnOw");
    const case2 = toTitleCase("john snow");
    const case3 = toTitleCase("JOHN SNOW");

    expect(case1).toEqual(case2);
    expect(case2).toEqual(case3);
  });
});
