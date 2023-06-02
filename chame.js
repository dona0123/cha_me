// 코어 객체 사용, pure 함수 사용
// Date, Math 객체를 활용하여 인스타 게시글 시간대 조정
/** 게시글 업로드 날짜로부터 지난 날이 7일 미만일 경우에는 n일로, 7일 이상일 경우에는 n주로 출력 */

function getDaysDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  let diff = date2.getTime() - date1.getTime();
  return Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24)));
}


// DOM 객체 동적 생성, onclick 이벤트 함수 사용
/** 토글을 클릭할 경우(onclick) DOM 객체를 생성하여, <details>안에 있는 글자가 <footer>의 노란색(#fdbe4d) 배경까지 내려가는 것을 방지 */

function dom() {
  let parent = document.getElementById("parent");
  let child = document.getElementById("child");

  let newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "#0059b2";
  newDiv.style.height = "70px";

  parent.insertBefore(newDiv, child);
} 


// onmouseover, onmouseout 이벤트 함수 사용, pure 함수 사용
/** 요소에 마우스를 오버했을 때(onmouseover) 차미 사진으로, 요소에 마우스를 아웃했을 때(onmouseout) 미호 사진으로 변하는 이벤트 발생 */

function over(obj) {
  obj.src = "media/차미.jpg";
}

function out(obj) {
  obj.src = "media/차미호.jpg";
}


// jQuery 사용, onclick 이벤트 함수 사용
/** 요소를 클릭했을 때(onclick) 텍스트가 변하는 이벤트 발생 */

function msgclick1() {
  $("#msg1").html("<strong>좋아요!</strong>");
}

function msgclick2() {
  $("#msg2").html("<strong>좋아요!</strong>");
}

