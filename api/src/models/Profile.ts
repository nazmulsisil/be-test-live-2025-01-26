import { Schema, model, Document, Types } from "mongoose";

export interface IProfile extends Document {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  age: number;
  userId: Types.ObjectId;
}

const profileSchema = new Schema<IProfile>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default model<IProfile>("Profile", profileSchema);
