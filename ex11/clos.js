function parent() {
    const message = 'Hello World';
 //this message is in the child function and its return value is in the parent function
    function child() {
       alert (message);
    }
 
    child();
 }
 parent();
