import mongoose from 'mongoose';

async function createConnection(uri: string) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      autoIndex: true,
    });
    // eslint-disable-next-line no-console
    console.log('Connected to database');
  } catch (err: unknown) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export default createConnection;
