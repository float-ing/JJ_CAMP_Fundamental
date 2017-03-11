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
Boolean( ' ' );   // true   ::  [주의] 사이 공백을 포함한 문자 또한 true.

Boolean( fun );       // true
Boolean( arr );       // true
Boolean( obj );       // true
Boolean( null );      // false
Boolean( undefined ); // false

// 불리언 값으로 변경했을 때, false 인 경우
// 숫자 0
// 빈 문자(공백이 없는) "", ''
// null
// undefined

// ! 부정(반전) 연산자
// !true
// false
// !false
// true
// !0
// true
// !null
// true

// !! 기호를 데이터 앞에 붙이면
// 해당 데이터는 불리언 값으로 변환된다.

undefined + ''    // "undefined"
null + ''         // "null"

Number(null)      // 0
Number(undefined) // NaN :: Not a Number - "숫자가 아니다"


// is*, has* 이름이 시작하는 함수는 대부분 Boolean 값을 반환한다.
// window.isNaN(데이터); // 숫자 (false) or NaN (true) 반환

!isNaN(num); // ?
// true
!isNaN(str); // ?
// false
!isNaN(boo); // ?
// true
!isNaN(fun); // ?
// false
!isNaN(arr); // ?
// true
!isNaN(obj); // ?
// false


// JavaScript 언어의 이해할 수 없는 결함
// !isNaN(false)
// true
// !isNaN(true)
// true
// !isNaN(function(){})
// false
// !isNaN([])
// true
// !isNaN([1])
// true
// !isNaN([1, 2])
// false
// !isNaN({})
// false
// !isNaN({a: 1})
// false


// --------------------------------------------
// 함수 정의(선언)  VS  함수 표현식

// 함수 정의(선언)
// 변수 선언과 비슷. var 키워드를 사용한 후 이름을 기입
// function 키워드를 사용한 후 이름을 기입
// 함수 정의 시에는 이름이 반드시 필요!
function lookAtMe() {}

////////////
// 함수 표현식
////////////
// 이름이 없는 함수 값(함수 리터럴)을 변수에 대입
var callMe = function(){};
