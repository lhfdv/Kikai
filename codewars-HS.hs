module RemoveDups where 
import Data.List

solve :: [Int] -> [Int]
solve xs = reverse ( nub (reverse xs) )
