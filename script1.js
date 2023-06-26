
// Tarayıcı Depolama Alanları

//_____________________________________
// Session Storage
//_____________________________________

// tarayıcı kapanınca veriler gider

// const add = document.querySelector("#add");
// const del= document.querySelector("#delete");
// const clear = document.querySelector("#clear");

// const addkey=document.querySelector("#addkey");
// const addvalue=document.querySelector("#addvalue");
// const deletekey=document.querySelector("#deletekey");

// add.addEventListener("click",addItem);
// del.addEventListener("click",deleteItem);
// clear.addEventListener("click",clearItem);


// function addItem(e){
//     sessionStorage.setItem(addkey.value,addvalue.value);
// }
// function deleteItem(e){
//     sessionStorage.removeItem(deletekey.value);
// }
// function clearItem(e){
//     sessionStorage.clear();
// }






//_____________________________________
// Local Storage
//_____________________________________



//----setItem veri ekler---
//veriler string olarak tutulur 2 storageda da 

 localStorage.setItem("programlama","javascript");
 localStorage.setItem("bilgisyar","6000");



//--GetItem---

// const value = localStorage.getItem("programlama");
// console.log(value);


//---Clear Local Storage--
// localStorage.clear();

localStorage.getItem("klavye");


if(localStorage.getItem("klavye")=== null){
  console.log("sorgulanan veri bulunamadı");
}
else {
    console.log("sorgulanan veri bulundu");
}