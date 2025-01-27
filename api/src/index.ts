import mongoose from "mongoose";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import User from "./models/User";
import Profile from "./models/Profile";

const app = express();
app.use(bodyParser.json());

app.post("/signup", async (req: Request, res: Response) => {
  const {
    email,
    password,
    //  firstName,
    //   lastName,
    //    age
  } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Email is required" });
    return;
  }

  try {
    const user = new User({
      email,
      password,
    });

    await user.save();
    res.status(200).json({
      message: "Sign-up successful. Verification email will be sent.",
    });
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: process.env.DB_NAME,
    });
    console.log("\n".repeat(1));
    console.log("=".repeat(46));
    console.log("🚀🚀🚀 Connected to MongoDB");
    console.log(`Publisher Service running on port ${PORT}`);
    console.log("\n".repeat(1));
    console.log("=".repeat(46));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
