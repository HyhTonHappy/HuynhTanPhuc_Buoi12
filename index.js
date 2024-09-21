let array = [];

function addToArray() {
  const numberInput = document.getElementById('numberInput').value;
  if (numberInput === '') {
    alert('Vui lòng nhập một số nguyên');
    return;
  }
  array.push(Number(numberInput));
  document.getElementById('arrayDisplay').innerText = `Mảng hiện tại: [${array}]`;
  document.getElementById('numberInput').value = ''; // Reset input
}

function clearArray() {
  array = [];
  document.getElementById('arrayDisplay').innerText = 'Mảng hiện tại: []';
  document.getElementById('result').innerText = '';
}

function executeFunction() {
  if (array.length === 0) {
    alert('Vui lòng thêm ít nhất một số vào mảng trước khi thực hiện chức năng');
    return;
  }

  const selectedFunction = document.getElementById('functionSelect').value;
  let result = '';

  switch (selectedFunction) {
    case '1':
      result = `Tổng các số dương: ${sumPositiveNumbers()}`;
      break;
    case '2':
      result = `Số lượng số dương: ${countPositiveNumbers()}`;
      break;
    case '3':
      result = `Số nhỏ nhất: ${findSmallestNumber()}`;
      break;
    case '4':
      result = `Số dương nhỏ nhất: ${findSmallestPositiveNumber()}`;
      break;
    case '5':
      result = `Số chẵn cuối cùng: ${findLastEvenNumber()}`;
      break;
    case '6':
      swapValues();
      result = `Mảng sau khi đổi chỗ: [${array}]`;
      break;
    case '7':
      result = `Mảng sau khi sắp xếp: [${sortArrayAscending()}]`;
      break;
    case '8':
      result = `Số nguyên tố đầu tiên: ${findFirstPrimeNumber()}`;
      break;
    case '9':
      result = `Số lượng số nguyên: ${countIntegersInRealArray()}`;
      break;
    case '10':
      result = comparePositivesAndNegatives();
      break;
    default:
      result = 'Vui lòng chọn một chức năng.';
  }

  document.getElementById('result').innerText = result;
}

function sumPositiveNumbers() {
  return array.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}

function countPositiveNumbers() {
  return array.filter(num => num > 0).length;
}

function findSmallestNumber() {
  return Math.min(...array);
}

function findSmallestPositiveNumber() {
  const positiveNumbers = array.filter(num => num > 0);
  return positiveNumbers.length > 0 ? Math.min(...positiveNumbers) : 'Không có số dương';
}

function findLastEvenNumber() {
  const lastEven = array.slice().reverse().find(num => num % 2 === 0);
  return lastEven !== undefined ? lastEven : -1;
}

function swapValues() {
  const index1 = prompt('Nhập vị trí thứ nhất:');
  const index2 = prompt('Nhập vị trí thứ hai:');
  if (index1 >= array.length || index2 >= array.length || index1 < 0 || index2 < 0) {
    alert('Vị trí không hợp lệ');
    return;
  }
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function sortArrayAscending() {
  return array.slice().sort((a, b) => a - b);
}

function findFirstPrimeNumber() {
  const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const firstPrime = array.find(isPrime);
  return firstPrime !== undefined ? firstPrime : -1;
}

function countIntegersInRealArray() {
  const realArrayInput = prompt('Nhập mảng số thực (cách nhau bằng dấu phẩy):');
  if (!realArrayInput) return 'Mảng không hợp lệ';
  const realArray = realArrayInput.split(',').map(Number);
  return realArray.filter(num => Number.isInteger(num)).length;
}

function comparePositivesAndNegatives() {
  const positiveCount = array.filter(num => num > 0).length;
  const negativeCount = array.filter(num => num < 0).length;
  if (positiveCount > negativeCount) return 'Số dương nhiều hơn số âm';
  if (positiveCount < negativeCount) return 'Số âm nhiều hơn số dương';
  return 'Số lượng số dương và số âm bằng nhau';
}
