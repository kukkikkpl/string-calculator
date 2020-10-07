export function Add(numbers:string): number {
  if (numbers === '') {
    return 0;
  } 
  if (+numbers) {
    if (isNegative(+numbers)) {
      throw new Error('Negatives not allowed: '+numbers);
    }
    return isOver1000(+numbers);
  }

  var delimeters = []
  delimeters.push(',')
  if (numbers.startsWith('//')) {
    const regex = /(?<=\[)(.*?)(?=\])/g;
    delimeters = numbers.match(regex);
    numbers = numbers.slice(2).split('\n')[1]
  }
  numbers = numbers.replace('\n', ',');
  const reg = delimeters.join('|').replace(/[<>*()?]/g, "\\$&");
  const numberArray = numbers.split(new RegExp(reg));
  
  var sum = 0;
  var negetiveNumbers = [];
  numberArray.forEach(ele => {
    if (isNegative(+ele)) {
      negetiveNumbers.push(ele)
    }
    sum += isOver1000(+ele);
  })

  if (negetiveNumbers.length) throw new Error('Negatives not allowed: '+negetiveNumbers);
    
  return sum;
  
}

function isNegative(num:number) {
  return num < 0 ? true : false;
}

function isOver1000(num:number) {
  return num > 1000 ? 0 : num;
}