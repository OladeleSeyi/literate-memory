/*  Verify bank account number should ideally be in a directory with the same name. However because of the size of this project. Two operations altogether this will be done in the main mutation file for easy readability. */

import fetchPaystack from "../utils/fetchPaystack";
import { computeEditDistance } from "./verifyBankAccountNumber/helperFunctions";

const Mutation = {
  verifyBankAccountNumber: async (
    _,
    { user_account_number, user_bank_code, user_account_name },
    ctx
  ) => {
    // 1 Retrieve the values from the request. They have been destructured.

    // 2: Write validation

    // 3: make the request Url

    const url = `https://api.paystack.co/bank/resolve?account_number=${user_account_number}&bank_code=${user_bank_code}`;

    let userData;
    // 4: Make a call to the paystack Resolve Account Number endpoint using the url above on fetch paystack and destructure off the axios response
    try {
      const { data } = await fetchPaystack(url, "get");
      userData = data;
    } catch (error) {
      throw new Error("Invalid Information");
    }

    // Compute the Levenshtein Distance

    const distance = computeEditDistance(
      user_account_name,
      userData.data.account_name
    );

    // If the distance is greater than 2 then fail
    if (distance) {
      //  Perform user update here
      return user_account_name;
    } else {
      throw new Error("The user is unverified");
    }
  },
};

export default Mutation;
