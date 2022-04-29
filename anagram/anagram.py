


    







def isAnagram(word1,word2):
   # print('isAnagram called with',word1 + word2)
    word1 = word1.lower()
    word1 = word1.strip()
    word2 = word2.lower()
    word2 = word2.strip()
    if (len(word1) != len(word2)):
        #print('IsAnagram returns false with' + word1 + word2)
        return False
    
    
    sortedword1 = sorted(word1)
    sortedword2 = sorted(word2)
    for i in range(len(sortedword1)):
        if (sortedword1[i] != sortedword2[i]):
            #print('IsAnagram returns false with' + word1 + word2)
            return False
   # print('IsAnagram returns true with ' + word1 + word2)
    return True

    
        



def main():
    

    file = open('dictionary.txt','r')
    dictionary = file.readlines()
    file.close()
    inputWord = input('enter word: ')

    
    
    

    
    
    while (inputWord != 'exit'):
        anagrams = []
        for word in dictionary:
            if (isAnagram(inputWord,word)):
                anagrams.append(word.strip())
            
        if (len(anagrams) == 0):
            print('No anagrams were found for ' + inputWord)
        
        else:
            for anagram in anagrams:
                print(anagram + ',')
        inputWord = input('enter word: ')


main()