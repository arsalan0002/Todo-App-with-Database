// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtPeKBs1rYioKttfPjzFwjy9PlbrG_Kt0",
    authDomain: "todo-app-9afc0.firebaseapp.com",
    projectId: "todo-app-9afc0",
    storageBucket: "todo-app-9afc0.appspot.com",
    messagingSenderId: "112154226309",
    appId: "1:112154226309:web:ff577b42e569d7586d83ec",
    measurementId: "G-C0WXGS5SF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// console.log(db);
var main = document.getElementById('main');
var input = document.getElementById('inp');

window.saveValue = function () {

    var obj = {
        db: inp.value
    };
    console.log(obj);
    obj.id = Math.random().toString().slice(2);
    // console.log(obj.id);
    const databaseRef = ref(db, `TodoValue/${obj.id}/`);
    set(databaseRef, obj);

    if (input.value == "") {
        alert("Please Type Something!");
    } else {
        var li = document.createElement("li"); // creating list
        var liText = document.createTextNode(input.value); //creating list text
        li.appendChild(liText);
        //para.setAttribute("onclick" , "abc()");

        //creating edit Button
        var editBtn = document.createElement("button"); // creating
        editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        editBtn.setAttribute("onclick", "editTodo(this)");
        li.appendChild(editBtn);


        //Creating delete Button

        var deleteBtn = document.createElement('button');

        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        deleteBtn.setAttribute("onclick", "deleteTodo(this)");

        li.appendChild(deleteBtn);

        main.appendChild(li);

        input.value = "";

    }

}




// input.value = "";


window.editTodo = function (element) {
    var newValue = prompt('enter Value')
    console.log(element.parentNode.firstChild.nodeValue);
    element.parentNode.firstChild.nodeValue = newValue;
}

window.deleteTodo = function (element) {
    element.parentNode.remove();
    console.log();

}

window.eraseAll = function () {

    main.innerHTML = "";

}
