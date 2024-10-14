/* folowing are the promise apis:
1. Promise.all(): mostly for parallel api call
it takes array of promises {e.g Promise.all([p1, p2, p3])} it makes three parallel api call and get the result( p1 p2 p3 are promises)
suppose here p1 take 3sec p2 take 1sec and p3 take 2sec then Promise.all give array result after 3 second
Promise.all() wait for all of them to finish and result may be like [val1, val2, val3] this is for success case or all promisses getting fulfield case
If any one of the promise is rejected then promise.all() work differently like below:
taking same above example , here lets assumed p2 get rejected after 1sec, then as soon as any of the promises rejected, promise.all() throw an error
promise.all also be a failure, and what will be the error it get from that rejected promise it will throw the same error as its result.
So the oputput is (ERROR) and its same as the error of p2. Here immediately as soon as error happened it will return the error, in this 
case p2 take 1 sec and after 1 second it got error, menas after one second you can see the result. it will not even wait for other promisses to successes or rejected
means it will not wait for p1 and p3. here if p1 pass in 1 sec and p2 fail after 2 sec, here also promise.all() throw error but after 2sec.

2. Promise.allSetteled(): its work same as Promise.all() for success case, means all promise api return success. But it will work differently in 
rejected case. Take same failure exam like p2 is rejected then Promise.allSetteled will wait for all promisses to settled. And after 3 sec it will 
give you an array of result like : [val1, err2, val3] here assuming p1 and p3 success and p2 rejected.

3. Promise.race(): taking same example like Promise.race([p1, p2, p3]) and taking time 3sec, 1sec and 2 sec respectively. Here as soon as any one of them promise
resolved that is in 1 second , then it will give me the result of the val2 like (val2) {note: here val2 is not array its valus so round bracket used.}
Basically it will give value of first settled promise.
Assume if p1 take 3s p2 take 5s and p3 take 2s, here (val3) will be the result as p3 promise settled first.
what if p3 promise failed which take less no to settled rather than another, in this case (ERROR) will be thrown from p3 after 2 sec. 
Here Promise.race will return result of first settled promise whether its success(value) or rejected(ERROR) it will not wait for other to finish.

4. Promise.any(): taking same example like Promise.any([p1, p2, p3]) and taking time 3sec, 1sec and 2 sec respectively. Here its same as Promise.race() like
the difference is it will wait for first success, here if p2 success it will return (val2) after 1 sec, what if p2 get rejected then promise.any() will wait
for next promises for success, if p3 get success in 2 sec it will return (val3) after 2 sec, and if p2 and p3 also rejected then promise.any() will for another 
promise means for p1 and when it get success it will return (val1) after 3 sec. 
What if everthing means all promisses failed means all api failed, then retrtun result will be the Aggregate Error and this Aggreagte Error 
will be an array of an all the errors like [err1, err2, err3] here after 3 sec we will get this array.
*/


