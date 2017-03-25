/*! javascript-core.js © yamoo9.net, 2017 */

///////////////////
// 지금까지 배운 것 복습
///////////////////

// JavaScript 변수 그리고 상수
// var 키워드 (실행 중에 변경 가능)
// const 키워드 (실행 중에 변경 불가능)

// JavaScript 연산자
// 산술(사칙) 연산자 +, -, *, /, %
// 대입(할당) 연산자 =, +=, -=, *=, /=, %=
// 비교 연산자 ==, !=, >=, >, <=, <, ===, !==
// 부정 연산자 !
// 논리곱, 논리합 연산자 A && B, A || B


// JavaScript 자료형
// 객체인 것들
// number,
// string,
// boolean,
// function,
// array,
// object

// 객체가 아닌 것
// undefined,
// null


// JavaScript 값 복사 or 참조

// 값 복사(pass by value)
// [primitive data types]
// number, string, boolean
// undefined, null

// 값 참조(pass by reference)
// [Object Types]
// function
// array
// object

// JavaScript 자료형 구분 방법
// 1. typeof
//    null, array 올바르게 인지할 수 없다.
// 2. instanceof
//    기대하는 바와 다르게 동작한다. (원시 데이터 유형)
// 3. .constructor (생성자)
//    JavaScript 객체라면? 모두 가지고 있는 속성
//    아쉽게도 객체가 아닌 유형은 판별이 안됩니다. (오류 발생)
// 4. detectType()
function detectType(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

// JavaScript 함수
// 코드 재사용 목적으로 묶음 처리하여 호출 실행하는 데이터(객체)
// 함수 표현식 vs 함수 선언문
var fn = function() {}; // 표현식
function fn2() {}       // 선언문

// JavaScript 배열
// 값의 집합
var data = []; // new Array() [x]
// 배열 데이터 추가
data[0] = 2019;        // 권장되지 않는 방법
data.push(2901);       // 배열 객체의 메서드(능력)
data.length;           // 배열 객체가 소유한 원소의 총 개수
data[data.length - 1]; // 배열 마지막 원소에 접근하는 방법

// JavaScript 객체
// 속성:값 (쌍)으로 구성된 정보 덩어리(데이터, 객체)
// CSS 선언 문법과 유사.
var sunmin = {
  name: '선민',
  age: 9,
  goto: function(destinatino) { console.log( this.name ); }
}

// JavaScript 실행 흐름
// 웹 브라우저 환경에서 코드의 실행 흐름
// HTML -> CSS -> JavaScript
// <head> 내에서 문서 객체(사용자가 이용하는 UI)에
// 영향을 주는 스크립트의 경우 호출하지 않는 것이 권장된다.
// </body> 바로 위에서 호출하는 것이 보다 좋다.

// JavaScript 문서 객체 참조 방법
var body = window.document.body; // Legacy DOM (lv0)
var body = window.document.getElementsByTagName('body')[0]; // DOM 1
var body = window.document.querySelector('body'); // DOM 4

// JavaScript 이벤트 리스너와 이벤트 핸들러
// 사용자가 이벤트를 발생시키면 (입력하면, 클릭하면, 마우스를 올리면)
// 이벤트를 감지하여 함수(핸들러)를 실행한다.
// 사용자가 엔터(Enter) 키를 누르면 사용자에게 알려주겠다.
window.document.onkeyup = function(e) {
  var key = e.keyCode || e.which;
  if ( key === 13 ) {
    window.alert('엔터 키를 누르셨습니다.');
  }
}

// 사용자가 숫자만 입력할 수 있도록 처리하는 스크립트
// https://jsfiddle.net/x9ct74c6/2/



//////////////
// 조건 처리 구문
// 조건에 따라 문장을 달리 처리해주는 것을 말한다.
//////////////

// 표현식 vs 구문(문장)
// 표현식
// var result = 9 * 10 / 3;

// if 구문
// "만약 (조건)이 참(true)이라면 ~~ 하라."
// "그렇지 않다면(조건이 거짓(false)이라면) ~~~ 하라."
var count = 0;

if ( count === 10 ) {
   console.log("count is ten.");
} else {
   console.log("count isn't ten.");
}

// TODO
// 문서에서 객체 대상을 참조
var button, list;
// 버튼
button = document.querySelector('.show-hide-button');
// 리스트
list = document.querySelector('.show-hide-list');

console.groupCollapsed('button, list 문서객체 찾기');
console.log('button:', button);
console.log('list:', list);
console.groupEnd('button, list 문서객체 찾기');

// 해당 객체에 이벤트 리스너(속성)를 설정
button.onclick = detectVisibleAndProcess;

// 리스너가 감지한 이벤트를 처리할 핸들러(함수) 작성
function detectVisibleAndProcess() {
  // [조건]            : list 요소에 style 속성 값이 존재하는가?
  var condition = list.hasAttribute('style');
  // [조건이 참일 경우]   : 존재한다면_
  if ( condition ) {
    // list 문서 객체 요소는 style 속성을 가지고 있기에 이를 제거한다.
    list.removeAttribute('style');
    button.textContent = '목록 감추기';
  }
  // [조건이 거짓일 경우] : 존재하지 않는다면_
  else {
    // list 문서 객체 요소의 style 속성을 설정 한다.
    list.setAttribute('style', 'display: none');
    button.textContent = '목록 보이기';
  }
}











// switch 구문
// 3항 연산식(표현식)











//////////////
// 순환 처리 구문
//////////////

