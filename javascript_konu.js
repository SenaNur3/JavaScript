//______________________________________________
//Element Seçilmesi 
//______________________________________________
// --Tek Element Seçimi --

//document.getElementById() metodu

// let veri;
// veri = document.getElementById("header");


// //veri= veri.id ;  // veriye veri degişkeni üzerindende erişim sağlanabilir.

// veri.style.color = "blue"
// veri.style.fontSize="50px"

// document.getElementById("header").innerText="yapılacaklar";
// document.getElementById("header").innerHTML="<b>ToDo List</b>"

// console.log(veri)

//document.querySelector() metodu

//console.log(document.querySelector("#header"))

// document.querySelector("li").style.color="blue";
// document.querySelector("li:last-child").style.color="red"; //son eleman
// document.querySelector("li:nth-child(2").style.color="black" //herhangi bir eleman için

//______________________________________________
//clas degiştirmek
//______________________________________________
// document.querySelector("li").className="list-group-item  list-group-item-danger";
// document.querySelector("li").classList.add("active");


//______________________________________________
// --Çoklu element SEçimi --
//______________________________________________
//document.getElementByClassName()


 //veri= document.getElementsByClassName("list-group-item")

// veri=document.getElementsByClassName("list-group-item")[0] //sadece birinci itemi seçer

// veri= veri[2]; // kısa bir şekilde 2. indexe erişim sağlar

// veri[1].style.fontSize="30px"  özellikleri degiştirilir

// for (let i=0 ; i<veri.length;i++ ){
//     console.log(veri[i].style.color="orange");

// }


//document.getElementByTagName()

// veri= document.getElementsByTagName("li");
// veri = document.getElementsByTagName("a"); // bu şekilde yazıldıgında tüm a etikelerini getirir

//li lerin içindeki a etiketleri için 
// veri=document.getElementById("task-list").getElementsByTagName("a");



//document.querySelectorAll()

// veri=document.querySelectorAll("li");//foreach kullanılabilir (nodeList olarak geldigi için)

// veri.forEach(function(item,index){
//   item.textContent=`${index} - item `
// })

//______________________________________________
// --- Elementler üzerinde Gezinme --
//______________________________________________

// let value;

// const todolist =document.querySelector(".list-group");
// const todo= document.querySelector(".list-group-item:nth-child(2");
// const card = document.querySelector(".card");
// value= todolist;
// value= todo;
// value=card;

// // Child Nodes 
// value= todolist.childNodes; //tümünü alır satır atlamaları da sayar nodeList şeklinde gelir

// value= todolist.children; //html collection şeklinde gelir .sadece elementleri seçer
// value = todolist.children[0]; //sadece tek item seçmek için 
// value=todolist.children[todolist.children.length-1]; // son elemanı almak için

// value=todolist.children[1].textContent="degişen item" // 2. elemanın texti degişir

// value=todolist.firstElementChild;
// value=todolist.lastElementChild; 

// value=todolist.children.length;
// value=todolist.childElementCount;


// //parente gitmek için
// value= card.parentElement;

//previousElementSibling  önceki kardeşe gider
// nextElementSibling Sonrakine gider

//______________________________________________
// ----- ELEMENt OLUŞTURMA ----
//______________________________________________

// const li = document.createElement("li");
// // __add class__
// li.className="list-group-item list-group-item-secondary";
// //__attribute__
// li.setAttribute("title","new item");
// li.setAttribute("data-id","5");

// const text= document.createTextNode("new item");
// li.appendChild(text);

// const a= document.createElement("a");
// a.setAttribute("href","#");
// a.className="delete-item float-right";
// a.innerHTML='<i class="fas fa-times"></i>';
// li.appendChild(a);

// document.querySelector("#task-list").appendChild(li);

// console.log(li);





//______________________________________________
// ------ELEMENT SİLME ----
//______________________________________________

// const taskList = document.querySelector("#task-list");
// //taskList.remove(); listenin tümünü siler

// //taskList.childNodes[2].remove();

// //taskList.children[3].remove();


// // __attribute Sİlme __
// //taskList.children[1].removeAttribute("class")

//  console.log(taskList);






//______________________________________________
// ----ELEMENT GÜNCELLEME -----
//______________________________________________

// const cardHeader= document.querySelector(".card-header");

// const h2=document.createElement("h2");
// h2.setAttribute("class","card-header");
// h2.appendChild(document.createTextNode("yeni  listeler"));

// const parent= document.querySelector(".card");
// parent.replaceChild(h2,cardHeader);


// ___classlarda Güncelleme ___

// const taskList=document.querySelector("#task-list")

// let value;
// link= taskList.children[0].children[0];
// // value=link.className;
// // value=link.classList;

// link.classList.add("new");
// link.classList.remove("new");

// //___Attribute Güncelleme_____

// value = link.getAttribute("href"); //linki gösterir
// value=link.setAttribute("href","http://wwww.google.com"); // degeri günceller
// value= link.hasAttribute("href"); // true false döner var yok
// console.log(value);




//______________________________________________
// ______ EVENT LİSTENER VE EVENT OBJESİ _______
//______________________________________________


// const btn= document.querySelector("#btnDeleteAll");
// const btn2= document.querySelector("#btnAddNewTask");
// // btn.addEventListener("click",function(){
// //     console.log("butona tıklandı")
// // })

// btn.addEventListener("click",btnClick);
// btn2.addEventListener("click",btnClick);
// function btnClick(){
//     console.log("butona tıklandı");
// }

// btn.addEventListener("click",function(a){
//    let value;
//    value =a ;
//    value=a.target; //hangi butona tıklandıgını gösterir
//    value=a.target.id // butonun id gösterir

   

//     a.preventDefault(); //bununla a tagınaki href # oldugu için tıklama esnasında referese olur
//         //bunu engellemk içinde bu kod kullanılır.

//         console.log(value);

//     })

//______________________________________________
// _______ Mouse Eventleri ________

// const btn = document.querySelector("#btnAddNewTask");
// const ul= document.querySelector("#task-list");


//-------------------------
//-----click--------------
//-------------------------
// btn.addEventListener("click",run);
// ul.addEventListener("click",run);


//-------------------------
//----double click event----
//-------------------------
//btn.addEventListener("dblclick",run);


//-------------------------
//---mouse down event-----
//-------------------------
// btn.addEventListener("mousedown",run); // tıklayıp bırakana kadar 


//-------------------------
//--mouse up event ---
//-------------------------
// btn.addEventListener("mouseup",run);


//-------------------------
//----mouseenter event-----
//-------------------------
// btn.addEventListener("mouseenter",run);//üzerine gelindiginde fonsiyon çalışır


//-------------------------
//---mouse leave event ---
//-------------------------
//btn.addEventListener("mouseleave",run)


//-------------------------
//---mouse over event ---
//-------------------------
//ul.addEventListener("mouseover",run);


//-------------------------
//---mouse out event ---
//-------------------------
//ul.addEventListener("mouseout",run);


//-------------------------
//---mouse move event ---
//-------------------------

// ul.addEventListener("mousemove",run); //kordinat olarak mouse hareketi piksel olarak  gösterir

// function run(event){
//     console.log(`event type ${event.type}`);
// }



//______________________________________________
// _________ Keyboard Eventleri  _______________
//______________________________________________

//const text = document.getElementById("txtTaskName");

//Focus
//text.addEventListener("focus",run);


//Blur 
//text.addEventListener("blur",run); //odaklanmaktan çıktıgında


//Paste 
//text.addEventListener("paste",run)

//copy
//text.addEventListener("copy",run);

//cut
//text.addEventListener("cut",run)

//select
// text.addEventListener("select",run)

//Keydown
//text.addEventListener("keydown",run) //klavyeden tuşa basttıgında

//keyup
//text.addEventListener("keyup",run);

// function run (e){
//     console.log(e.type);
// }





//______________________________________________
// _________ EVENT bubbling      _______________
//______________________________________________

//içten dışa dogru fonksiyonlar çalışır
//  const form = document.querySelector("form");
//  const cardBody = document.querySelector(".card-body");
//  const card = document.querySelector(".card");
//  const container = document.querySelector(".container");

// form.addEventListener("click",function(e){
//     console.log("form");
//     e.stopPropagation();//evet bubbling önler
// });

// cardBody.addEventListener("click",function(e){
//     console.log("cardBody");
//     e.stopPropagation();
// });

// card.addEventListener("click",function(e){
//     console.log("card");
//     e.stopPropagation();
// });
// container.addEventListener("click",function(e){
//     console.log("container");
//     e.stopPropagation();
// });

//______Event Capturing________

// form.addEventListener("click",function(e){
//     console.log("form");
// },true);

// cardBody.addEventListener("click",function(e){
//     console.log("cardBody");
// },true);

// card.addEventListener("click",function(e){
//     console.log("card");
// },true);
// container.addEventListener("click",function(e){
//     console.log("container");
// },true);


// const deleteItems = document.querySelectorAll(".fa-times");
// deleteItems.forEach(function(item){
//     item.addEventListener("click", function(e){
//    console.log(e.target);
//     })
// });

// x e tıklanınca silme işlemi 
// const ul = document.querySelector("ul");

// ul.addEventListener("click",function(e){
//     if(e.target.className === "fas fa-times"){
//         e.target.parentElement.parentElement.remove();
//       }
// });