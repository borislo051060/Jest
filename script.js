// Сумма положительных

function summOfPositive(arr) {
  let summ = 0;
  for (item of arr) {
    if (item > 0) {
      summ += item;
    }
    return summ;
  }
};

//Противоположный номер

function oppositeNumber(num) {
  return num - num * 2;
};

//Удалить первый и последний символы
function slicedString(str) {
  return str.slice(1, -1);
};

//Повтор строки
function repeatStr(string, n) {
  result = '';
  for (let i = 0; i < n; i++) {
    result += string;
  }
  return result;
};

module.exports = {
  summOfPositive, oppositeNumber, slicedString, repeatStr
};
