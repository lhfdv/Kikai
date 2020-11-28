public class Kata
{

  
  public static string CreatePhoneNumber(int[] numbers)
  {
    return "(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
  }
}



using System;

public class Kata
{
  public static int Litres(double time)
  {
    int result = Convert.ToInt32(Math.Floor(time*0.5));
    return result;
  }
}



using System;
using System.Linq;

public class Kata{
  
  public static int Consecutive(int[] arr){
    
    Array.Sort(arr);
    var len = arr.Count();
    
    if(len!=0){
      int result = 0;
      int max = arr[arr.Length - 1];
      int i = arr[0];
      int x = 0;
      
      for (int y = 0; y < len; y++){ if (arr[y] > max){ max = arr[y]; }}
       
      while(i<=max){ i++; x++; }

      if(x!=0) { result = x - len; } else{ result=0; }
      
      return (result);
 
    } else { return 0; }
  }
}
