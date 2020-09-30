export function stringToNum(numbers:string) {
  if (numbers === '') {
    return 0;
  } 
  if (+numbers) {
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
    sum += +ele;
  })
  
  return sum;
  
}