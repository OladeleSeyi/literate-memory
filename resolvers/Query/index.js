const Query = {
  hello: (_, { name }) => {
    return `Hello ${name}`;
  },
  verifyAccountName: async (_, { bank_code, account_number, account_name }) => {
    return account_name || "Place Holder";
  },
};

export default Query;
