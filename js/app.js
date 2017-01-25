function makeItHappen() {
    var html = document.getElementById('html');
    var css = document.getElementById('css');
    var js = document.getElementById('js');
    var liveCode = document.getElementById('live-code').contentWindow.document;

    document.body.onkeyup = function () {
        liveCode.open();
        liveCode.writeln(html.value + '<style>' + css.value + '</style>' + '<script>' + js.value + '</script>');
        liveCode.close();
    };
};

makeItHappen();