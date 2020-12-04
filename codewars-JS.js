function multiply(a, b){
  let res;
  res = a * b;
  return res;
}



const reverseSeq = n => {
  let result = [];
  for (let i = 1; i <= n; i++){
    result.push(i)
  }
  result.reverse();
  return result;
};



function solution(number){
  var num=0, i;
  for (i=1; i<number;i++){if(i%3===0 || i%5===0) {num+=i;}}
  return num;
}



function numPrimorial(n){
  let times;
  let result = 0;
  let x = 2;
  let y = 2;
  let plus = 1;
  let j;
  let b;
  let add;
  let lt;
  let timesc = 1;
  
  for(times = 3; timesc<n; times++){
    b = y;
    
    for(j= 2; j < times; j++){
      if(times % j === 0)
      {
        add = 0;
        lt = 1;
        break;
      
      } else{
        add = 1;
        lt = times;
      }
    }
    timesc = timesc + add;
    x = x * lt;
    result = x;
  }
  return x;
}



function getAverage(marks){
  var average = 0;
  for( var i = 0; i < marks.length; i++ ){ average += marks[i]; }
  average = average / marks.length
  return (Math.floor(average));
}



function minSum(arr) {
  let result=0;
  var maxlen = 0;
  let y;
  arr.sort(function(a, b) {return a - b;});
   
  for (var i=0; i<arr.length; i++) {
    var x = Object.keys(arr).length;
    if (x>maxlen) {
      maxlen = Object.keys(arr).length;
    }
  }
  
  x = maxlen;
  
  for (i=0; i<maxlen/2; i++){
    x = x - 1;
    y = arr[i] * arr[x];
    result = result + y;
  }

  return result;
}



function consecutiveDucks(num) {
    let result;
    result = Math.log2(num);
    if (Number.isInteger(result)) {
      return false;
    } else{
      return true;
    }
}



function grader(score) {
    switch (true) {
        case score > 1:
            return "F";
            break;
        case score >= 0.9 && score <= 1:
            return "A";
            break;
        case score >= 0.8 && score < 1:
            return "B";
            break;
        case score >= 0.7 && score < 1:
            return "C";
            break;
        case score >= 0.6 && score < 1:
            return "D";
            break;
        default:
            return "F";
    }
}



import org.junit.Test;
import static org.junit.Assert.assertArrayEquals;
import org.junit.runners.JUnit4;
import com.google.common.primitives.Ints; 
import java.util.*;

class Solution{
    public static int [] solve(int [] arr){
      ArrayList<Integer> Arr = new ArrayList<Integer>();

      for (int i:arr){
          Arr.removeIf(j->j==i);
          Arr.add(i);
      }
      
//    Arr.stream().mapToInt(arr -> Integer.parseInt(arr)) 
//                   .forEach(System.out::println); 

      return (Ints.toArray(Arr));
  }
}



function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}



function maxMultiple(divisor, bound){
  let x = bound % divisor;
  let n = bound - x;
  return n;
}  



function checkExam(array1, array2) {
	let res = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            res = res + 4;
        }
        else if (array2[i] == "") {
            res = res;
        }
        else if (array1[i] !== array2[i]) {
            res = res - 1;
        }
    }
    if (res < 0) {
      return 0;
    }
        return res;
}
