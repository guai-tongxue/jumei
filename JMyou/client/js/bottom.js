
let oDiv = document.querySelector(".today_new_ul");
let lis = oDiv.querySelectorAll("li");

let arr = [];
lis.forEach(li => {
    let obj = {};
    obj.src = li.querySelector(".img_box_href img").src;
    obj.commont = li.querySelector(".commit_new_box").innerText;
    obj.title = li.querySelector(".title").innerText;
    let price0 = li.querySelector(".price_box em").innerText;
    let price1 = li.querySelectorAll(".price_box span")[0].innerText;
    obj.price = price0 + price1;
    // let commont = li.querySelector(".commit_new_box").innerText;
    arr.push(obj);
    // arr.push(commont);
})