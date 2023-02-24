const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Select Status', 'For Rent', 'For Sale'],
  },
  type: {
    type: String,
    enum: ['Apartment', 'Villas', 'Commercial', 'Offices', 'Garage'],
  },
  price: {
    type: Number,
  },
  area: {
    type: String,
  },
  bedrooms: {
    type: Number,
    enum: ['1', '2', '3', '4', '5'],
  },
  bathrooms: {
    type: Number,
    enum: ['1', '2', '3', '4', '5'],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  location: {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },
  },
  detailedInformation: {
    description: {
      type: String,
    },
    builtYears: {
      type: Number,
      enum: ['2018', '2019', '2020', '2021', '2022'],
    },
    garage: {
      type: Number,
    },
    rooms: {
      type: Number,
    },
    amenities: {
      type: [String],
      enum: [
        'AirConditioning',
        'Barbeque',
        'Dryer',
        'Gym',
        'Laundry',
        'Lawn',
        'Microwave',
        'OutdoorShower',
        'Refrigerator',
        'Sauna',
        'SwimmingPool',
        'TVCable',
        'Washer',
        'WiFi',
        'WindowCover',
      ],
    },
  },
  contactInformation: {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  interustedUsers: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'InterustedUser',
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    //
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Property', schema);
