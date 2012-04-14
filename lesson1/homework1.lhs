
\begin{code}

collatz :: Int -> Int
collatz n = if even n then n `div` 2
            else 3*n + 1 

collatz_sequence :: Int -> [Int]
collatz_sequence 1 = [1]
collatz_sequence n = n:(collatz_sequence $collatz n)

collatz_sequence_tail :: Int -> [Int]
collatz_sequence_tail n = collatz_sequence_helper [] n

collatz_sequence_helper :: [Int] -> Int -> [Int]
collatz_sequence_helper accum 1 = reverse (1:accum)
collatz_sequence_helper accum n = collatz_sequence_helper (n:accum) (collatz n)
  

\end{code}