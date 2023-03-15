try {
    console.log (a);
    let a = 3;
} catch (err) {
    console.log("Let must be declared");
}

try {
    let a = 1/0;
    if (a===Infinity) {
        throw new Error("Cannot be divided by zero")
    }
} catch (err) {
    console.log(err.message);
}
