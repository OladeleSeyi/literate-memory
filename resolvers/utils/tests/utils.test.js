import fetchPaystack from "../fetchPaystack";

//
describe("Test all the utility functions", () => {
  test("should test that the Paystack Api Address has not changed", async (done) => {
    const req = await fetchPaystack("https://api.paystack.co/", "get");
    expect(req.data.status).toEqual(true);
    done();
  });
});
