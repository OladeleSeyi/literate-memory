const Query = {
  hello: (_, { name }) => {
    return `Hello ${name}`;
  },
};

export default Query;
