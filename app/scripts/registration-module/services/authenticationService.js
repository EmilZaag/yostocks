'use strict'

angular.module('registration-module.services')

.factory('Authentication', ['$rootScope', '$location', '$firebaseAuth', 'FIREBASE_URL', '$firebaseObject',
    function($rootScope, $location, $firebaseAuth, FIREBASE_URL, $firebaseObject) {

    var ref = new Firebase(FIREBASE_URL), // Get a handle to the firebase database
        auth = $firebaseAuth(ref),        // The firebase authentication object for this database
        userProfile = {};


        // detect the users authorisation status
        auth.$onAuth(function(authorisedUser){
            if (authorisedUser){
                var userRef = new Firebase(FIREBASE_URL+'users/'+authorisedUser.uid);
                var userObject = $firebaseObject(userRef);

                console.log('$onAuth event ',authorisedUser);
                //$rootScope.avatar = userRef.password.profileImageURL;
                //$rootScope.message  = userRef.password.email + ' you are logged in';
                //$rootScope.currentUser = userObject;

            } else {
                $rootScope.currentUser = '';
            }
        })


    return {
        login: function(user) {
            auth.$authWithPassword({
                    email: user.email,
                    password: user.password
                })
                .then(function(regUser) {
                    //$rootScope.currentUser = regUser.password.email;
                    console.log('on login ',regUser)
                    $location.url('/stocks');
                }).catch(function(error) {
                    $rootScope.message = error.message;
                });
        },

        signup: function(user) {
            return auth.$createUser({
                email: user.email,
                password: user.password
            }).then(function(registeredUser) {

                var regRef = new Firebase(FIREBASE_URL + 'users') // create a new branch in the database
                    .child(registeredUser.uid).set({ // set the new user info as a child of this branch
                        regUser: registeredUser.uid,
                        date: Firebase.ServerValue.TIMESTAMP,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email
                    });

            }).catch(function(error) {
                $rootScope.message = error.message; // on error (like when the email has already been registered)
            });
        },

        logout : function() {
             auth.$unauth();
        },

        removeUser: function(user) {
            auth.$removeUser({
                email: user.email,
                password: user.password
            });
         }//,

        // getAuthStatus : function() {
        //      return authData;
        // }
    };

}]);

    //return AuthenticationService;


        // var AuthenticationService = {};         // This factory instance

        // return the authorisation status
        // updates on logging in, logging out and session expiry
        // auth.$onAuth(function(authData) {
        //   $rootScope.authStatus = authData;
        //   console.log('Auth status from onAuth event: '+authData);
        // }),

        // remove the user
        //


        // public functions
        // return {
        //     signup: signup,
        //     remove: removeUser,
        //     getAuthStatus: getAuthStatus,
        //     login: login,
        //     logout: logout
        //         //auth: auth
        // }








        //     // passing this message to rootscope allows it to be used in any controller
        //     $rootScope.message = user.firstname + ' ' + user.lastname + ' you are registered!';

        // }.catch(function(error) {
        //     $rootScope.message = error.message; // on error (like when the email has already been registered)
        // });

        //$location.url('/login');
    //}



    //     auth.$onAuth(function(authUser) { // event called on the authorisation of a user (on login)
    //         if (authUser) {
    //             var userRef = new Firebase(FIREBASE_URL + 'users' + authUser.uuid);
    //             var userObj = $firebaseObject(userRef);
    //             $rootScope.currentUser = userObj;
    //         } else {
    //             $rootScope.currentUser = ' ';
    //         }
    //     });

    // function auth() {
    //     return auth;
    // }

    // function logout() {
    //     auth.$unauth();
    //     $rootScope.message = user.email + ' you are logged out';
    // }






        // function login (user){              // the login function
        //     auth.$authWithPassword({
        //         email: user.email,
        //         password: user.password
        //     }).then(function(regUser){
        //         $rootScope.message  = user.email + ' you are logged in';
        //         $location.url('/stocks');
        //     }).catch(function(error){
        //         $rootScope.message = error.message;
        //     });
        // };












