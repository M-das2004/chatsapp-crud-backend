const express = require('express');
const app = express();
const path=require("path");
const mongoose=require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride=require("method-override");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");


main()
 .then(() => {
     console.log("Connection successful");
 })
 .catch((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatsapp");
}

//let chat1 = new Chat({
//    from: "neha",
//    to:"priya",
//    msg:"Hi",
//    created_at: new Date(),
//});
//
//chat1.save().then((res) => {
//    console.log(res);
//});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/chats", async (req, res) => {
    let chats=await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/chats",(req,res) => {
    let { from, to, msg}=req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat.save().then((res) => {
        console.log("Chat saved");
    })
    .catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
    let { id }=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
    let { id }=req.params;
    let { msg:newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg:newMsg },
        { runValidators: true, new: true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
    let { id }=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});