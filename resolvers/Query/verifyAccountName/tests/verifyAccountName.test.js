import verifyAccountName from "../index";

describe("These test all the various cases of verifyAccountNmae query", () => {
  test("should test verifyAccountName", async (done) => {
    const vars = {
      bank_code: "044",
      account_number: "0724407028",
    };
    const mock = await verifyAccountName("_", vars);
    expect(mock).toBe("Oluwaseyi Tamunomiebi Oladele");
    done();
  });

  test("should test verifyAccountName", async (done) => {
    const vars = {
      bank_code: "044",
      account_number: "0724407028",
      account_name: "Oladele Oluwaseyi Tamunomiebi",
    };
    const mock = await verifyAccountName("_", vars);
    expect(mock).toBe("Oladele Oluwaseyi Tamunomiebi");
    done();
  });

  test("should faill when supplied with invalid vars", async (done) => {
    const vars = {
      bank_code: "058", //Invalid Bank
      account_number: "0724407028",
    };
    await expect(verifyAccountName("_", vars)).rejects.toThrow(
      "Invalid Information"
    );
    done();
  }, 15000);

  test("should fail validation", async (done) => {
    const vars = {
      bank_code: "058232",
      account_number: "0724407028",
    };
    await expect(verifyAccountName("_", vars)).rejects.toThrow();
    done();
  }, 15000);
});
