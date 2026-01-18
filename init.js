const mongoose=require("mongoose");
const Chat = require("./models/chat.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatsapp");
}

main()
 .then(() => {
     console.log("Connection successful");
 })
 .catch((err) => console.log(err));

const sampleChats = [
  {
    from: "neha",
    to: "priya",
    msg: "Hey! How are you?",
    created_at: new Date()
  },
  {
    from: "rahul",
    to: "amit",
    msg: "Are you coming today?",
    created_at: new Date()
  },
  {
    from: "sneha",
    to: "arjun",
    msg: "Meeting postponed.",
    created_at: new Date()
  },
  {
    from: "priya",
    to: "neha",
    msg: "I am good",
    created_at: new Date()
  },
  {
    from: "amit",
    to: "rahul",
    msg: "Yes, see you at 6.",
    created_at: new Date()
  },

  // 🔽 Additional random chats
  {
    from: "rohit",
    to: "vikas",
    msg: "Did you complete the task?",
    created_at: new Date()
  },
  {
    from: "vikas",
    to: "rohit",
    msg: "Almost done, will update soon.",
    created_at: new Date()
  },
  {
    from: "anjali",
    to: "kiran",
    msg: "Let's meet after class.",
    created_at: new Date()
  },
  {
    from: "kiran",
    to: "anjali",
    msg: "Sure, near the library?",
    created_at: new Date()
  },
  {
    from: "arjun",
    to: "sneha",
    msg: "Thanks for the update.",
    created_at: new Date()
  },
  {
    from: "mehul",
    to: "ravi",
    msg: "Project deadline extended!",
    created_at: new Date()
  },
  {
    from: "ravi",
    to: "mehul",
    msg: "Great news",
    created_at: new Date()
  },
  {
    from: "pooja",
    to: "nisha",
    msg: "Can you send the notes?",
    created_at: new Date()
  },
  {
    from: "nisha",
    to: "pooja",
    msg: "Sending in 5 minutes.",
    created_at: new Date()
  },
  {
    from: "deepak",
    to: "akash",
    msg: "Movie tonight?",
    created_at: new Date()
  },
  {
    from: "akash",
    to: "deepak",
    msg: "Yes! 9 PM works.",
    created_at: new Date()
  }
];

Chat.insertMany(sampleChats)
  .then((res) => {
    console.log("Chats inserted successfully");
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
