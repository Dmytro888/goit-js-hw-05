function changeEven (numbers, value) {
  // Пиши код ниже этой строки
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  // Пиши код выше этой строки
}

let x = changeEven([1, 2, 3, 4, 5], 10);
