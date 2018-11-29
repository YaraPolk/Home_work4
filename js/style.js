document.getElementById('style').onclick = function() {
    var elem = document.getElementsByTagName('button');
    for(var i=0; i < elem.length; i++) { 
    elem[i].style.cssText = "color: red; font-size: 26px;";
    }
    document.body.style.backgroundColor = 'green';
}