# Buycoins Engineering Challenge

### WHY IS THE PURE LEVENSHTEIN DISTANCE ALGORITHM IS MORE EFFECTIVE DAMERAU-LEVENSHTEIN ALGORITHM

---

The pure levenshtein algorithm is SHOULD be more effective than the Damerau-Levenshtein in this particular scenario because of how the errors we are trying to accomodate occur. These errors would most likely occur as a result of the data input personnel at banks omitting characters when misspelling user names. Transpositions may not find as lot of relevance in these scenarios.

### ABOUT

This is a simple solution to the [Buycoins Engineering Challenge](https://helicarrier.notion.site/Buycoins-Engineering-Challenge-a906753db59d4bf28fcd127798eadba7)

This Project extends the serverless stack Node Js Starter and GraphQL yoga and is hosted on [AWS](https://ovmnah49nd.execute-api.us-east-1.amazonaws.com/dev/graphiql)

### Running The Server Locally

This solution is heavily dependent on Serverless. As such you would have to have it installed on your machine to begin.

`npm install serverless -g`

Clone the repo and run `npm i`

Then run `serverless offline start` to begin.

Per instructions you can find the Playground interface at the `localhost:3000/graphiql`

## Testing

You can run the tests by running `npm run test`. Ensure your machine is connected to the internet.

### End to End Tests

- A single end tyo end test ensures the server mounts.

### Limitations

- This solution uses a helper functions in a single file for each of its resolvers to handle logic. Ideally these should all be in seperate files.

- THe tests make real HTTP requests instead of mocks. This was to ensure that Tests will with any changes made to the third party api. These tests may fail if you are on a slow internet connection.
- Testing was done with the developers account number.
