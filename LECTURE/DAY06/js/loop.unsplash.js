/*! loop.unsplash.js © yamoo9.net, 2017 */

/////////////////////////////////
// Source Unsplash 데이터 반복 처리
// https://source.unsplash.com
/////////////////////////////////



/////////////////////////////
// USE CASE 1. 사이즈 설정 방법
/////////////////////////////
// - width
// - height

// https://source.unsplash.com/470x210




/////////////////////////////
// USE CASE 2. 카테고리 설정 방법
/////////////////////////////
// - buildings
// - food
// - nature
// - people
// - technology
// - objects

// https://source.unsplash.com/category/technology




/////////////////////////////
// USE CASE 3. 일자별, 주차별
/////////////////////////////
// - daily
// - weekly
// - ?keyword

// https://source.unsplash.com/category/object/400x220/weekly?car


// ----------------------------------------------------------------------

// 포토 갤러리 컨테이너 요소 참조
var photo_gallery = document.querySelector('.photo-gallery');
// 제대로 문서의 객체를 참조해왔나 검증 (잘못 가져온 경우는 null 출력)
console.log('photo_gallery:', photo_gallery);

// unsplash API 를 사용하여 랜덤 이미지 서버에 요청
// <img src="http://source.unsplash.com/category/nature/620x314" alt="">

// 10회 반복 구문
// 우선은 숫자 상수로 구현
// var n = 1;
// while ( n++ <= max ) {
// var max = 9;
// while ( max-- ) {
//   photo_gallery.innerHTML += '<img src="http://source.unsplash.com/400x400" alt="">';
// }


// 카테고리를 순환하여 화면에 이미지 출력
// buildings
// food
// nature
// people
// technology
// objects
var categories = [];
categories.push('buildings');
categories.push('food');
categories.push('nature');
categories.push('people');
categories.push('technology');
categories.push('objects');
categories.push('nature');
categories.push('food');
categories.push('buildings');
categories.push('nature');
categories.push('people');
categories.push('technology');

// var categories_len = categories.length; // 6
// console.log('categories.length:', categories.length);

var i = 0, source;
while ( i < categories.length ) {
  // 0, 1, 2, 3, 4, 5
  // console.log(categories[i]);
  source = 'http://source.unsplash.com/category/'+ categories[i] +'/400x400';
  photo_gallery.innerHTML += '<img src="'+ source +'" alt="">';
  i++;
}

