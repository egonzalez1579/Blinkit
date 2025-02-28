import jwt from 'jsonwebtoken';

const generatedAccessToken = async (userId) => {
  const token = await jwt.sign(
    { id: userId },
    process.env.SECRET_KEY_ACCESS_TOKEN,
    { expiresIn: '5h' }
  );

  return token;
};

// The generatedAccessToken.js file exports a function named generatedAccessToken that takes a userId as an argument.
// The generatedAccessToken function generates an access token using the jwt.sign method from the jsonwebtoken package.
export default generatedAccessToken;
