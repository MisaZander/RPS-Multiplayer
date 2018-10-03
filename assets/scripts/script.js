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

    //Get latest id
    /*db.ref().orderByChild("playerID").limitToLast(1).on("child_added", function(snapshot) {
        var playerID = 0;
        if(snapshot == null) {
            playerID = 1;
        } else {
            playerID = snapshot.playerID;
        }

        player.playerID = playerID;
        player.userName = userName;
        db.ref().push(player);
    });

    //db.ref().off("child_added"); */
    $("#enqueue").val("");    
  });

  db.ref().on("value", function(snapshot) {
    ref = snapshot.val();
    console.log(ref);
    console.log(ref.users[0].playerID);
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