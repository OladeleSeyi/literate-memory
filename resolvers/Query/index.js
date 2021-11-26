import verifyAccountName from "./verifyAccountName";

const Query = {
  hello: (_, { name }) => {
    return `Hello ${name}`;
  },
  verifyAccountName,
};

export default Query;
