

function checkgreet() {
    var time = new Date();
    // document.getElementById("showtime").innerHTML = "Time is " + time;
    var message = document.getElementById("showMessage");

    if (time.getHours() < 12) {
        message.innerHTML = "Good Morning";
        var alertMessage = "Hi, this time is for your Tea."
    }
    else if (time.getHours() < 15) {
        message.innerHTML = "Good Afternoon !";
    }
    else if (time.getHours() < 19) {
        message.innerHTML = "Good Evening !";
        var alertMessage = "Hi, please have snaks."

    }
    else if (time.getHours() < 24) {
        message.innerHTML = "Good Night !";
    }
    else {
        message.innerHTML = "somethinf went wrong !";
    }

    switch (time.getDay()) {

        case 0: Day = "Today is  Sunday";
            break;
        case 1: Day = " Today is  Monday";
            break;
        case 2: Day = "Today is  Tuesday";
            break;
        case 3: Day = " Today is  Wednesday";
            break;
        case 4: Day = "Today is   Thrusday";
            break;
        case 5: Day = " Today is  Friday";
            break;
        case 6: Day = "Today is  Saturday";
            break;
        default: Day = "Today is somthng is error";
            break;

    };


    var date1 = document.getElementById("showDate");
    var months = time.getMonth() + 1;
    date1.innerHTML = time.getDate() + "/" + months + "/" + time.getFullYear();



    var showDay = document.getElementById("showDay").innerHTML = Day;
    var showTime = document.getElementById("showTime").innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds();





    document.getElementById("showalert").innerHTML = alertMessage;
    // showalert


};

setInterval(checkgreet, 1000);

function spilitMoney() {

    var totalAmount = document.getElementById("amount").value;
    var totalPerson = document.getElementById("persons").value;


    var PerpersonAmount = totalAmount / totalPerson;
    var PerpersonAmount = String(PerpersonAmount).slice(0, 9);

    if (PerpersonAmount.length > 7) {
        var print = document.getElementById("finalValue").innerHTML = "<h3> Rs. " + PerpersonAmount + " </h3>";

    }
    else {
        var print = document.getElementById("finalValue").innerHTML = "Rs. " + PerpersonAmount;

    }


    // finalValue

};
// setInterval(spilitMoney, 1000);


// Temperature calculator
function tapman() {
    var converto = document.getElementById("maketo").value;
    var inputdata = document.getElementById("inputedData").value;

    if (converto == "c") {
        var result = (inputdata - 32) * 5 / 9;
        var result = String(result).slice(0, 6);
        document.getElementById("showTemp").innerHTML = result + " &#176;C ";


    } else if (converto == "f") {
        var result = (inputdata * 9 / 5) + 32;
        document.getElementById("showTemp").innerHTML = result + " &#176;F";

    }
    else {
        document.getElementById("showTemp").innerHTML = " error";

    }
};


var quotes = [
    ["You only live once, but if you do it right, once is enough.", "Mae West"],
    ["I am so clever that sometimes I don't understand a single word of what I am saying.", "Oscar Wilde"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
    ["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.", "Albert Einstein"]
    ["It is our choices, Harry, that show what we truly are, far more than our abilities.", "J.K. Rowling, Harry Potter and the Chamber of Secrets"],
    ["All men who have turned out worth anything have had the chief hand in their own education.", "Walter Scott"],
    ["Trust yourself. You know more than you think you do.", "Benjamin Spock"],
    ["No one can make you feel inferior without your consent.", "Eleanor Roosevelt, This is My Story"],
    ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"],
    ["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", "H. Jackson Brown Jr., P.S. I Love You"],
    ["Talk is Cheap, Show me the Code", "Er. Mayur Sharma"],
    ["Follow the rule of the Sun,Shine and let the world Burn", "Er. Mayur Sharma"]
];
var a = document.getElementById("quotes-line").innerHTML = quotes[1];
var b = document.getElementById("author-name").innerHTML = quotes[1][1];
function Quotes1() {

    var currentquote = Math.floor(Math.random() * quotes.length);

    // alert(currentquote);
    document.getElementById("quotes-line").innerHTML = quotes[currentquote][0];
    document.getElementById("author-name").innerHTML = quotes[currentquote][1];

}
// setInterval(Quotes1,1000);


// get random rgba color code 
function changeColor(colorCode) {
    var ColorR = Math.floor(Math.random() * 255).toString();
    var ColorG = Math.floor(Math.random() * 255).toString();
    var ColorB = Math.floor(Math.random() * 255).toString();

    var colorCode = "rgb(" + ColorR + "," + ColorG + "," + ColorB + ")";

    document.getElementById("showCode").innerHTML = "Color Code  : " + '<input type="text" id="mycolorcode" value="'+ colorCode +'">'+' <button href="#" class="btn btn-sm btn-dark  m-0 text-center" onclick="getcode()"><i class="fa fa-copy"></i> </button>';
    var divId = document.getElementById("changeColor").style.backgroundColor = "rgb(" + ColorR + "," + ColorG + "," + ColorB + ")";

    var BorderR = Math.floor(Math.random() * 255).toString();
    var BorderG = Math.floor(Math.random() * 255).toString();
    var BorderB = Math.floor(Math.random() * 255).toString();
    var divId = document.getElementById("changeColor").style.border = "5px solid rgb(" + BorderR + "," + BorderG + "," + BorderB + ")";


};



function getcode() {
    var mycolorcode = document.getElementById("mycolorcode");
    mycolorcode.select();
    document.execCommand("Copy");
    // alert("text copied: " + mycolorcode.value);
};

setInterval(changeColor,1000);