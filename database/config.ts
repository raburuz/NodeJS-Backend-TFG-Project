import mongoose from 'mongoose';

export const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION || '');
    console.log('Database Online');
  } catch (error) {
    throw new Error(
      'Error on Database Application, Please Contact with Admin '
    );
  }
};
