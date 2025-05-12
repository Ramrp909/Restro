
# class Solution:
#     #loop in range n
#     #if i == 1 > str = 1121
#     #else input = string 
    
    
#     def countAndSay(self, n: int) -> str:
#         arr_sets = []
#         strr = ""
#         res = ""
#         for i in range(1,n+1):
#             print(i)
#             if i == 1:
#                 print("if s")
#                 strr += "1"
#             else:
#                 input_str = strr
#                 val = input_str[0]
#                 for j in range(1,len(input_str)):
#                     if input_str[j] == val[-1]:
#                         val += input_str[j]
#                     else:
#                         arr_sets.append(val)
#                         val = input_str[j]
#                 arr_sets.append(val)
#                 print(arr_sets)
#                 for i in arr_sets:
#                     res += str(len(i))
#                     res += str(i[-1])
                    
                   
                        
                        


#         return res
# s = Solution() 
# s = s.countAndSay(3) 
# print(s)