/*! study.js © yamoo9.net, 2017 */

/**
 *  변수(`var`iables)
 *  - "변하는 수": x, y
 *  상수(`const`ant)
 *  - "항상 일관된 수": 값(Value)
 */

// --------------------------------------------
// 변수(Variable)

// 변수 정의
// undefined 데이터(자료) 값
var favorite_item;

// 선언된 변수에 값을 할당(대입) <= 대입 연산자(=)
favorite_item = 'Macbook Pro'; // 값(리터럴: Literal)

// 콘솔.기록하다(무엇을)
console.log(favorite_item); // 'Macbook Pro'

// 문서에서 속성이 lang 이며, 속성 값이 "en"인 요소를 찾는다.
// DOM = 문서객체모델(Document Object Model)
// DOM Script = DOM API + JavaScript
document.querySelector('p[lang="en"]').innerText = favorite_item;

// jQuery Library <= JavaScript + DOM
// $('p[lang="en]').text(favorite_item);

// --------------------------------------------
// 상수(Constant)

// const 키워드를 사용하여 상수를 정의
// 선언과 동시에 값을 할당할 수도 있다.
const PI = 3.141592;
// const PI = '파이';
const day_to_hour = 24;

// 상수의 이름 작성 규칙은 대부분 변수와 유사
// 하지만 모든 이름의 철자를 대문자로 써주는 것이 관례
console.log(PI);
console.log(day_to_hour);

// --------------------------------------------
// 연산자(Operator)
// --------------------------------------------

// 수와 관련된 연산(산술 연산)
// +, -, *, /, %

// var x;
// var y;

// var 키워드를 한 번만 사용하는 방법
// single var pattern
var x, y;

// 선언된 변수에 값을 할당
// assign value
x = 10;
// 연산 수행 후, 결과 값을 변수 y에 할당
y = ( x / x * 10 ) % 3;

console.log('y =', y);

// 문자와 관련된 연산
// 문자 + 문자 ?????
var word1 = "paper",
    word2 = "strategy";

console.log('word1:', word1);
console.log('word2:', word2);
console.log('word1 + word2:', word1 + word2);
