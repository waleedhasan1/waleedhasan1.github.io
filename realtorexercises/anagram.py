
import sys
import time
    






  
def isAnagram(word1,word2):#O(k +klogk)
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
    for i in range(len(sortedword1)): #this loop runs k times
        if (sortedword1[i] != sortedword2[i]):
            #print('IsAnagram returns false with' + word1 + word2)
            return False
   # print('IsAnagram returns true with ' + word1 + word2)
    return True

    
      



def main(): #O(nlogk)
    
    startTime = time.time()
    file = open(sys.argv[1],'r')
    dictionary = file.readlines()
    file.close()
    dictTime = time.time() - startTime
    msDictTime = dictTime * 1000
    print('Dictionary Loaded in ' + str(round(msDictTime,2)) + 'ms')
    
    inputWord = input('enter word: ')
    #print time it takes to load dictionary.txt 

   
    
    while (inputWord.lower() != 'exit'):  
        anagrams = []
        startTime = time.time()
        for word in dictionary:   #runs N times, and runs isAnagram (O(nlogn)) n times
            if (isAnagram(inputWord,word)):
                anagrams.append(word.strip())
        searchTime = time.time() - startTime    
        if (len(anagrams) == 0):
            print('No anagrams were found for ' + inputWord)
        
        else:
            numAnagrams = len(anagrams)
            print(str(numAnagrams) + " Anagrams found for " + inputWord + " in " + str(round(searchTime,2)))
            for anagram in anagrams:
                print(anagram, end = ', ')
        print()
        inputWord = input('enter word: ')


main()