import { Router } from 'express';
import {
  forgotPasswordController,
  loginController,
  logoutController,
  refreshToken,
  registerUserController,
  resetpassword,
  updateUserDetails,
  uploadAvatar,
  userDetails,
  verifyEmailController,
  verifyForgotPasswordOtp,
} from '../controllers/user.controller.js';
import { registerUserController } from '../controllers/user.controller.js';

userRouter.post('/register', registerUserController);

export default userRouter;
// The user.route.js file contains the userRouter object, which is an instance of the Express Router. The userRouter object is used to define the routes for user-related operations in the application.
// The userRouter object has a POST route that maps to the registerUserController function from the user.controller.js file. This route is used to register a new user in the application.
// The userRouter object is exported as the default export from the file.
// export default userRouter;
