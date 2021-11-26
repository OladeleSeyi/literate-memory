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
});
