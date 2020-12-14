def palindrome_chain_length(n)
    res = 0
    until n.to_s == n.to_s.reverse!
      n = n + n.to_s.reverse!.to_i
      res = res + 1
    end
    res
end
