import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db.js';
import products from './data/products.js';
import users from './data/users.js';

import Order from './models/orderModel.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Deleting
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // User inserted
    const createdUsers = await User.insertMany(users);

    // Get the admin
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log('Data imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // Deleting
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

/*
console.log(process.argv);

If we run this like => node backend/seeder -d
We get =>
[
  'E\\Program Files\\nodejs\\node.exe',
  'E:\\Users\\Admin\\Downloads\\MERN shopvibe\\backend\\seeder',
  '-d'
]

The script is designed to seed a database with sample data or destroy all existing data in the database, depending on the command-line argument provided.
*/
