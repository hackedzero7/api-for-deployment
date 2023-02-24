const express = require('express');
const {
  createProperty,
  getAdminALLProperty,
  getAllProperties,
  getPropertyDetails,
  updateProperties,
  deleteProperty,
  incrementVeiws,
  addToFavraite,
  removeToFavorites,
  intrustedUser,
  reciveMessageFromUser,
  getPropertiesByOwner,
} = require('../controllers/propertyController');
const { isAuthenticated, authorizedRole } = require('../middleware/auth');
const router = express.Router();

router.route('/property/create').post(createProperty);
router.route('/properties').get(getAllProperties);
router.route('/property/:id').get(getPropertyDetails);
router.route('/property/:id/favorites').post(addToFavraite).delete(removeToFavorites);
router.route('/property/:id/interusted-user').get(reciveMessageFromUser);
router.route('/property/:id/views').patch(incrementVeiws);
router.route('/property/update/:id').put(authorizedRole('admin', 'user'), updateProperties);
router.route('/property/delete/:id').delete(authorizedRole('admin', 'user'), deleteProperty);
router.route('/admin/properties').get(authorizedRole('admin'), getAdminALLProperty);
router.route('/property-owner/:id').get(authorizedRole('user'), getPropertiesByOwner);

module.exports = router;
