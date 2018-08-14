/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		int index = 0, a[] = {3, 7, 90, 20, 10, 50, 40}, n = 7, Max, sum = 0, k = 3;
        for(int i = 0; i < k; i++)
            sum += a[i];
        Max = sum;
        for(int i = k;i < n;i++)
        {
            sum = sum + a[i] - a[i - k];
            if(sum < Max)
                {Max = sum; index = i - k + 1;}
        }
        System.out.printf("%d \n%d \n%d", Max, index, index + k - 1);
	}
}
