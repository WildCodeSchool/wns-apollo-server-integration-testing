import mongoose from 'mongoose';

interface WilderData {
  _id: string;
  name: string;
  city: string;
  skills: { _id: string; title: string; votes: number }[];
}

const { Schema } = mongoose;
const WilderSchema = new Schema<WilderData>({
  name: { type: String, unique: true },
  city: String,
  skills: [{ title: String, votes: Number }],
});

export default mongoose.model<WilderData>('wilder', WilderSchema);
