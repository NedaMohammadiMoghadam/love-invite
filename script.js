// فعال کردن تقویم شمسی
$("#date").persianDatepicker({
    format: "YYYY/MM/DD",
    autoClose: true
});


// قبول کردن دعوت

function accept(){

let date = document.getElementById("date").value;
let place = document.getElementById("place").value;


if(date=="" || place==""){

alert("اول تاریخ و مکان قرار رو مشخص کن 😊");
return;

}


document.getElementById("card").innerHTML = `

<div class="face boom">
😍❤️
</div>


<h1>
وای قبول کردی!
</h1>


<p>

قرارمون ثبت شد ✨

<br><br>

📅 تاریخ:
<br>
${date}

<br><br>

📍 مکان:
<br>
${place}

<br><br>

منتظر یک روز قشنگ باش ❤️

</p>

`;

}




// وقتی نه می زند

function noAnswer(){


document.getElementById("card").innerHTML = `


<div class="face">
😳
</div>


<h1>
یک سوال مهم...
</h1>


<p>

این «نه» قاطع بود؟
😂

<br><br>

یا هنوز نیاز به تلاش بیشتر دارم؟

</p>



<button onclick="finalNo()">
نه قاطع بود 😐
</button>


<button onclick="tryAgain()">
تلاش بیشتر 😎
</button>


`;

}




// نه قاطع

function finalNo(){


document.getElementById("card").innerHTML = `


<div class="face">
🥺💔
</div>


<h1>
باشه...
</h1>


<p>

پیامت رو گرفتم.

<br><br>

شاید یک روز با یک دعوت بهتر برگردم ❤️

</p>


`;

}





// تلاش بیشتر

function tryAgain(){


document.getElementById("card").innerHTML = `


<div class="face">
😄✨
</div>


<h1>
پس هنوز امید هست!
</h1>


<p>

به زودی با یک درخواست بهتر و جذاب‌تر میام ❤️

</p>


`;

}
