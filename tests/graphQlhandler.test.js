import { server } from "../graphQlHandler";

//  This is a rather naive test to test that the Graphql Server mounts on demand. An additional redundant query "hello" was created for this test.

describe("This test checks that the server mounts", () => {
  const query = `{
    hello(name:  "John")
  }`;
  test("should test the hello Query", (done) => {
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
});
