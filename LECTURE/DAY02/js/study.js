/*! study.js © yamoo9.net, 2017 */

/**
 *  변수(`var`iables)
 *  - "변하는 수": x, y
 *  상수(`const`ant)
 *  - "항상 일관된 수": 값(Value)
 */

// 변수 정의
// undefined 데이터(자료) 값
var favorite_item;

// 선언된 변수에 값을 할당(대입) <= 대입 연산자(=)
favorite_item = 'Macbook Pro'; // 값(리터럴: Literal)

// 콘솔.기록하다(무엇을)
console.log(favorite_item); // 'Macbook Pro'

// 문서에서 속성이 lang 이며, 속성 값이 "en"인 요소를 찾는다.
document.querySelector('p[lang="en"]').innerText = favorite_item;
