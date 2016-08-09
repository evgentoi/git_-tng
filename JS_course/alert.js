"use strict" //код будет работать по современному стандарту ES5

// alert('Я - JavaScript!');
// alert('А это второй алерт!')

// var user = 'Evgen', age = 25, message = 'Hello';
// alert(user + ', ' + message);

var a = 1, b = 1, c, d;

c = ++a;
alert(c);
d = b++;
alert(d);

c = (2+ ++a);
alert(c);
d = (2+ b++);
alert(d);

alert(a);
alert(b);
