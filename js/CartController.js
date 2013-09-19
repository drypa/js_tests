var appModule = appModule || angular.module('helloWorldApp', []);
appModule.controller('CartController', function ($scope) {
    $scope.items = [{ name: 'name1', price: 1, count: 2 },
                 { name: 'name2', price: 2, count: 3 },
                 { name: 'name3', price: 2, count: 4 },
                 { name: 'name4', price: 2, count: 5 },
                 { name: 'name5', price: 2, count: 6 },
                 { name: 'name6', price: 2, count: 7 },
                 { name: 'name7', price: 2, count: 8 },
                 { name: 'name8', price: 2, count: 9 },
                 { name: 'name9', price: 2, count: 10 },
                 { name: 'name10', price: 2, count: 30 }
                 ];
    $scope.totalPrice = function () {
        for (var i = 0, len = $scope.items.length, res = 0; i < len; ++i) {
            (function () {
                var item = $scope.items[i];
                res += item.price * item.count;
            })();
        }
        return res;
    }
    $scope.newItem = { name: 'sample name', price: 0, count: 1 };
    $scope.add = function (name, price) {
        $scope.items.push({ name: name, price: price, count: 1 });
    }
    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    }
});