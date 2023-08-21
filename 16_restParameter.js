function add(...num ){
    let sum = 0;
    // console.log(`num1 ${num1},  num2 ${num2}`);
    // console.log(num);
    for (const value of num) {
        sum = sum + value
    }
    console.log(sum);

}
add(5, 6);

add(9, 5, 6);

add(78, 90, 51, 68);

add(89, 90, 45,78, 90, 51, 68);
