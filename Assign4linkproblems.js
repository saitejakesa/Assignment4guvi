//problem 1
var a
var b
var c
var d
console.log(a)
//o/p:undefined
console.log(b)
//o/p:undefined
console.log(c)
//o/p:undefined
console.log(d)
//o/p:undefined
console.log("------------------------------------------")

//problem 2
var myvar= 1;
console.log("myvarl value ="+myvar);
//o/p:myvarl value =1

console.log("------------------------------------------")

//problem 3
var firstName="Sai Teja"
var secondName="Kesa"
var maritalStatus="No"
var country="India"
var age=25

console.log("first name="+firstName)
console.log("second name="+secondName)
console.log("marital status="+maritalStatus)
console.log("country="+country)
console.log("age="+age)
 //first name=Sai Teja
// Assign4linkproblems.js:31 second name=Kesa
// Assign4linkproblems.js:32 marital status=No
// Assign4linkproblems.js:33 country=India
// Assign4linkproblems.js:34 age=25

console.log("--------------------------------------------")

//problem 4
console.log("first name="+firstName+"/second name="+secondName+"/marital status="+maritalStatus+"/country="+country+"/age="+age)
console.log("--------------------------------------------")
//O/P: first name=Sai Teja/second name=Kesa/marital status=No/country=India/age=25

//problem 5

let e="Hi"
let f=true
let g
let h=null
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))
console.log(typeof(h))
//O/P
// string
//  boolean
//  undefined
//  object
console.log("--------------------------------------------")

//problem 6

let i="100"

console.log("Using Parse INT "+parseInt(i))
console.log("Using Number"+Number(i))
console.log("Using Plus sign(+) "+i)
  //O/p
//Using Parse INT 100
// Using Number100
// Using Plus sign(+) 100
console.log("--------------------------------------------")

//problem 7
//Truthy and Falsy Values
//Truthy Values
//A truthy value is the value that is considered true when encountered in boolean context
//Eg:Truthy values include non empty values like lists,tuples, strings, dictionaries etc.
//Numeric values that are not zero.

//Falsy Values
//A Falsy value is the value that is considered flase when encountered in boolean context.
//Eg: Sequences and collections Empty lists[], Empty Tuples(), Empty dictionaries {}, Empty ranges range(0)
//constants, NAN, False, Null  

//Task 2: Simple Programs todo for Operators
//Square of a number
let j=10
console.log("Square of a number is"+j*j)
//Square of a number is100--------o/p
console.log("---------------------------------------------------")

//Swapping 2 numbers
let k=10
let l=15
let temp

temp=k;
k=l
l=temp
console.log("k="+k)
console.log("l="+l)
// k=15
// l=10
console.log("--------------------------------------------")

//Addition of 3 numbers
let p=10
let q=20
let r=30
let add=parseInt(p+q+r)
console.log("Addition of three numbers is "+add)
//Addition of three numbers is 60----O/p
console.log("--------------------------------------------")

//Celsius to Fahrenheit conversion
let celsius=-15
let fahrenheit=(celsius*9/5)+32
console.log("celsius to farenheit conversion "+fahrenheit)
//celsius to farenheit conversion 5
console.log("--------------------------------------------")

//Meter to miles
let meter=5000;
let miles=meter*0.00062137
console.log("meter to miles conversion "+miles)
//meter to miles conversion 3.10685
console.log("--------------------------------------------")


//Pounds to kg
let pounds=500;
let kgs=pounds*0.45359237
console.log("Pounds to kgs conversion ="+kgs)
//Pounds to kgs conversion =226.796185
console.log("--------------------------------------------")

//Calculate Batting Average
let RunScored=5000
let Inningsplayed=75
let notout=16
let BattingAverage=RunScored/(Inningsplayed-notout)
console.log("Batting Average"+BattingAverage)
//Batting Average84.7457627118644
console.log("--------------------------------------------")

//Power of any number x ^ y
let x=10
let y=4
let z=Math.pow(x,y)
console.log("x^y="+z)
//x^y=10000
console.log("--------------------------------------------")


//Calculate Simple Interest
let principle=5000
let time=5
let rate=2
let SI=principle*time*rate/100
console.log("Simple Intrest Amount"+SI)
//Simple Intrest Amount500
console.log("--------------------------------------------")

//Calculate five test scores and print their average

let a1=[100,30,25,75,63]
var sum=0
let length=a1.length
console.log("length is "+length)
//
console.log("--------------------------------------------")

function totalScore(...a1){
for(let i=0;i<length;i++){
 sum=sum+a1[i]
}
return sum
}
let total=totalScore(100,30,25,75,63)
console.log("average is "+total/length)
//average is 58.6
console.log("--------------------------------------------")


//Calculate area of an equilateral triangle

let side=parseInt(5)
let areaEquil=(Math.sqrt(3)/4)*Math.pow(side,2)
console.log("Area of Equilateral Triangle is "+areaEquil.toFixed(2))
//Area of Equilateral Triangle is 10.83
console.log("--------------------------------------------")

//Area Of Isosceles Triangle

let base=parseInt(5)
let height=parseInt(10)
let areaiso=0.5*base*height
console.log("Area of Isosceles Triangle = "+areaiso.toFixed(2))
//Area of Isosceles Triangle = 25.00
console.log("--------------------------------------------")


//Volume Of Sphere
let radius=parseInt(7)
let volumeSphere=(4*Math.PI*Math.pow(radius,3))/3
console.log("volume of sphere is "+volumeSphere)
//volume of sphere is 1436.755040241732
console.log("--------------------------------------------")

//Volume Of Prism
let BaseArea=parseInt(10)
let Height=parseInt(4)
let volumeprism=BaseArea*Height
console.log("Volume of Prism "+volumeSphere)
//Volume of Prism 1436.755040241732
console.log("--------------------------------------------")

//Find area of a triangle
let triabase=10
let triaheight=12
let areatri=0.5*triabase*triaheight
console.log("Area of Triangle is "+areatri)
//Area of Triangle is 60
console.log("--------------------------------------------")


//Discount Calculation
let actualcost=100
let soldcost=112
let Discount=(soldcost-actualcost)/100
console.log("Discount of a product is "+Discount)
//Discount of a product is 0.12
console.log("--------------------------------------------")

//Diameter Circumference and area of a circle
let radiuscir=10
let diameter=2*radius
let Circumference=Math.PI*diameter
let areacir=Math.PI*Math.pow(radiuscir,2)
console.log("Diameter of circle is "+diameter)
console.log("Circumference of circle is "+Circumference)
console.log("Area of Circle is "+areacir)
// Diameter of circle is 14
// Assign4linkproblems.js:211 Circumference of circle is 43.982297150257104
// Assign4linkproblems.js:212 Area of Circle is 314.1592653589793
console.log("--------------------------------------------")

//Arthematic Operations
let num1=10
let num2=5
let Arth_add=num1+num2
let Arth_sub=num1-num2
let Arthmul=num1*num2
let Arth_mod=num1%num2
let Arth_expo=num1**num2
console.log("Addition of two numbers "+Arth_add)
console.log("Subtraction of two numbers is "+Arth_sub)
console.log("Multiplication of two numbers is "+Arthmul)
console.log("Modulus of two numbers is "+Arth_mod)
console.log("Exponent of two numbers is "+Arth_expo)
// Addition of two numbers 15
// Assign4linkproblems.js:224 Subtraction of two numbers is 5
// Assign4linkproblems.js:225 Multiplication of two numbers is 50
// Assign4linkproblems.js:226 Modulus of two numbers is 0
// Assign4linkproblems.js:227 Exponent of two numbers is 100000
console.log("--------------------------------------------")

var m=5
var n=5
//let flag=false
function pattern(m,n){
if(n==0){
    return 0
}
else{
    console.log("*".repeat(m))
    pattern(m,n-1)
}
}
pattern(m,n)
// *****
// *****
// *****
// *****
// *****
console.log("--------------------------------------------")



//percentage to cgpa
let gradepoints=[]
let marks=[85,90,92,86,58,63]
let total5=0
for(let i20=0;i20<marks.length;i20++){
    total5=total5+marks[i20]
}
console.log(total5)
let cgpa=total5/marks.length
for(let i=0;i<marks.length;i++){   
    if(100>marks[i]>90){
        console.log(10)
    }
    else if(80<marks[i]<70){
        console.log(9)
    }
    else if(70<marks[i]<60){
        console.log(8)
    }
    else if(60<marks[i]<50){
        console.log(7)
    }
    else if(50<marks[i]<40){
        console.log(6)
    }
    else if(40<marks[i]<30){
        console.log(5)
    }
    else if(30<marks[i]<20){
        console.log(4)
    }
    else{
        consoel.log(0)
    }

    //console.log(gradepoints)
}
//Output:6


//Task 3: Simple Programs todo for Condition , Looping and Arrays
//patterns
let string=""
for(let z=0;z<7;z++){
    for(let y=0;y<z;y++){
        string +="#"
    }
    string +="\n"
}
console.log(string)
// #
// ##
// ###
// ####
// #####
// ######

var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]

console.log(strArray)
// 0: "<option>Jazz</option>"
// 2: "<option>Blues</option>"
// 4: "<option>New Age</option>"
// 6: "<option>Classical</option>"
// 8: "<option>Opera</option>"

// for(i1=0;i1<strArray.length;i1++){
//     //console.log(strArray)
//     $("option:contains"+strArray[i1])
// }

//var myarray=[11,22,33,44,55]
// write a code to count the elements in the array . Don’t use length property
// Declare an empty array

var myarray=[11,22,33,44,55]
let count=0
let z1=0
while(myarray[z1]>0){
    count++
    z1++
}
console.log(count)
//5
console.log("------------------------------")

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=[]
foods=["rice","biryani", "curdrice", "tomato rice","fried rice","pulihora","dosa", "poori", "idli","upma","noodles","eggomlete", "egg rice","cheeseburger","friedchicken","Thmbs up", "sprite", "coca cola", "pepsi", "maaza", ]
  console.log(foods.length)  
//20
  console.log("Fifth item in fav list -"+foods[4])
//Fifth item in fav list -fried rice

  let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
    friends.splice(0,1,"Munnabai")
    console.log(friends)
    //(6) ['Munnabai', 'MaryJane', 'CaptianAmerica', 'Munnabai', 'Jeff', 'AAK chandran']

console.log("------------------------------------------")
//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica

let newFriends=[]
for(let i=0;i<friends.length;i++){
    newFriends.push(friends[i])
    if(friends[i]=="CaptianAmerica"){
        break
    }
}
console.log(newFriends)
//(3) ['Munnabai', 'MaryJane', 'CaptianAmerica']
console.log("------------------------------------------")
let name2
const friends2 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    function dataHandling(input, name2){
    for (var i = 0; i < input.length; i++) {
    if(friends[i]==name2){
        return true
    }
    }
    }
    let sortedArray=[]
    let friends9=[]
    var friends10 = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
        ];
        var friends11 = [
        "Gabbar",
        "Rajinikanth",
        "Mass",
        "Spiderman",
        "Jeff",
        "ET"
        ];
        // function dataHandling(input){
        mainfriends=friends10.concat(friends11)
        console.log(mainfriends)
        sortedArray=mainfriends.sort(function(a,b){
          var nameA=a.toUpperCase();
          var nameB=b.toUpperCase();
          if(nameA<nameB){
              return -1
          }
          else if(nameA>nameB){
              return 1
          }
          else{
              return 0
          }  
        });
        dataHandling(friends9);
        console.log(sortedArray)    
//(12) ['AAK chandran', 'CaptianAmerica', 'ET', 'Gabbar', 'Jeff', 'Jeff', 'Mari', 'MaryJane', 'Mass', 'Munnabai', 'Rajinikanth', 'Spiderman']
console.log("---------------------------------------------------------")
//Get the first item, the middle item and the last item of the array
let newArray2=[mainfriends[0],mainfriends[Math.ceil((mainfriends.length-1)/2)],mainfriends[(mainfriends.length-1)]]
console.log(newArray2)
//['AAK chandran', 'Mari', 'Spiderman']
console.log("---------------------------------------------------------")

mainfriends.splice(13,0,'saiteja')
mainfriends.splice(0,0,'vikas')
console.log(mainfriends)
//['vikas', 'AAK chandran', 'CaptianAmerica', 'ET', 'Gabbar', 'Jeff', 'Jeff', 'Mari', 'MaryJane', 'Mass', 'Munnabai', 'Rajinikanth', 'Spiderman', 'saiteja']
console.log("---------------------------------------------------------")


//Add Mr or Ms to the names in the friends array.

//let mainfriends=['vikas', 'AAK chandran', 'CaptianAmerica', 'ET', 'Gabbar', 'Jeff', 'Jeff', 'Mari', 'MaryJane', 'Mass', 'Munnabai', 'Rajinikanth', 'Spiderman', 'saiteja']
let emptynewarray=[]
for(let i3=0;i3<mainfriends.length;i3++){
    if(i3<7 || 9<i3<11){
        emptynewarray.push("mr "+mainfriends[i3])
    }
    else{
        emptynewarray.push("mrs "+mainfriends[i3])
    }
}
console.log(emptynewarray)

// 0: "mr vikas"
// 1: "mr AAK chandran"
// 2: "mr CaptianAmerica"
// 3: "mr ET"
// 4: "mr Gabbar"
// 5: "mr Jeff"
// 6: "mr Jeff"
// 7: "mr Mari"
// 8: "mr MaryJane"
// 9: "mr Mass"
// 10: "mr Munnabai"
// 11: "mr Rajinikanth"
// 12: "mr Spiderman"
// 13: "mr saiteja"



//4. Concat all the names the friends array and return as comma “,” seperated string.

var userString=mainfriends.toString()
console.log(userString)

//vikas,AAK chandran,CaptianAmerica,ET,Gabbar,Jeff,Jeff,Mari,MaryJane,Mass,Munnabai,Rajinikanth,Spiderman,saiteja
console.log("---------------------------------------------------------")

//5. Find the friends names who has letter ‘a’ and return the list.

let Aarray=[]
let Afilter=mainfriends.filter(x=>x.includes("a"))
console.log(Afilter)
//(14) ['vikas', 'AAK chandran', 'CaptianAmerica', 'ET', 'Gabbar', 'Jeff', 'Jeff', 'Mari', 'MaryJane', 'Mass', 'Munnabai', 'Rajinikanth', 'Spiderman', 'saiteja']
console.log("---------------------------------------------------------")

//6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

let sum1=0
for(let i6=0;i6<mainfriends.length;i6++){
    let a6= mainfriends[i6]

    let b6=a6.length
    sum1=sum1+b6
}
console.log(sum1/mainfriends.length)
//O/P:7

//7. Find the names and return the list starting with letter M.

let Mmap=mainfriends.filter(function(y){
    if(y[0]==="M"){
        return y
    }
})
console.log(Mmap)
//['Mari', 'MaryJane', 'Mass', 'Munnabai']

//8. Find the name with max characters and return the name.

let maxlength = function fn() {

    let length7 = 0;
    let value = "";
    
    for (i7 = 0; i7 < mainfriends.length; i7++) {
  
      if (mainfriends[i7].length > length7) {
  
        length7 = mainfriends[i7].length;
        value = mainfriends[i7];
  
      }
  
    }
    return value;
  }

console.log(maxlength())

//Output CaptianAmerica

//9. Find the name with min characters and return the name.
let minlength = function fn() {

    let length8 = Number.MAX_SAFE_INTEGER;
    let value2 = "";
    
    for (i8 = 0; i8 < mainfriends.length; i8++) {
  
      if (mainfriends[i8].length < length8) {
  
        length8 = mainfriends[i8].length;
        value2 = mainfriends[i8];
  
      }
  
    }
    return value2;
  }

console.log(minlength())

//ET

//Find the average in the array below.
// Make sure you add only the numbers and do avg.
// const friendsInfo = [6, 12, ‘Mari’, 1, true, ‘Munnabai’, ‘200’, ‘CaptianAmerica’, 8, 10];

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let sum5=0
for(i9=0;i9<friendsInfo.length;i9++){
    if(Number.isInteger(friendsInfo[i9])){
        sum5=sum5+friendsInfo[i9]
    }
}
console.log(sum5)

//Output 37

// Print the contents of the input variable
var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input){
for (var i20 = 0; i20 < input.length; i20++) {
console.log(input[i20])
}
}
dataHandling(input);

//Output 
//(5) ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']
//  (5) ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar']
//  (5) ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak']0: "0003"1: "Winona"2: "Ambon"3: "25/12/1965"4: "Memasak"length: 5[[Prototype]]: Array(0)
//  (5) ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']

// myobject = {1:one,"11":1,"name":"arun"}
// console.log(myobject.11); 
// console.log(myobject.name);

//Add a new key value pair to myobject
// key : ten
// value : ten
myobject = {1:"one","11":1,"name":"arun"}
myobject['ten']="ten"
console.log(myobject);
//{"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.

//Write out an object literal to represent the data below.
function getaddress(...address){
    console.log(`Address is ${address}`)
}
getaddress("Guvi", "Geek", 6, "IIT-M RP","Chennai")
//Address is Guvi,Geek,6,IIT-M RP,Chennai


class companyaddress{
    	    constructor(comapanyName,parentCompany,number,landmark,city){
    	        this.companyName=comapanyName;
    	        this.parentCompany=parentCompany;
    	        this.number=number;
    	        this.landmark=landmark
    	        this.city=city;
    	    }
    	
    	getcompanyAddress(){
    	    return `
    	    companyName:${this.companyName}
    	    parentCompany:${this.parentCompany}
    	    number:${this.number}
	        landmark:${this.landmark}
	        city:${this.city}`
    	
    	}
    	}
    	
    	var guviaddress=new companyaddress("Guvi", "Geek", "6", "IIT-M RP","Chennai")
    	console.log(guviaddress.getcompanyAddress());
	
    	var amazonaddress=new companyaddress("Amazon", "Inc",31,"SP Infocity","Chennai")
    	console.log(amazonaddress.getcompanyAddress())
    	var googleaddress=new companyaddress("Google", "Alphabet", 34,"Amphitheater Parkway","MountainView")
    	console.log(googleaddress.getcompanyAddress())
    	var teslaaddress=new companyaddress("Tesla", "Inc",32,"333 Santana Row","San Jose")
    	console.log(teslaaddress.getcompanyAddress())

        //Output
//         companyName:Guvi
//         parentCompany:Geek
//         number:6
//         landmark:IIT-M RP
//         city:Chennai
// Assign4linkproblems.js:666 
//         companyName:Amazon
//         parentCompany:Inc
//         number:31
//         landmark:SP Infocity
//         city:Chennai
// Assign4linkproblems.js:668 
//         companyName:Google
//         parentCompany:Alphabet
//         number:34
//         landmark:Amphitheater Parkway
//         city:MountainView
// Assign4linkproblems.js:670 
//         companyName:Tesla
//         parentCompany:Inc
//         number:32
//         landmark:333 Santana Row
//         city:San Jose