// 8kyu Student's Final Grade
// status: passed
function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) {
      return 100;
    } else if (exam > 75 && projects >= 5) {
      return 90;
    } else if(exam > 50 && projects >= 2) {
      return 75;
    } else {
      return 0;
    }
}

// 8kyu Fake Binary
// status: passed
function fakeBin(x){
    let result = "";
    for(let i = 0; i < x.length; i++) {
      if(x[i] < "5") {
        result = result + "0";
      } else {
        result = result + "1"
      }
    }
    
    return result;
}

// 8kyu
// status: failed (cant read properties of null - .lendgth)
function countPositivesSumNegatives(input) {
    let positives =0;
    let nSum = 0;
    
    if(input.length === 0 || input == null) {
      return [];
    } 
  
    for(let i = 0; i < input.length; i++) {
      if(input[i] > 0) {
        positives = positives + 1;
      } else if(input[i] < 0) {
        nSum = (nSum + input[i]);
      }
    }
    
    return [positives, nSum];
}

// 7kyu Sum of two lowest positive integers
// status: passed
function sumTwoSmallestNumbers(numbers) {  
    const lowestNum = Math.min(...numbers); // spread
    const numIndex = numbers.indexOf(lowestNum);
    numbers.splice(numIndex, 1)
    
    let secondLowest = Math.min(...numbers);
    
    return lowestNum + secondLowest;
}

// 7kyu Jaden Casing Strings
// status: passed
String.prototype.toJadenCase = function () {
    let result = []
    let texts = this.split(' ');
    
    for(let i = 0; i < texts.length; i++) {
      let text = texts[i];
      
      result.push(text[0].toUpperCase() + text.slice(1));
    }
    
    result = result.join(' ');
    return result;
};

// 6kyu Stop gninnipS My sdroW!
// status: passed
function spinWords(string){
    let text = string.split(' ');
    for(let i = 0; i < text.length; i++) {
      if(text[i].length >= 5) {
        text[i] = text[i].split('')
        text[i] = text[i].reverse()
        text[i] = text[i].join('')
      }
    }
    
    return text.join(' ')
}