function fact() {
    var i, num, f;
    f = 1
    num = txt.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    txt.value = f;
}