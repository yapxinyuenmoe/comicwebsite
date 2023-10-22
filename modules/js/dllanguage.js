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
onoff = 0;
}
}