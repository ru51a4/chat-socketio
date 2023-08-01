'use strict';

$app
    .controller('ChatCtrl', function ($scope, $http, $location, api) {
        $scope.str = "";
        $scope.chat = [];

        _socket.on('chat message', (msg) => {
            $scope.chat.push(msg)
            $scope.$apply();
        });
        $scope.send = () => {
            _socket.emit('chat message', $scope.str);
            $scope.str = '';
        };
    });
