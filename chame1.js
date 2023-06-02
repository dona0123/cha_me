// Type Script 적용, onclick 이벤트 함수 사용, pure 함수 사용
// chame1.ts를 컴파일
/** 사용자로부터 뮤지컬의 평점을 입력받고 반환하는 함수 */

var _a;
(_a = document.querySelector(".fa-comment")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("click", function () {
      var rating = prompt("뮤지컬의 평점은?", "");
      var result = getMusicalRating(rating);
      alert(result);
    });
function getMusicalRating(rating) {
  if (rating === null) {
    return "취소하셨습니다.";
  } else if (rating === "" || isNaN(Number(rating))) {
    return "올바른 평점을 입력해주세요.";
  } else {
    return "당신의 평점은 " + rating + "/5점 이군요.";
  }
} 
