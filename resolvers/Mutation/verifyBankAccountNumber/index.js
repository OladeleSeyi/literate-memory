import * as dynamoDbLib from "../../utils/dynamoDBLib";
import fetchPaystack from "../../utils/fetchPaystack";
import { computeEditDistance, validateRequest } from "./helperFunctions";

export default async function verifyBankAccountNumber(
  _,
  { user_account_number, user_bank_code, user_account_name },
  ctx
) {
  // 1 Retrieve the values from the request. They have been destructured.

  // 2: Write validation

  validateRequest({
    user_account_number,
    user_bank_code,
    user_account_name,
  });

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
  /* This storage implementation is flawed because the userID should be picked of the auth token i.e. the userId should exist before the mutation is called. however for "storage" sake we must create an arbitrary userId to associate with the user in storage. An ideal implementation will also need to check to be sure that the user doesn't make two (discrete and  dissociated) verification requests. A safe and silly implementation would be to concatenate the bankAccountNumber and bankcode. This way there will be fewer dud verifications for non existent users. The limitation being a new "user" is created evertime the user chooses a different bank account.Needless to say, this storage implementation is just for "show and tell purposes" and will definitely not work in real life.
   */

  // TODO
  let params = {
    TableName:
      process.env.NODE_ENV === "test"
        ? process.env.TEST_DB
        : process.env.bankAccountTable,
    Item: {
      userId: user_account_number + user_bank_code,
      user_account_number,
      user_bank_code,
      user_account_name,
    },
  };

  // If the distance is greater than 2 then fail
  if (distance) {
    //  Perform user update here
    // USE A put request to update  current user bank related data or update it.
    params.Item.isVerified = "true";
    await dynamoDbLib.call("put", params);
    return user_account_name;
  } else {
    throw new Error("The user is unverified");
  }
}
