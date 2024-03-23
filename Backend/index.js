import express from "express";
import cors from 'cors';
import connectDB from "./database.js";
import BankingUsers from './models/BankingModels/users.js'
import { DB_NAME } from "./constants.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to the database
connectDB();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
function generateRandomNumber() {
  return Math.floor(100 + Math.random() * 900); // Generates a random number between 100 and 999
}

app.post("/signup", async (req, res) => {
  const { name, email, password, cpass, pancardNum, mobileNum } = req.body;
  // const firstName = name.split(' ')[0];
  const fullName = name.replace(/\s+/g, ''); // Remove all spaces and convert to lowercase
  const finalName=fullName.toLowerCase()
  const userId=finalName+"@sky"+generateRandomNumber()
  const existingUser = await BankingUsers.findOne({ $or: [{ email: email }, { mobileNum: mobileNum }] });
  if (existingUser) {
    return res.status(400).json({ message: "PRESENT" });
  }
  else {
    try {
      if (password === cpass) {
        const user = await BankingUsers.create({
          userId:userId,
          name: name,
          email: email,
          password: password,
          pancardNum: pancardNum,
          mobileNum: mobileNum
        });
        console.log("Inserted", user);

        res.status(200).json({ message: "SUCCESS" });
      }
      else {
        return res.status(202).json({ message: "NOTMATCH" });
      }
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Error creating user" });
    }
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await BankingUsers.findOne({ email: email })
  if (!user) {
    return res.status(202).json({ message: "NOTMATCH" });
  }

  const check = await BankingUsers.findOne({
    email: req.body.email,
    password: req.body.password

  });

  if(check){
    return res.status(200).json({message:"SUCCESS"})
  }
  else{
    return res.status(202).json({ message: "NOTMATCH" });
  }
})

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
