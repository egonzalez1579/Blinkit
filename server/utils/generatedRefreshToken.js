import UserModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';

const genertedRefreshToken = async (userId) => {
  const token = await jwt.sign(
    { id: userId },
    process.env.SECRET_KEY_REFRESH_TOKEN,
    { expiresIn: '7d' }
  );

  const updateRefreshTokenUser = await UserModel.updateOne(
    { _id: userId },
    {
      refresh_token: token,
    }
  );

  return token;
};
// The generatedRefreshToken.js file exports a function named generatedRefreshToken that takes a userId as an argument.
// The generatedRefreshToken function generates a refresh token using the jwt.sign method from the jsonwebtoken package.
// The refresh token is stored in the refresh_token field of the user document in the database using the updateOne method of the UserModel.
// The generatedRefreshToken function returns the generated refresh token.
export default genertedRefreshToken;
