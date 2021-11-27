import fetchPaystack from "../../utils/fetchPaystack";
import { compareNames, toTitleCase, validateRequest } from "./helperFunctions";

export default async function verifyAccountName(
  _,
  { bank_code, account_number, account_name }
) {
  // TODO: add validation for the BAnk accountnumber and bankcode. Account nuymber should not exceed 10 digits and bank code 3-5 characters that are all numbers.

  // Validate the request

  validateRequest({ bank_code, account_number, account_name });

  // 1. Generate the url for Api Call

  const url = `https://api.paystack.co/bank/resolve?account_number=${account_number}&bank_code=${bank_code}`;

  let userData; // we need this for the try catch  down below

  // 2. Make Api Call and reject if the call fails for whatever reason

  try {
    const { data } = await fetchPaystack(url, "get");

    // check that the account was resolved

    if (data.status) {
      userData = data.data;
    } else {
      throw new Error("The Account not resolved");
    }
  } catch (error) {
    throw new Error("Invalid Information");
  }

  //  3: if the account_name is provided, compare it with the name returned from the Paystack api
  if (account_name) {
    const preferredName = compareNames(account_name, userData.account_name);
    return toTitleCase(preferredName);
  }

  return toTitleCase(userData.account_name);
}
