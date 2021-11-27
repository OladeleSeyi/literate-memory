import { server } from "../graphQlHandler";

//  This is a rather naive test to test that the Graphql Server mounts on demand. An additional redundant query "hello" was created for this test.

describe("These are the poor man's  E2E tests", () => {
  test("should test the hello Query", (done) => {
    const query = `{
      hello(name:  "John")
    }`;
    const event = { body: JSON.stringify({ query }), httpMethod: "POST" };

    const context = "context";
    const callback = (error, response) => {
      try {
        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe("string");
        const {
          data: { hello },
        } = JSON.parse(response.body);
        expect(hello).toEqual("Hello John");
        done();
      } catch (error) {
        done(error);
      }
    };

    server(event, context, callback);
  });

  test("should test the mutation", (done) => {
    const query = `
      mutation {
        verifyBankAccountNumber(
          user_account_number: "0724407028"
          user_bank_code: "044"
          user_account_name: "OLUWASEYI TAMUNOMIEBI OLADELE"
        )
      }
    `;
    const event = { body: JSON.stringify({ query }), httpMethod: "POST" };

    const context = "context";
    const callback = (error, response) => {
      try {
        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe("string");
        const {
          data: { verifyBankAccountNumber },
        } = JSON.parse(response.body);
        expect(verifyBankAccountNumber).toEqual(
          "OLUWASEYI TAMUNOMIEBI OLADELE"
        );
        done();
      } catch (error) {
        done(error);
      }
    };

    server(event, context, callback);
  });

  test("should test the mutation", (done) => {
    const query = `
    {
      verifyAccountName(bank_code:"044", account_number: "0724407028", )
    }
    `;
    const event = { body: JSON.stringify({ query }), httpMethod: "POST" };

    const context = "context";
    const callback = (error, response) => {
      try {
        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe("string");
        const {
          data: { verifyAccountName },
        } = JSON.parse(response.body);
        expect(verifyAccountName).toEqual("Oluwaseyi Tamunomiebi Oladele");
        done();
      } catch (error) {
        done(error);
      }
    };

    server(event, context, callback);
  });
});
