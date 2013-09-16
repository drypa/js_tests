require(
    ['jquery', 'hello'],
    function ($, m) {
        $(document).ready(function () {
            $('.hello').html(m.bar('Drypa'));
        });

    }
);