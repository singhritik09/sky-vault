import express, { response } from "express";
import cors from 'cors';
import connectDB from "./database.js";
import BankingUsers from './models/BankingModels/users.js';
import Loan from "./models/BankingModels/loan.js";
import Employees from "./models/BankingModels/employee.js";
import ApprovedLoan from "./models/BankingModels/approved.js";
import Transactions from "./models/BankingModels/transactions.js";
import UserTransaction from "./models/BankingModels/userTransactions.js";
import Bonds from "./models/BankingModels/bonds.js";
import BondsOrder from "./models/BankingModels/bondOrders.js";

// import { authenticateEmployee } from './middlewares/employeeLogin.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
function generateRandomNumber() {
  return Math.floor(100 + Math.random() * 900);
}
function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  return dd + '/' + mm + '/' + yyyy;
}

async function fetchUserName(email) {
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  });

  const data = await response.json();
  if (data.message === "SUCCESS") {
    return data.name;
  } else {
    return null;
  }
}
function generateLoanId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let loanId = '';

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    loanId += characters[randomIndex];
  }

  return loanId;
}

function calculateAmountPerMonth(amount, time, interestRate) {
  const monthlyInterestRate = (interestRate / 100) / 12;

  const numberOfMonths = time * 12;
  const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths));

  return monthlyPayment.toFixed(2);
}

app.post("/signup", async (req, res) => {
  const { name, email, password, cpass, pancardNum, mobileNum } = req.body;
  const fullName = name.replace(/\s+/g, ''); // Remove all spaces and convert to lowercase
  const finalName = fullName.toLowerCase()
  const userId = finalName + "@sky" + generateRandomNumber()
  const existingUser = await BankingUsers.findOne({ $or: [{ email: email }, { mobileNum: mobileNum }] });
  if (existingUser) {
    return res.status(400).json({ message: "PRESENT" });
  }
  else {
    try {
      if (password === cpass) {
        const user = await BankingUsers.create({
          userId: userId,
          name: "John Doe",
          email: email,
          password: password,
          pancardNum: pancardNum,
          mobileNum: mobileNum,
        });
        console.log("Inserted", user);
        const name = user.name;
        res.status(200).json({ message: "SUCCESS", name: name });
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
  console.log(check)
  const name = user.name;
  if (check) {
    return res.status(200).json({ message: "SUCCESS", name: name })
  }
  else {
    return res.status(202).json({ message: "NOTMATCH" });
  }
})

app.post("/employee-login", async (req, res) => {
  const { employeeId, password } = req.body;
  
  try {
    const employee = await Employees.findOne({ employeeId: employeeId });
    console.log(employee)
    if (!employee) {
      return res.status(202).json({ message: "NOTMATCH" });
    }
    if (employee.password === password) {
      return res.status(200).json({ message: "SUCCESS" });
    } else {
      return res.status(202).json({ message: "NOTMATCH" });
    }
  } catch (error) {
    console.error("Error during employee login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/loan", async (req, res) => {
  const { amount, time, dateOfBirth, pancardNum } = req.body
  const user = await BankingUsers.findOne({ pancardNum: pancardNum })
  if (!user) {
    return res.status(202).json({ message: "CREATE" })
  }

  if (amount < 20000) {
    return res.status(400).json({ message: "Low amount" })
  }
  const loanId = generateLoanId();
  const userId = user.userId;
  const interest = 10;
  const amountPermonth = calculateAmountPerMonth(amount, time, interest);

  const issueDate = getCurrentDate();
  const returnDate = "24/03/2024";
  const returned = false;
  const mobileNum = user.mobileNum;
  const loan = await Loan.create({
    loanId: loanId,
    userId: userId,
    pancardNum: pancardNum,
    amount: amount,
    interest: interest,
    amountPermonth: amountPermonth,
    issueDate: issueDate,
    returnDate: returnDate,
    returned: returned,
    mobileNum: mobileNum,
    approved:false
  })
  console.log("Loan application submitted ", loan)
  return res.status(200).json({ message: "SUCCESS" })

})

app.get("/loan-applications", async (req, res) => {
  try {
    const response = await Loan.find({});
    console.log(response);
    return res.send(response);
  } catch (error) {
    console.error("Error fetching loans:", error);
    return res.status(500).send("Internal Server Error");
  }
})

app.post("/loan-applications", async (req, res) => {
  const approve = req.body.approve;
  const loanId = req.body.loanId;
  console.log(approve);
  console.log(loanId);
  try {
    const loan = await Loan.findOne({ loanId: loanId });

    if (!loan) {
      return res.status(404).send("Loan not found");
    }
    loan.approved = approve;
    await loan.save();
    if (approve) {
      const approvedLoan = await ApprovedLoan.create({
          loanId: loan.loanId,
          userId: loan.userId,
          pancardNum: loan.pancardNum,
          amount: loan.amount,
          interest: loan.interest,
          amountPermonth: loan.amountPermonth,
          issueDate: loan.issueDate,
          returnDate: loan.returnDate,
          returned: loan.returned,
          mobileNum: loan.mobileNum,
          approved:loan.approved
      });
  }
  await loan.deleteOne();
    // console.log("Approval status updated:", approve, "for loanId:", loanId);
    res.send("Approval status updated");
  } catch (error) {
    console.error("Error updating approval status:", error);
    res.status(500).send("Internal Server Error");
  }
})

app.post("/transaction", async(req, res) => {
  const { amount, senderId, receiverId, password } = req.body;

  const sender = await BankingUsers.findOne({ userId: senderId });
  const receiver = await BankingUsers.findOne({ userId: receiverId });
  const transactionAmount = parseFloat(amount);

  if (!sender || !receiver) {
    return res.status(202).json({ message: "NOTEXIST" });
  }
  if (sender.password !== password) {
    return res.status(202).json({ message: "NOTMATCH" });
  } else if (senderId === receiverId) {
    return res.status(202).json({ message: "IDMATCH" });
  } else if (amount > sender.balance) {
    return res.status(202).json({ message: "EXCEEDED" });
  } else {
    const datetime = new Date();
    const uid = generateLoanId();

    const senderTransaction = {
      transactionId: uid,
      userId: senderId,
      receiverId: receiverId,
      amount: -transactionAmount, // Negative amount for debiting sender's account
      debit: true,
      time: datetime
    };

    const receiverTransaction = {
      transactionId: uid,
      userId: receiverId,
      receiverId: senderId,
      amount: transactionAmount,
      credit: true,
      time: datetime
    };

    sender.balance -= transactionAmount;
    receiver.balance += transactionAmount;

    sender.transactionHistory.push(senderTransaction);
    receiver.transactionHistory.push(receiverTransaction);

    const transaction= await Transactions.create({
      transactionId:generateLoanId(),
      amount:transactionAmount,
      senderId:senderId,
      receiverId:receiverId,
      time:datetime
    })


    await sender.save();
    await receiver.save();

    console.log(transaction);
    return res.status(200).json({ message: "SUCCESS" });
  }
});


app.get("/bonds",async(req,res)=>{
  const data=await Bonds.find({});
  res.send(data);
})

app.post("/bonds",async(req,res)=>{
  const {bondId,quantity}=req.body;
  const bond=await Bonds.findOne({bondId:bondId})
  const transactionAmount = parseInt(bond.price);
  const total=transactionAmount*quantity;

  try{
    const newTransaction = await BondsOrder.create({
      bondId:bondId,
      bondName:bond.bondName,
      price:bond.price,
      interest:bond.interest,
      totalAmount:total
    })
    console.log(newTransaction);
  }
  catch(e){
    console.log("Error:",e)
  }
  return res.status(200).json({message:"SUCCESS"});
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
