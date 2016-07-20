$(document).ready(function() {
    var users = [
            "OgamingSC2",
            "ESL_SC2",
            "TR7K",
            "sheevergaming",
            "cretetion",
            "FreeCodeCamp",
            "storbeck",
            "terakilobyte",
            "habathcx",
            "RobotCaleb",
            "Beohoff",
            "brunofin",
            "comster404",
            "Test_channel",
            "thomasballinger",
            "noobs2ninjas"];
    var url = "https://api.twitch.tv/kraken/streams/";
    var game;
    console.log(users.length);

    for(var i=0;i<15;i++) {
        var account = users[i];
        $.getJSON(url + users[i], function(status) {
           // console.log(status.stream._id);

            if (!status.stream) {
                game = "offline";
                $(".streamer").after("" +
                    "<div class=\"streamer\">" +
                        "<div class=\"profilePic\"></div>" +
                         "<div class=\"profileName\"><p>" + account + "</p></div>" +
                        "<div class=\"profileStatus\"><p>" + game + "</p></div>" +
                    "</div>");
                }


            if (status.stream) {
                game = status.stream.game;
                $(".streamer").after("" +
                    "<div class=\"streamer\">" +
                        "<div class=\"profilePic\"></div>" +
                        "<div class=\"profileName\"><p>" + account + "</p></div>" +
                        "<div class=\"profileStatus\"><p>" + game + "</p></div>" +
                    "</div>");
                }

            });
        }
});

