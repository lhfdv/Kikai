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
