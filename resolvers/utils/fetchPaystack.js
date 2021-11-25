import axios from "axios";
/*

Retrieve data from the Pasystack api. Just setup your url and provide an options object and fire away. This will pick the secret key neccessary for this request from env at PAYSTACK_SK so make sure to set it up. Thsis takes either post or get requests.

*/
export default async function fetchPaystack(url, action, options, data = null) {
  // axios[action](params).promise()
  try {
    // fire of the request without the data object if its a get request

    if (data) {
      console.log("dta object");
      return axios[action](url, data, {
        ...options,
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SK}`,
        },
      });
    }
    // fire if there is no data object
    return axios[action](url, {
      ...options,
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SK}`,
      },
    });
  } catch (e) {
    // Pick up the error and handle it higher up the stack
    throw new Error("An error occured with Paystack");
  }
}
