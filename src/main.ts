export function Add(numbers:string): number {
  if (numbers === '') {
    return 0;
  } 
  if (+numbers) {
    if (isNegative(+numbers)) {
      throw new Error('Negatives not allowed');
    }
    return +numbers;
  }

  var delimeter = ','

  if (numbers.startsWith('//')) {
    delimeter = numbers.slice(2).split('\n')[0]
    numbers = numbers.slice(2).split('\n')[1]
  }
  numbers = numbers.replace('\n', ',');
  const numberArray = numbers.split(delimeter);
  
  var sum = 0;
  numberArray.forEach(ele => {
    if (isNegative(+ele)) {
      throw new Error('Negatives not allowed');
    }
    sum += +ele;
  })
    
  return sum;
  
}

function isNegative(num:number) {
  return num < 0 ? true : false;
}