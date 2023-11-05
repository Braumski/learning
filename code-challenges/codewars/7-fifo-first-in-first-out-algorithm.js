//  FIFO Replacement Algorithm

/* 

Challenge Instructions
//////////////////////////////////////////////////////////////////////////////////////////////////
In a computer operating system that uses paging for virtual memory management, 
page replacement algorithms decide which memory pages to page out when a page 
of memory needs to be allocated. Page replacement happens when a requested page
 is not in memory (page fault) and a free page cannot be used to satisfy the 
 allocation, either because there are none, or because the number of free
  pages is lower than some threshold.

The FIFO page replacement algorithm
The first-in, first-out (FIFO) page replacement algorithm is a low-overhead 
algorithm that requires little bookkeeping on the part of the operating 
system. The idea is obvious from the name: the operating system keeps track 
of all the pages in memory in a queue, with the most recent arrival at the 
back, and the oldest arrival in front. When a page needs to be replaced, the
 oldest page is selected. Note that a page already in the queue is not pushed
  at the end of the queue if it is referenced again.

Your task is to implement this algorithm. The function will take two 
parameters as input: the number of maximum pages that can be kept in memory 
at the same time n and a reference list containing numbers. Every number 
represents a page request for a specific page (you can see this number as 
the unique ID of a page). The expected output is the status of the memory
after the application of the algorithm. Note that when a page is inserted 
in the memory, it stays at the same position until it is removed from 
the memory by a page fault.

Example:
Given:

N = 3,
REFERENCE LIST = [1, 2, 3, 4, 2, 5],

  * 1 is read, page fault --> memory = [1];
  * 2 is read, page fault --> memory = [1, 2];
  * 3 is read, page fault --> memory = [1, 2, 3];
  * 4 is read, page fault --> memory = [4, 2, 3];
  * 2 is read, already in memory, nothing happens;
  * 5 is read, page fault --> memory = [4, 5, 3].
  * 
So, at the end we have the list [4, 5, 3], which is what you have to return.
If not all the slots in the memory get occupied after applying the algorithm,
fill the remaining slots (at the end of the list) with -1 to represent 
emptiness (note that the IDs will always be >= 1).

*/////////////////////////////////////////////////////////////////////////////////////////////////////

/*

my pseudocode

    array.push elements from given array into my return array
    if my return array is full, meeting the given maximum size number,
    (if returnArray.length = n), replace the oldest number placed in the array

    To know which element is oldest, after the array is full, fill the array 
    from left to right, replacing the oldest element along the way, then going 
    from left to right again, looping as much as the function needs to

    Replace empty number slots (the given reference list doesn't meet the maximum size parameter) with -1

 */////////////////////////////////////////////////////////////////////////////////////////////////////////

function fifo(n, referenceList) {
    const returnArray = [] /* I found a new array syntax that lets you set the max size of an array
                                        I googled if there was an easier way to set a maximum size for these arrays. 
                                        I don't like using google too much for these challenges but I learned 
                                        something useful this time. 🙌 */
    let increment = 0;
    const returnArrayCopy = []

    for (let i = 0 ; i < referenceList.length; i++ ) {
            if(returnArray.length < n ){
                returnArray.push(referenceList[i]);
            }
            else if(returnArray.length === n || referenceList.length >= n){   // Once the array is full
                returnArray.splice(increment, 1, referenceList[i]); //Begins replacing items from left to right (oldest to newest)
                increment ++                                      
                if (increment === n) {      
                        increment = 0;                       //This doesn't allow the array to get any larger than the maximum  
                }                                           
            }
    }
    for ( let i = n; n > returnArray.length; i++){
            returnArray.push(-1);
    }               
    return returnArray;
}

fifoArray = fifo(4, [3, 2, 5, 6, 5]);
console.log(fifoArray);