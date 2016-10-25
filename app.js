/**
 * Created by Jerry on 2016-10-21.
 */
console.log("Welcome to JS world!");

"use strict";
name = 'jerry'

console.log(name)

/*
'use strict';
name = 'jerry'
console.log(name)
*/

var var1 = 7 ;

console.log(typeof(var1));

var1 = 'string';

console.log(typeof(var1));

var2 = 7;

console.log(var2);

var var2;

greeting();

function greeting() {
    console.log("hello world!");
}

var people = {
    morningGreeting: 'good Moring!',
    greeting: function() {
        console.log(this.morningGreeting);
    }
};

people.greeting();

var speak = people.greeting;
speak();

var speakBind = speak.bind(people);
speakBind();

//============================================

var obj = {
  num: 2
};

var addToThis = function(a, b, c) {
    return this.num + a + b + c;
};

addToThis.call(obj, 1, 2, 3);