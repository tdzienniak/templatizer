/* globals test, ok, templatizer, templatizer_unaltered */

var data = {
    users: [{
        name: 'larry',
        url: 'http://andyet.com',
        id: 1
    }, {
        name: 'curly',
        url: 'http://andbang.com',
        id: 2
    }, {
        name: 'moe',
        url: 'http://talky.io',
        id: 3
    }]
};

test("Test mixins", function () {
    var users = templatizer.usersMixins({users: data.users});
    var user_li = templatizer.usersMixins.user_li(data.users[0]);
    var user_a = templatizer.usersMixins.user_a(data.users[0]);
    
    var _users = '<ul>';
    for (var i = 0, m = data.users.length; i < m; i++) {
        _users += templatizer.usersMixins.user_li(data.users[i]);
    }
    _users += '</ul>';

    ok(users === _users);
    ok(users.indexOf(user_li) > -1);
    ok(users.indexOf(user_a) > -1);
    ok(user_li.indexOf(user_a) > -1);
});

test("Test altered vs unaltered mixins", function () {
    var users = templatizer.usersMixins({users: data.users});
    var _users = templatizer_unaltered.usersMixins({users: data.users});

    ok(users === _users);
});