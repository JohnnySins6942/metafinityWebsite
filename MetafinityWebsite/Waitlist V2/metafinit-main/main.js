

const firebaseConfig = {
  apiKey: "AIzaSyAtGTn5KHGZE3HmUZMro_eH_8i-EqF06FM",
  authDomain: "metaverse-project-v1.firebaseapp.com",
  projectId: "metaverse-project-v1",
  storageBucket: "metaverse-project-v1.appspot.com",
  messagingSenderId: "717668462434",
  appId: "1:717668462434:web:e6e798c7aed39bf05bc63b",
  measurementId: "G-WK71ZZDEEH"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function addEmail(){

var emailInput = document.getElementById('email').value;
if(emailInput === "" || emailInput === null || emailInput === " ")
{
  document.getElementById("status").innerHTML = "You need to input a email!";
}
else{
const emailRef = db.collection('emails').doc(emailInput);

const doc = await emailRef.get();
if (!doc.exists) {
   var data = {
   timeSetup : new Date()
 }

 const res = await db.collection('emails').doc(emailInput).set(data).then(function() {
   document.getElementById("status").innerHTML = "Thanks for joining our mailing list. You'll be notified when new updates or launches happen";
   document.getElementById("info").style.display="none";
   document.getElementById("submit").style.display="none";
   document.getElementById("email").style.display="none";
   document.getElementById("label").style.display="none";
   document.getElementById("return").style.display="block";

 });
}
else{
  document.getElementById("status").innerHTML = "It seems you have already joined our waiting list.";
  document.getElementById("info").style.display="none";
  document.getElementById("submit").style.display="none";
  document.getElementById("email").style.display="none";
  document.getElementById("label").style.display="none";
  document.getElementById("return").style.display="block";
}
}
}
function openModal(){
  if(  document.getElementById("infoModal").style.display==="block"){
    document.getElementById("infoModal").style.display="none";
    console.log("yes")
  }
  else{
  document.getElementById("infoModal").style.display="block";
  }

}





