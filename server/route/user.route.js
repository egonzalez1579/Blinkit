import { Router } from 'express';
import { registerUserController } from '../controllers/user.controller.js';
import { verifyEmailController } from '../controllers/user.controller.js';
import { loginController } from '../controllers/user.controller.js';
import { logoutController } from '../controllers/user.controller.js';
import auth from '../middleware/auth.js';

const userRouter = Router();

userRouter.post('/register', registerUserController);
userRouter.post('/verify-email', verifyEmailController);
userRouter.post('/login', loginController);
userRouter.get('/logout', auth, logoutController);

export default userRouter;
// The user.route.js file contains the userRouter object, which is an instance of the Express Router. The userRouter object is used to define the routes for user-related operations in the application.
// The userRouter object has a POST route that maps to the registerUserController function from the user.controller.js file. This route is used to register a new user in the application.
// The userRouter object is exported as the default export from the file.
// export default userRouter;
