//import {calc,name,age} from './mod4.js';
import * as mod from './mod4.js';   // mods.name => rahul

import {calc as c,name as n,age as a} from './mode5.js';

console.log(`name : ${mod.name}, age :${mod.age}`)
console.log(`name : ${n}, age :${a}`)


var x=c(10,20,30,40)
console.log(`calc value : ${x}`)

console.log(mod.company)

