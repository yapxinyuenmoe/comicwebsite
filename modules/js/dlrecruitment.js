onoff = 0;
function darklight(){
if (onoff == 0){
/*
+ ""
*/
document.getElementById('darklightstyle').innerHTML=
"#darklighticon{"
+ "border-style : solid ;"
+ "border-color : black ;}";
document.getElementById('sinput').innerHTML=
"";
document.getElementById('srstyle').innerHTML=
"#sideranks{"
+ "background-color: rgb(210, 213, 213);}"
+ ".srdesc{"
+ "color:grey;}";
document.getElementById('wstyle').innerHTML=
"#word{"
+ "filter:invert(1)}";
onoff = 1;
}
else{
document.getElementById('darklightstyle').innerHTML=
"html{"
+ "background-color : black ;"
+ "}"
+ "#darklighticon{"
+ "filter : invert(1) ;"
+ "border-color : black ;}";
document.getElementById('sinput').innerHTML=
".search input {"
+ "background-color: rgb(26, 25, 25);}";
document.getElementById('srstyle').innerHTML=
"srstyle{"
+ "background-color: rgb(45, 42, 42);}"
+ ".srtitle{"
+ "color:white;}"
+ ".srdesc{"
+ "color:lightgrey;}";
document.getElementById('wstyle').innerHTML=
"";
onoff = 0;
}
}