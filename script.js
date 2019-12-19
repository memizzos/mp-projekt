/**
 * @type {HTMLElement}
 */
const wrap = document.querySelector("#wrap");
/**
 * @type {HTMLElement}
 */
const ui = document.querySelector("#ui");
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.querySelector("#board");
const ctx = canvas.getContext("2d");
var ClientXTable = [];
var ClientYTable = [];

canvas.onclick = function(e) {
    e = e || window.event;
    var tab = [];
    var pX = 0;
    var pY = 0;
     
    if (e.pageX || e.pageY) {
        pX = e.pageX;
        pY = e.pageY;
    } else if (e.clientX || e.clientY) {
        pX = e.clientX + canvas.scrollLeft;
        pY = e.clientY + canvas.scrollTop;
    }
    ClientXTable.push(pX);
    ClientYTable.push(pY)
    console.log(ClientXTable, ClientYTable);
}