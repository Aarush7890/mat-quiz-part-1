function addUser(){
    var player_1name= document.getElementById("player1_name_input").value;
    var player_2name= document.getElementById("player2_name_input").value;   
    localStorage.setItem("player_1name",player_1name);
    localStorage.setItem("player_2name",player_2name);
    window.location="game.html";
    }
