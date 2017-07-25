/**
 * Created by prasadtajane on 7/19/17.
 */
(function() {
    angular
        .module("WamApp")
        .factory("userService", userService);

    function userService()  {

        var users = [
                {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder" ,    email: "a@b.com",  contact: 123,  isAdmin: true  },
                {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley",     email: "a@b.com",  contact: 123  },
                {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia",     email: "a@b.com",  contact: 123  },
                {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi",    email: "a@b.com",  contact: 123  }
            ];

        var api =  {
            createUser:createUser,
            updateUserByUserId:updateUserByUserId,
            deleteUserByUserId:deleteUserByUserId,
            "findUserByUsernameAndPassword": findUserByUsernameAndPassword,
            findUserById:findUserById,
            "findUserByUsername": findUserByUsername
        };
        return api;

        function findUserByUsernameAndPassword(username, password) {

            for (var u in users) {
                if (username === users[u].username && password === users[u].password) {
                    return angular.copy(users[u]);
                }
            }
            return null;
        }

        function findUserById(userId) {

            for (var u in users) {
                if (userId === users[u]._id) {
                    return angular.copy(users[u]);
                }
            }
            return null;
        }

        function findUserByUsername(username)   {

            for (var u in users) {
                if (username === users[u].username) {
                    return angular.copy(users[u]);
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
            //alert("inside update service " + userId + " " + user);
            for(var u in users) {
                if( users[u]._id === userId ) {
                    //users[u].firstName = user.firstName;
                    //users[u].lastName = user.lastName;
                    users[u] = user;
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
