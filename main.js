var body = document.getElementsByTagName("body")[0];
var color = "black";
var colors = ['#410000', 'red', '#C20000', '#FFC3C2', '#FF0000',
              '#404000', '#836FFF', '#00C5CD', '#54FF9F', '#8B8B7A',
              '#EEEE00', '#CD950C', '#FFA54F', '#A3A3A3', '#458B74',
              '#00EEEE', '#00868B', '#00BFFF', '#CD69C9', '#473C8B',
              '#708090', '#7FFFD4', '#FFFFE0', '#CDC8B1', '#FAEBD7',
              '#228b22', '#b2dfee', '#f08080', '#8470ff', '#8b2252',
              '#ffff00', '636363', '#1e90ff', '#b4eeb4', '#483d8b',
              '#eee8cd', '#00008b', '#458b74', '#76eec6', '#7fffd4',
              '#8b8378', '#faebd7', '#f0f8ff', '#a52a2a', '#ee3b3b',
              '#68228b', '#ff1493', '#cd1076','#dcdcdc', '#242424',
              '#575757', '#00cd00', '#00ee00', '#adff2f', '#eee0e5',
              '#68838b', '#d1eeee'];

function createCanvas() {
  for (var i = 0; i < colors.length; i++) {
    var div1 = document.createElement("div");

    div1.style.backgroundColor = colors[i];
    attachEventForColorDivs(div1);
    body.appendChild(div1);
  }

  for (var j = 1; j < 1768; j++) {
    var div2 = document.createElement("div");
    attachEventForNormalDivs(div2);
    body.appendChild(div2);
  }

}

function colorPicker(colorChoice) {
  color = colorChoice;
}

function attachEventForNormalDivs(el){
  el.addEventListener('click', function(){
    this.style.backgroundColor = color;
  });
}

function attachEventForColorDivs(el) {
  el.addEventListener('click', function(){
    color = this.style.backgroundColor;
  });
}

createCanvas();
