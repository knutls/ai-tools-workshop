# Skrive tester med Github Copilot

Bruk Github Copilot til å skrive tester til de to funksjonene calculate_average og reverse_string. Marker funksjonene du vil skrive testene for, og spør Github Copilot Chat.

```python
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

def reverse_string(input_string):
    """
    Reverses a given string.

    Parameters:
        input_string (str): The string to be reversed.

    Returns:
        str: The reversed string.
    """
    return input_string[::-1]

def main():
    numbers = [1, 2, 3]
    avg = calculate_average(numbers)
    print("Gjennomsnittet av tallene:", avg)

    string = "Hei!"
    reversed_string = reverse_string(string)
    print(string, "baklengs:", reversed_string)

main()
```
