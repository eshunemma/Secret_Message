let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// remove the last item of the array 
secretMessage.pop();

// add to and program to the end of the array
secretMessage.push('to', 'program');

//change easily yo right
secretMessage[7] = 'right';

// remove Learning from array (First element)
secretMessage.shift();

// add Programming to the start of the array
secretMessage.unshift('Programming');

// remove and replace element from array
secretMessage.splice(6, 5, 'know,')

// Joining arrays to print a sentence 
console.log(secretMessage.join(' '))