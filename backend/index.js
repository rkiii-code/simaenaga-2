const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require('cors');
const bcrypt = require('bcrypt');
const fileUpload = require("express-fileupload");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const {jwtDecode} = require('jwt-decode');
const exp = require("constants");

const app = express();
const port = 3000;
const prisma = new PrismaClient();


app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use('/uploadIcon',express.static(__dirname+ '/uploadIcon'));
app.use('/uploadImage', express.static(__dirname + '/uploadImage'));
app.use('/uploadVideo', express.static(__dirname + '/uploadVideo'));
dotenv.config();

function generateAccessToken(id) {
  return jwt.sign(id, process.env.TOKEN_SECRET, { expiresIn: '2h' });
}
app.get("/",(req,res)=>{
  res.send("接続できました");
})
app.get("/allUser",async (req,res)=>{
  const list = await prisma.user.findMany({

  })
  res.send(list);
})

app.get('/forum-new',async(req,res)=>{
  const list = await prisma.handsign.findMany({
    orderBy:{
      time: 'desc'
    },
  });
  res.send(list);
})

app.get('/forum-popu',async(req,res)=>{
  const list = await prisma.handsign.findMany({
    orderBy:{
      fav: 'desc'
    },
  });
  res.send(list);
})

app.post('/user',async(req,res)=>{
  const img = req.body.image;
  res.sendFile(img);
})

app.post('/hand', async (req, res) => {
  try {
    const now =Date.now()
    const decoded = jwtDecode(req.body.token);
    //写真（サムネイル）投稿
    const imageFile = req.files.handSignImage;
    const uploadPathImage = __dirname+"\\uploadImage\\"+decoded.id.replace(/_/g, '')+now+".png";
    
    // ファイルを保存
    await imageFile.mv(uploadPathImage, function(err){
      if (err) {
        return res.status(500).send(err);
      }
    });
    //
    const videoFile = req.files.handSignVideo;
    const uploadPathVideo = __dirname+"\\uploadVideo\\"+decoded.id.replace(/_/g, '')+now+".npy";
    // ファイルを保存
    await videoFile.mv(uploadPathVideo, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });
    
    console.log(decoded.id,":",req.body);
    await prisma.handsign.create({
      data:{
        userId: decoded.id,
        title: req.body.handSignName,
        body: req.body.detail,
        hashtag1: req.body.hashTag1,
        hashtag2: req.body.hashTag2,
        hashtag3: req.body.hashTag3,
        hashtag4: req.body.hashTag4,
        image:  decoded.id.replace(/_/g, '')+now+".png",
        video: decoded.id.replace(/_/g, '')+now+".npy",
        fav: 0
      }
    });
  }catch(err){
    console.log("出来ません")
    res.status(500).send(err);
  }
  
});

app.post("/sign-up-valid", async (req, res) => {
  const { name, id, gender,password, passwordConfirm } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    });

    if (user) {
      // ユーザーが見つかった場合
      return res.json({ valid: false, message: "このIDは既に使用されています" });
    } else {
      // ユーザーが見つからなかった場合
      return res.json({ valid: true, message: "このIDは使用されていません" });;
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/sign-up", async (req, res) => {
  const { name, id, gender, password ,passwordConfirm} = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        id: id
      }
    });

    if (existingUser) {
      return res.status(400).json({ error: "このIDは既に使用されています" });
    }

    let hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name: name,
        id: id,
        gender: gender,
        password: hashedPassword,
      }
    });
    const token = generateAccessToken({ id: req.body.id });
    return res.json({
      "valid":true,
      "message":"せいこうしたよ！",
      "token":token
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/login",async(req,res) => {
  try{
    const { id, password} = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    });
    const compare = await bcrypt.compare(password,user.password);
    if(compare){
      let time = Date.now();
      let today = Date(time);
      console.log(today);
      console.log("ログイン成功: "+user.id+"\n"+today);
      const token = generateAccessToken({ id: req.body.id });
      return(res.json({
        "valid":true,
        "message":"せいこうしたよ！",
        "token":token
      }))
    }else{
      return(res.json({
        "valid": false,
        "message":"やりなおせ！！",
        "token":null
      }))
    }
  }catch(error){
    console.error(error);
    return res.json({
      "valid": false,
      "message": "サーバーエラーが発生しました"
    });
  }
})

app.post('/jwt',(req,res) =>{
  const decoded = jwtDecode(req.body.token);
  res.json(decoded.id);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});