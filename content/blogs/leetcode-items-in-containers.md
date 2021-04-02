---
layout: post
title: Items In Container
date: "2020-11-02"
image: "items-in-container.png"
tags: ["leetcode", "algorithms"]
archived: true
---

**Java O(N)**... Did not use `.indexOf` and `.substring` as the time complexity of them are `O(N)`.

https://leetcode.com/discuss/interview-question/861453/
https://leetcode.com/discuss/interview-question/865660/amazon-alexa-online-assessment-items-in-containers

Java 7 update 6 Substring is O(n) https://stackoverflow.com/questions/4679746/time-complexity-of-javas-substring
indexOf is O(m*n) https://stackoverflow.com/questions/12752274/java-indexofstring-str-method-complexity#:~:text=The%20complexity%20of%20Java's%20implementation,which%20cannot%20match%20the%20pattern.
```
public static int[] numberOfItems(String s, int[] startIndices, int[] endIndices){
    int[] result = new int[startIndices.length];
    if(s == null || s.length() == 0 || startIndices == null || startIndices.length == 0 || endIndices == null || endIndices.length == 0 || startIndices.length != endIndices.length){
        return null;
    }

    // for each pair of indices
    for (int i=0; i < startIndices.length; i++){
        int start = startIndices[i] - 1; // array indices begin from 0
        int end = endIndices[i];  // end is inclusive
        int total = 0;
        int count = 0;
        int open = 0; // 0 for closed, 1 for open

        for(int j = start; j < end; j++){
            if(s.charAt(j) == '*' && open == 1){
                count++;
            }else if(s.charAt(j) == '|'){
                if(open == 1){
                    total += count;
                    count = 0;
                }else{
                    open = 1;
                }
            }
        }
        result[i] = total; // append total;
    }
    return result;
}
```