const H = 5;
function numberOneTriangle(H) {

    for (let i = 1; i <= H; i++) {
        for (var k = H; k > i; k--) {
            document.write("&nbsp;&nbsp;");
        }
        for (let j = 1; j <= i * 2 - 1; j++) {
            document.write("5");
        }
        document.writeln("<br />");
    }
}
numberOneTriangle(H)