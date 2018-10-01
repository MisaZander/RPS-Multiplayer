var config = {
    apiKey: "AIzaSyB8jczk1GT1gdFb9aSHTnjjj9hhSkIjkWw",
    authDomain: "prestige-worldwide-a240f.firebaseapp.com",
    databaseURL: "https://prestige-worldwide-a240f.firebaseio.com",
    projectId: "prestige-worldwide-a240f",
    storageBucket: "prestige-worldwide-a240f.appspot.com",
    messagingSenderId: "797630564219"
};
firebase.initializeApp(config);
var db = firebase.database();

var names = ["Jasper", "Terrence", "Ignacious"];
var ages = [12, 13, 14];

// for(let i = 0; i < names.length; i++) {
//     let object = {
//         name: names[i],
//         age: ages[i]
//     };
//     db.ref().push(object);
// }

db.ref().on("value", function(snapshot) {
    //console.log(snapshot.val());
    let ref = snapshot.val();
    for(let key in ref ){
        console.log("Name: " + ref[key].name + "; Age: " + ref[key].age);
    }
});