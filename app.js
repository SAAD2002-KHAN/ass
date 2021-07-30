// 1
// var fullNAme = prompt("Enter your full name.");
// var lastName = prompt("Enter your last name.");
// var name = document.write("Greetings" + " " + fullNAme + " " + lastName);

// 2
// var phone = prompt("Enter your favourite phone name.");
// document.write("My favourite phone name is " + phone);

// 3
// var country = "Pakistani";
// var index = country.indexOf("n");
// document.write(index);

// 4
// var Greetings = "HELLO WORLD";
// var last = Greetings.lastIndexOf("L");
// document.write(last);

// 5
// var country = "Pakistani";
// var character = country.charAt(3);
// document.write(character);

// 6
// var str = prompt("Enter anything");
// var str2 = prompt("Enter anything");
// document.write(str.concat(str2));

// 7
// var city = "Hyderabad";
// var rep = city.replace(/Hyder/i,"Islam");
// document.write(rep);

// 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep = message.replace(/and/g,"&");
// document.write(rep);

// 9
// var num = "472";
// var alpha = Number(num);
// document.write(alpha);

// 10
// var input = prompt("lowercase");
// var output = input.toUpperCase();
// document.write(output);

// 11
// var input = prompt("anything");
//  function titleCase(string){
//     var output = string.toLowerCase().split(" ");
//     for (var i = 0; i< output.length; i++){
//         output[i] = output[i][0].toUpperCase() + output[i].slice(1);
//     }
//     document.write(output.join(" "));
//     return output;
// }
// titleCase(input);

// 12
// var num = 35.36;
// var bravo = num.toString().replace(".","");
// document.write(bravo);

// 13
// var userName=prompt("Enter your UserName: ");
// var message;
// var split=[];
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     split[i]=userName.split("&nbsp;");
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("please enter a valid userName");                                                                                                                   
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             split[i]=userName.split("&nbsp;");
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }

// }
// alert(message);

// 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("search any desert");
// var work = user.indexOf;
// for(var i = 0; i <= 4; i++){
//     if(work === A[i]){
//         alert(user + " is available at " + work)
//     }
//     else{
//         alert("We are sorry " + user + " is not available in our bakery.");
//     }
// };

// 15
// var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }

// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// myInput.onkeyup = function() {
//   var lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
// }

//   var upperCaseLetters = /[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }

//   var numbers = /[0-9]/g;
//   if(myInput.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }

//   if(myInput.value.length >= 6) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }
 
// 16
// var str = "University of Karachi";
// for (var i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
//   }

// 17
// var user = prompt("anything");
// var output = user.slice(-1);
// document.write(output);

// 18
// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
 
// document.write(count("The quick brown fox jumps over the lazy dog", 'the'));
