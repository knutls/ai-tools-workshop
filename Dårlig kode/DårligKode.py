import random

def numrs(n):
  if n == 1:
    return random.randint(1, 100)
  elif n == 2:
    return [random.randint(1, 100) for _ in range(10)]
  elif n == 3:
    return [random.randint(1, 100) for _ in range(10)], [random.randint(1, 100) for _ in range(10)]
  else:
    print("Wrong input")

def adder(lst1, lst2):
  return [a + b for a, b in zip(lst1, lst2)]

def operation(n):
  if n == 1:
    print(numrs(1))
  elif n == 2:
    print(numrs(2))
  elif n == 3:
    print(adder(numrs(3)[0], numrs(3)[1]))
  else:
    print("Wrong input")

operation(3)