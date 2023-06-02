// Type Script 적용, onclick 이벤트 함수 사용, pure 함수 사용
/** 사용자로부터 뮤지컬의 평점을 입력받고 반환하는 함수 */

document.querySelector(".fa-comment")?.addEventListener("click", function () {
  let rating: string | null = prompt("뮤지컬의 평점은?", "");
  let result: string = getMusicalRating(rating);
  alert(result);
});

function getMusicalRating(rating: string | null): string {
  if (rating === null) {
    return "취소하셨습니다.";
  } else if (rating === "" || isNaN(Number(rating))) {
    return "올바른 평점을 입력해주세요.";
  } else {
    return "당신의 평점은 " + rating + "/5점 이군요.";
  }
} 
