function accept(){

let date = document.getElementById("date").value;
let place = document.getElementById("place").value;


if(date === "" || place === ""){

alert("لطفاً تاریخ و مکان قرار را وارد کن 😊");

return;

}


document.querySelector(".card").innerHTML = `

<div class="icon">
😍❤️
</div>


<h1>
قرار ثبت شد!
</h1>


<p>

📅 ${date}

<br><br>

📍 ${place}

<br><br>

منتظر یک خاطره قشنگ باش ✨

</p>

`;

}




function noAnswer(){


document.querySelector(".card").innerHTML = `


<div class="icon">
😳
</div>


<h1>
یک سوال...
</h1>


<p>

این نه قاطع بود؟ 😂

<br><br>

یا نیاز به تلاش بیشتر دارم؟

</p>


<button onclick="finalNo()">
نه قاطع بود 😐
</button>


<button onclick="tryAgain()">
تلاش بیشتر 😎
</button>


`;

}




function finalNo(){


document.querySelector(".card").innerHTML = `


<div class="icon">
🥺💔
</div>


<h1>
باشه...
</h1>


<p>
پیامت رو گرفتم ❤️
</p>


`;

}




function tryAgain(){


document.querySelector(".card").innerHTML = `


<div class="icon">
😄✨
</div>


<h1>
پس هنوز امید هست!
</h1>


<p>
به زودی با یک دعوت بهتر میام ❤️
</p>


`;

}
