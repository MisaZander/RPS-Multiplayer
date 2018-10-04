var config = {
    apiKey: "AIzaSyBQG61VsAlqf40ck2e1pXKTsOt-fQGh1-o",
    authDomain: "rps-data-f162d.firebaseapp.com",
    databaseURL: "https://rps-data-f162d.firebaseio.com",
    projectId: "rps-data-f162d",
    storageBucket: "rps-data-f162d.appspot.com",
    messagingSenderId: "1044015908466"
  };
  firebase.initializeApp(config);
  var db = firebase.database();
  var ref;

  var player = {
      playerID: 0,
      opponentID: 0,
      totalWins: 0,
      totalLosses: 0,
      wins: 0,
      losses: 0,
      userName: "",
      queue: {
          choice: "",
          taunt: ""
      }
  };

  //enqueue
  $("#enqueue").on("click", function(event) {
    event.preventDefault();  
    var userName = $("#userName").val();
    player.userName = userName;

    //Get latest id
    if(ref == null){
        player.playerID = 1;
        db.ref("users/0").set(player);
    } else {
        player.playerID = ref.users[ref.users.length - 1].playerID + 1;
        db.ref("users/" + ref.users.length).set(player);
    }

    //db.ref("users/" + (ref.users.length - 1)).set(player);

    //db.ref().off("child_added"); */
    $("#userName").val("");    
  });

  db.ref().on("value", function(snapshot) {
    ref = snapshot.val();
    console.log(player);
    console.log(ref);
    
    //Attempt to find an opponent
    if(player.opponentID === 0 && ref != null && player.playerID !== 0) {
        for(let i = 0; i < ref.users.length; i++) {
            //Only match with selected opponent if it isn't you and the opponent is unassigned
            if(ref.users[i].playerID !== player.playerID && ref.users[i].opponentID === 0) {
                //Set your opponent ID equal to that of the selected opponent
                player.opponentID = ref.users[i].playerID;

                //Set the opponent's opponentID equal to your player ID
                db.ref("users/" + i).child("opponentID").set(player.playerID);

                //Find yourself in the database and update your opponent ID
                for(let j = 0; j < ref.users.length; j++){
                    if(ref.users[j].playerID === player.playerID) {
                        db.ref("users/" + j).child("opponentID").set(ref.users[i].playerID);
                        break;
                    }
                }
                break;
            }
        }
    }
  }); //db ref on


  //var users = db.ref("users");
  /*for(let i=0; i<5; i++) {
    let userRef = db.ref("users/" + i);
    let user ={
        playerID: i
    };
    userRef.set(user);
  }*/

  //console.log(ref.users[0].playerID);
