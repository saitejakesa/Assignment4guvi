var request = new XMLHttpRequest();
//it is used to interact the client with the server.
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//This indicates that we have to use which type of http method
request.send();
//This is uesd for sending connections to the server and the path is establishing

//Once the server gives 200(sucess) i.e recieved from  the server
//The data recieved from server is in string format and we are converting to proper object notation because using string we cannot perform proper manipulation operations
//for http request we must nead onload event
request.onload=function(){
var data=JSON.parse(request.response);//coverts from string to JSON
//console.log(data)
//console.log(data[2].capital)
for(i=0;i<data.length;i++){
    console.log(data[i].flag)
}
}
