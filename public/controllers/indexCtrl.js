app.controller("indexCtrl", function ($scope, $location) {
    var vm = $scope;

    vm.currentPage = 'home';
    vm.go = function go(page) {
        $location.path('/' + page);
    };

    vm.imagensCarrosel = [
        {
            "code": 1,
            "caminho": "img/carousel/item1.jpg"
        },
        {
            "code": 2,
            "caminho": "img/carousel/item2.jpg"
        }, {
            "code": 3,
            "caminho": "img/carousel/item3.jpg"
        }, {
            "code": 4,
            "caminho": "img/carousel/item4.jpg"
        }, {
            "code": 5,
            "caminho": "img/carousel/item5.jpg"
        }
    ];

    vm.itensPrincipais = [
        {
            "id": 1,
            "titulo": "Produto 1",
            "descricao": "descricao do produto 1"
        }, {
            "id": 2,
            "titulo": "Produto 2",
            "descricao": "descricao do produto 2"
        }, {
            "id": 3,
            "titulo": "Produto 3",
            "descricao": "descricao do produto 3"
        }
    ];
});