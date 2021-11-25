const schema = {
  schema: `
  type Query {
    hello(name: String!): String!
    verifyAccountName(bank_code: String!, account_number: String!, account_name: String): String!
  }
  
  type Mutation {
    verifyBankAccountNumber(
      user_account_number: String!
      user_bank_code: String!
      user_account_name: String!
    ): String!
  }`,
};

export default schema;
