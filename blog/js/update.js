// window.onload = function() {
var requestURL = 'https://py.wangdu.site/software/?format=json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var superHeroes = request.response;
    showHeroes(superHeroes);
};

function showHeroes(jsonObj) {
    var imgName = [jsonObj]
    var tBodys = ['tbMain1']
    for (var i = 0; i < imgName.length; i++) {
        var tbody = document.getElementById(tBodys[i]);
        for (var j = 0; j < imgName[i].length; j++) { //遍历一下json数据
            // console.log(imgName[i][j]);
            var trow = getDataRow(imgName[i][j]); //定义一个方法,返回tr数据
            tbody.appendChild(trow);
        }
    }
};

// }

function getDataRow(h) {
    var row = document.createElement('tr'); //创建行
    var idCell = document.createElement('td'); //创建第一列id
    idCell.innerHTML = h.yym + '(' + h.version + ')'; //填充数据
    row.appendChild(idCell); //加入行  ，下面类似
    var bigImg = document.createElement('a');
    // var wp_str=h.wp_url
    var text = document.createTextNode('高速下载👍');
    var nameCell = document.createElement('td'); //创建第二列name
    bigImg.href = h.wp_url;
    bigImg.target = '_blank';
    bigImg.appendChild(text);
    nameCell.appendChild(bigImg);
    row.appendChild(nameCell);
    // console.log(bigImg);
    return row; //返回tr数据	 
}
