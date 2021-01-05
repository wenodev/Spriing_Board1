var mother = function (cc) {
    cc();
};
var children = function () {
    console.log('안녕하세요');
};
mother(children);
children();