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
