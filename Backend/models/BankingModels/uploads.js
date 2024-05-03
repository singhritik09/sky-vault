import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  filename: String,
  data: Buffer // Storing file data as Buffer
});

const File = mongoose.model('upload', fileSchema);

export default File;
