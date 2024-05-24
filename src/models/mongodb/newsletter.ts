import mongoose, { Schema, Document, Model } from "mongoose";

interface INewsletter extends Document {
  email: string;
}

const newsletterSchema = new Schema<INewsletter>(
  {
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    collection: "newsletter",
  }
);

const Newsletter: Model<INewsletter> =
  mongoose.models.Newsletter ||
  mongoose.model<INewsletter>("Newsletter", newsletterSchema);

export default Newsletter;
