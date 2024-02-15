# Skrive tester med Github Copilot

Bruk Github Copilot til å skrive tester til de funksjonene adder, subtraher og calculate_average, som ligger i filen Funksjoner.py. Marker funksjonene du vil skrive testene for, og spør Github Copilot Chat om hjelp. Skriv testene i Tester.py.

```python

def adder(number1, number2):
    return number1 + number2

def subtraher(number1, number2):
    return number1 - number2


def calculate_average(numbers):
    """
    Calculates the average of a list of numbers.

    Parameters:
        numbers (list of float): A list of numbers.

    Returns:
        float: The average of the numbers.
    """
    if not numbers:
        return 0  # Return 0 if the list is empty to avoid division by zero
    return sum(numbers) / len(numbers)


def main():
    number1 = 6
    number2 = 4
    sum = adder(number1, number2)
    print(number1, "+", number2, "=", sum)

    differance = subtraher(number1, number2)
    print(number1, "-", number2, "=", differance)

    numbers = [1, 2, 3]
    avg = calculate_average(numbers)
    print("Gjennomsnittet av tallene", numbers, "er", avg)

main()
```
