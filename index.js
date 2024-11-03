// Запросить у пользователя три числа:
// Ввести первое число и сохранить его в переменной num1.
// Ввести второе число и сохранить его в переменной num2.
// Ввести третье число и сохранить его в переменной num3.
// Проверить, являются ли все три числа целыми:
// Если num1, num2, и num3 — целые числа, продолжить.
// Если хотя бы одно из значений не является целым числом, вывести сообщение об ошибке и завершить выполнение функции.
// Сложить числа:
// Вычислить сумму: sum = num1 + num2 + num3.
// Вывести результат:
// Показать пользователю сообщение, содержащее num1, num2, num3, и их сумму sum.
// Завершить алгоритм.

function isIntegerNumber(num1, num2, num3) {
  if (
    Number.isInteger(num1) !== true ||
    Number.isInteger(num2) !== true ||
    Number.isInteger(num3) !== true
  ) {
    alert("проверьте что вы ввели все числа");
    return false;
  } else {
    return true;
  }
}

function calculateSum() {
  let num1 = Number(prompt("Введите первое число"));
  let num2 = Number(prompt("Ввдите второе число"));
  let num3 = Number(prompt("Введите третье число"));
  let sum;
  if (isIntegerNumber(num1, num2, num3)) {
    sum = num1 + num2 + num3;
    alert(`Сумма чисел ${num1}+${num2}+${num3} равняеться ${sum}`);
  } else {
    return null;
  }
}

calculateSum();
