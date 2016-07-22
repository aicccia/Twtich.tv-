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
    var game, preview;

    for(var i=0;i<15;i++) {

        (function () {
            var account = users[i];
            $.getJSON(url + users[i], function (status) {
                // console.log(status.stream._id);


                if (!status.stream) {
                    game = "offline";
                    $(".seperator").after("" +
                        "<div class=\"streamer offline\">" +
                            "<div class=\"profilePic\"></div>" +
                            "<div class=\"profileName\"><p>" + account + "</p></div>" +
                            "<div class=\"profileStatus\"><p>" + game + "</p></div>" +
                        "</div>");
                }


                if (status.stream) {
                    game = status.stream.game;
                    var pic = status.stream._links.preview.small;
                    console.log(pic);

                    $("header").after("" +
                        "<div class=\"streamer online\">" +
                            "<div class=\"profilePic\"><img src=pic></div>" +
                            "<div class=\"profileName\"><p>" + account + "</p></div>" +
                            "<div class=\"profileStatus\"><p>" + game + "</p></div>" +
                        "</div>");
                }

            });
        })();
        }
});

