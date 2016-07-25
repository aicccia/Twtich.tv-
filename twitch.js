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
            "noobs2ninjas",
            "comster404",
            "brunofin"];

    var url = "https://api.twitch.tv/kraken/streams/";
    var game, preview;

    for(var i=0;i<15;i++) {

        (function () {
            var account = users[i];
            $.getJSON(url + users[i], function (status) {

                if (status.stream) {
                    game = status.stream.game;
                    preview = status.stream.channel.logo;

                    $("header").after("" +
                        "<a href=\"https://www.twitch.tv/"+ account +"\">" +
                            "<div class=\"streamer online\">" +
                                "<div class=\"profilePic\"><img src=" + preview + "></div>" +
                                "<div class=\"profileName\"><p>" + account + "</p></div>" +
                                "<div class=\"profileStatus\"><p>" + game + "</p></div>" +
                            "</div>" +
                        "</a>");
                }

                if (!status.stream) {
                    game = "offline";
                    preview = status.stream.channel.logo;

                    $(".offlineUsers").after("" +
                        "<a href=\"https://www.twitch.tv/"+ account +"\">" +
                            "<div class=\"streamer offline\">" +
                                "<div class=\"profilePic\"><img src=" + preview + "></div>" +
                                "<div class=\"profileName\"><p>" + account + "</p></div>" +
                                "<div class=\"profileStatus\"><p>" + game + "</p></div>" +
                            "</div>" +
                        "</a>");
                }
        /*
                if (status.status == 422) {
                    game = "Account Does Not Exist";

                    $(".noAccountUsers").after("" +
                            "<div class=\"streamer offline\">" +
                                "<div class=\"profilePic\"></div>" +
                                "<div class=\"profileName\"><p>" + account + "</p></div>" +
                                "<div class=\"profileStatus\"><p>" + game + "</p></div>" +
                            "</div>");
                }
*/

            });
        })();
        }
});

