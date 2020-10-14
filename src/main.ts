function isNegative(num: number): boolean {
  return num < 0 ? true : false;
}

function isOver1000(num: number): number {
  return num > 1000 ? 0 : num;
}

function negativeNotAllowed(negatives: any) {
  throw new Error('Negatives not allowed: '+negatives);
}

/**
 * Return the summation of numbers in string
 * @param numbers - The input number in string type
 * @returns The summation of numbers
 */
export function Add(numbers: string): number {
  
  if (+numbers) {
    if (isNegative(+numbers)) {
      negativeNotAllowed(numbers);
    }
    return isOver1000(+numbers);
  }

  var delimeters = []
  delimeters.push(',')
  if (numbers.startsWith('//')) {
    const extractDelimetersInBracket = /(?<=\[)(.*?)(?=\])/g;
    delimeters = numbers.match(extractDelimetersInBracket).concat(delimeters);
    numbers = numbers.slice(2).split('\n').slice(1).join()
  }
  numbers = numbers.replace('\n', ',');
  const delimetersInRegex = delimeters.join('|').replace(/[<>*()?]/g, '\\$&');
  const numberArray = numbers.split(new RegExp(delimetersInRegex));
  
  var sum = 0;
  var negetiveNumbers = [];
  numberArray.forEach(num => {
    if (isNegative(+num)) {
      negetiveNumbers.push(num)
    }
    sum += isOver1000(+num);
  })

  if (negetiveNumbers.length) {
    negativeNotAllowed(negetiveNumbers)
  };
    
  return sum;
  
}
