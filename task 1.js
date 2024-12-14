console.log(sumFor(1, 2, 3, 4));
console.log(sumForOf(1, 2, 3, 4));
console.log(sumWhile(1, 2, 3, 4));
console.log(sumDoWhile(1, 2, 3, 4));
console.log(sumReduce(1, 2, 3, 4));

function sumFor(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

function sumForOf(...args) {
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total;
}

function sumWhile(...args) {
    let total = 0;
    let i = 0;
    while (i < args.length) {
        total += args[i];
        i++;
    }
    return total;
}

function sumDoWhile(...args) {
    let total = 0;
    let i = 0;
    if (args.length === 0) return 0;
    do {
        total += args[i];
        i++;
    } while (i < args.length);

    return total;
}

function sumReduce(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}


