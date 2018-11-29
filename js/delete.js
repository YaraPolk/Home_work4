document.getElementById('delete').onclick = function() {
    document.body.innerHTML = '';
    document.body.innerHTML = '<div><div><div><div>Работает!!!</div></div></div></div>';
    var but = document.getElementsByTagName('div');
    but[0].style.cssText = "display: flex; flex-basis: 100%; height: 900px; justify-content: center; align-items: center;";
    but[1].style.cssText = "display: flex; width: 400px; height: 300px; justify-content: center; align-items: center; background-color: green;";
    but[2].style.cssText = "display: flex; justify-content: center; align-items: center; background-color: blue; width: 200px; height: 100px; margin: 5px;";
    but[3].style.cssText = "display: flex; justify-content: center; align-items: center; background-color: yellow; width: 180px; height: 70px; font-size: 27px;";
}