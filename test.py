dice = int(input())
num = input()

def calculate_sum(num, odd):
    sum_digits = 0
    for i in range(len(num)):
        digit = int(num[i])
        if (i + 1) % 2 == odd:
            sum_digits += digit
    return sum_digits

if dice % 2 == 0:
    result = calculate_sum(num, 1)  
else:
    result = calculate_sum(num, 0)  
print(result)
