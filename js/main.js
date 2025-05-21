// // 요소 노드 생성하기
// const aEl = document.createElement("a");
// document.body.appendChild(aEl);

// // 텍스트 노드 추가하기
// const txtEl = document.createTextNode("길벗");
// document.querySelector("a").appendChild(txtEl);

// // href 속성 노드 추가하기
// const hrefAttr = document.createAttribute("href");
// hrefAttr.value = "https://www.gilbut.co.kr";
// document.querySelector("a").setAttributeNode(hrefAttr);

function removeP() {
    const pEl = document.querySelector("p");
    pEl.parentNode.removeChild(pEl);
}

function toggleP() {
    const pEl = document.querySelector("p");
    if (pEl.style.display === "none")
        pEl.style.display = "block";
    else
        pEl.style.display = "none";
}

function removeAllA() {
    const childNodes = document.body.childNodes;
    childNodes.forEach((node) => {
        if (node.nodeName === "A")
            node.parentNode.removeChild(node);
    })
}

function focusEvent() {
    console.log("focus on");
}
function blurEvent() {
    console.log("focus out");
}

const inputAge = document.querySelector("#age");
inputAge.addEventListener("focus", () => {
    console.log("AGE focus on");
})

inputAge.addEventListener("blur", () => {
    console.log("AGE focus out");
})

inputAge.addEventListener("keypress", (e) => {
    console.log(e.keyCode);
})

// inputAge.onfocus = () => {
//     console.log("AGE focus on");
// }
// inputAge.onblur = () => {
//     console.log("AGE focus out");
// }

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", function() { // 이벤트 객체
    if (this.style.backgroundColor === "red")
        this.style.backgroundColor = "white";
    else
        this.style.backgroundColor = "red";
})

const pEls = document.querySelectorAll("p");
pEls.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (e.target.style.color === 'red') {
            e.target.style.color = 'black';
        } else {
            e.target.style.color = 'red';
        }
    });
})