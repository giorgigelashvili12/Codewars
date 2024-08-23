// 1
function getRealFloor(n) {
    if(n <= 0) {
        return n;
    } else if (n >= 13) {
        return n - 2;
    } else {
        return n -1;
    }
}

// 2
function dutyFree(normPrice, discount, hol){
    let discounted = normPrice * (1 -discount / 100);
  // 1 = saved money
    let savedMoney = normPrice - discounted;
  
    return Math.floor(hol / savedMoney)
}