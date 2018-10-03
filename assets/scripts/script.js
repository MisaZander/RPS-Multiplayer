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
    let userName = $("#userName").val();
    //userName = "Cockus Blackamus";
    player.userName = userName;
    db.ref().push(player);
  });

  db.ref().on("value", function(snapshot) {
    ref = snapshot.val();
    console.log(ref);
  }); //db ref on

