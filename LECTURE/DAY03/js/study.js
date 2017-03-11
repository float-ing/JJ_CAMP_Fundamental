/*! study.js © yamoo9.net, 2017 */

/**
 *  JavaScript 데이터 유형(Data Types, 자료형)
 *  ES5(2009) - ES6(2015)
 *
 *  객체(Object)
 *  - 숫자(Number) 객체
 *  - 문자(String) 객체
 *  - 논리(Boolean) 객체
 *  - 함수(Function) 객체
 *  - 배열(Array) 객체
 *
 *  undefined
 *  null
 */

// 자바스크립트 데이터 유형

// 단일 var 패턴: single `var` pattern
// var num, str, boo, fun, arr, obj;

// 단일 var 패턴 <- 값 할당: single `var` pattern <= assign value

// var num=1, str='phone', boo=true, fun=function(){}, arr, obj;

// 사람이 읽기 좋도록(readable) 정렬
var num = 1,
    str = 'phone',
    boo = true,
    fun = function(){},
    arr = [],
    obj = {};

// 웹 브라우저 콘솔 창에서 각 데이터를 형 변환(Change Type) 시켜봅니다.

Boolean( num );   // true
Boolean( 0 );     // false  ::  숫자 중 0의 경우, false. 나머지 숫자는 모두 true 이다.
Boolean( -1000 ); // true
Boolean( str );   // true
Boolean( '' );    // false  ::  문자 중 ''의 경우, false. 나머지 문자는 모두 true 이다.
Boolean( ' ' );   // true   ::  사이 공백을 포함한 문자 또한 true.
