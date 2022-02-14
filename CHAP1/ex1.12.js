function pascal(a, b) {
    return b > a
    ? false
    : a == 1 || a == b
    ? 1
    : pascal(a-1, b-1) + pascal(a-1, b); // left + right
}

