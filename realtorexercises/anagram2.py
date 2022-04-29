import sys


def isAnagram(word1,word2):
       # print('isAnagram called with',word1 + word2)
    word1 = word1.strip()
    word2 = word2.strip()
    if (len(word1) != len(word2)):
        #print('IsAnagram returns false with' + word1 + word2)
        return False
    
    
    word1 = word1.lower()
    word2 = word2.lower()
    
    sortedword1 = sorted(word1)
    sortedword2 = sorted(word2)
    for i in range(len(sortedword1)):
        if (sortedword1[i] != sortedword2[i]):
            #print('IsAnagram returns false with' + word1 + word2)
            return False
   # print('IsAnagram returns true with ' + word1 + word2)
    return True



def getAnagrams(inputWord):
    file = open('dictionary.txt','r')
    dictionary = file.readlines()
    file.close()
    anagrams = []
    for word in dictionary:
        if (isAnagram(inputWord,word)):
            anagrams.append(word.strip())
    return anagrams       

#def getDict(fileName):
    


def displayResult(anagrams, inputWord):
    if (len(anagrams) == 0):
            print('No anagrams were found for ' + inputWord)
    else:
        for anagram in anagrams:
            print(anagram + ',')



def main():  
    
    inputWord = input('enter word: ')
    
    wordLog = {}
    file = open('dictionary.txt','r')
    dictionary = file.readlines()
    file.close()   
    for word in dictionary:
        wordLog[sorted(word)] = []
            
    
    
    while (inputWord.lower() != 'exit'):
        if (len(wordLog[sorted(inputWord)]) == 0):
            anagrams = getAnagrams(inputWord)        
            displayResult(anagrams,inputWord)
            wordLog[sorted(inputWord)] = anagrams
            inputWord = input('enter word: ')
        else:
            anagrams = wordLog[sorted(inputWord)]
            displayResult(anagrams,inputWord)
            inputWord = input('enter word: ')
            


main()