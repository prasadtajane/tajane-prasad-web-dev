/**
 * Created by prasadtajane on 7/19/17.
 */
(function() {
    angular
        .module("WamApp")
        .factory("userService", userService);

    function userService()  {

        var users = [
            {_id: "123", username: "alice", password:"alice", firstname:"aLicE", lastname:"wonderLanD"},
            {_id: "345", username: "bob", password:"bob", firstname:"bob", lastname:"marley"}
        ];

        var api =  {
            createUser:createUser,
            updateUserByUserId:updateUserByUserId,
            deleteUserByUserId:deleteUserByUserId,
            "findUserByUsernameAndPassword": findUserByUsernameAndPassword,
            "findUserById":findUserById,
            "findUserByUsername": findUserByUsername
        };
        return api;

        function findUserByUsernameAndPassword(username, password) {

            for (var u in users) {
                if (username === users[u].username && password === users[u].password) {
                    return users[u];
                }
            }
            return null;
        }

        function findUserById(userId) {

            for (var u in users) {
                if (userId === users[u]._id) {
                    return users[u];
                }
            }
            return null;
        }

        function findUserByUsername(username)   {

            for (var u in users) {
                if (username === users[u].username) {
                    return users[u];
                }
            }
            return null;
        }

        function createUser(newuser)   {
            newuser._id = (new Date()).getTime() + "";
            users.push(newuser);
            return newuser;
        }

        function updateUserByUserId(user, userId)   {
            for(var u in users) {
                if( users[u]._id === userId ) {
                    users[u].firstName = user.firstName;
                    users[u].lastName = user.lastName;
                    //alert(users);
                    return users[u];
                }
            }
            return null;
        }

        function deleteUserByUserId(userId) {
            for (var u in users) {
                if (users[u]._id === userId) {
                    users.splice(u, 1);
                }
            }
        }

    }
})();
