import verifyBankAccountNumber from "..";

describe("Tests the VerifyBankAccountNumber Query resolver", () => {
  test("should (naively) test the verifyBankAccountNumber mutation", async (done) => {
    const vars = {
      user_account_number: "0724407028",
      user_bank_code: "044",
      user_account_name: "OLUWASEYI TAMUNOMIEBI OLADELE",
    };
    const mock = await verifyBankAccountNumber("_", vars);

    expect(mock).toBe("OLUWASEYI TAMUNOMIEBI OLADELE");
    done();
  });

  test("should fail if fed an invalid account", async (done) => {
    const vars = {
      user_account_number: "0724407021",
      user_bank_code: "058",
      user_account_name: "OLUWASEYI TAMUNOMIEBI OLADELE",
    };
    await expect(verifyBankAccountNumber("_", vars)).rejects.toThrow(
      "Invalid Information"
    );
    done();
  }, 15000);

  test("should fail if fed an an impropername", async (done) => {
    const vars = {
      user_account_number: "0724407028",
      user_bank_code: "044",
      user_account_name: "OLUWoSEYIN TAMUNOMIEBI OLADLE", // 3 editDistance
    };
    await expect(verifyBankAccountNumber("_", vars)).rejects.toThrow(
      "The user is unverified"
    );
    done();
  }, 15000);
});
