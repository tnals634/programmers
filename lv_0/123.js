//주사위 게임 2

//세 숫자가 모두 다르면 a + b + c
//두 수가 같고 나머지가 다르면  (a + b + c) × (a^2 + b^2 + c^2 )
//세 수 모두 같으면 (a + b + c) × (a^2 + b^2 + c^2 ) × (a^3 + b^3 + c^3 )
function solution(a, b, c) {
  var answer = 0;
  if (a != b && b != c && c != a) {
    answer = a + b + c;
  } else if (a == b && b == c) {
    answer =
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
  } else {
    answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  }
  return answer;
}
