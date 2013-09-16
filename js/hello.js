define(
    'hello',
    ['jquery'],
    function ($) {
        function Foo() {
            this.bar = function (name) { return name+': Hello world!!'; }
        }
        return new Foo();
    }
);

