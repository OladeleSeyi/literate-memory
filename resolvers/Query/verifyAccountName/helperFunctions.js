import Joi from "joi";

// This returns the providedName if the resolvedName (Name from api) is different from the provided name and the providedNmae if they are the same.
export function compareNames(providedName, resolvedName) {
  providedName = providedName.toLowerCase();
  resolvedName = resolvedName.toLowerCase();

  if (providedName === resolvedName) return providedName;
  if (providedName !== resolvedName) return providedName;
}

// This capitalizes the firstletter of each word in a sentence.
// First split the sentence into substrings[]
// Map through [] and replace the first letter with caps
// Join the substrings
export function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");
}

const schema = Joi.object({
  bank_code: Joi.string().alphanum().length(3).required(),
  account_number: Joi.string().alphanum().length(10).required(),
  account_name: Joi.string(),
});

// validator function for verify account name

export function validateRequest(obj) {
  try {
    let isValid = schema.validate(obj);
    if (isValid.error) {
      throw isValid.error;
    }
    return isValid;
  } catch (e) {
    throw e;
  }
}
