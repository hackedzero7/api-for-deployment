const express = require('express');
const {
  registeration,
  login,
  logout,
  getUserDetails,
  getSingleUser,
  getAllUsers,
  updateProfileUser,
  updateUserProfileAdmin,
  deleteUserProfile,
} = require('../controllers/userController');
const { authorizedRole, isAuthenticated } = require('../middleware/auth');

const router = express.Router();

router.route('/register').post(registeration);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/me').get(isAuthenticated, getUserDetails);
router.route('/me/update').put(updateProfileUser);
router.route('/admin/users').get(authorizedRole('admin'), getAllUsers);
router
  .route('/admin/user/:id')
  .get(authorizedRole('admin'), getSingleUser)
  .put(authorizedRole('admin'), updateUserProfileAdmin)
  .delete(authorizedRole('admin'), deleteUserProfile);

module.exports = router;
