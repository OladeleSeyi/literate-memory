/*  Verify bank account number should ideally be in a directory with the same name. However because of the size of this project. Two operations altogether this will be done in the main mutation file for easy readability. */

const Mutation = {
  verifyBankAccountNumber: (
    _,
    { user_account_number, user_bank_code, user_account_name },
    ctx
  ) => {
    return user_account_name;
  },
};

export default Mutation;
