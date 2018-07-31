<!--스크립트 테그<script>는 들어가면 안댐-->
function BodySetColor(color){
  document.querySelector('body').style.color = color;
}
function CodySetBackgroundColor(color){
  document.querySelector('body').style.backgroundColor = color;
}
function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value === '밤버전'){
  target.style.backgroundColor = 'black';
  target.style.color = 'white';
  self.value = '낮버전ㅋ';
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = 'powderblue';
    i = i + 1;
  }
} else {
  target.style.backgroundColor = 'white';
  target.style.color = 'black';
  self.value = '밤버전';
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = 'pink';
    i = i + 1;
  }
}
}
