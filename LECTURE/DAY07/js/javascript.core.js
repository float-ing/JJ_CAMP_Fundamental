/*! javascript.core.js © yamoo9.net, 2017 */


// STEP 0
// media/ 디렉토리 내부의 cover 이미지를
// 사용자 화면(view)에 뿌리기 위해(순환 처리)
// 배열(집합) 데이터를 모델링 하시오.

var coverList = []; // Create Array

// Add Item in Array
coverList.push({
  src: "001.EdSheeran-ShapeOfYou.jpg",
  alt: "Ed Sheeran - Shape Of You"
});
coverList.push({
  src: "002.TheChainsmokers&Halsey-Closer.jpg",
  alt: "The Chainsmokers & Halsey - Closer"
});
coverList.push({
  src: "003.Zayn&TaylorSwift-IDon'tWannaLiveForever(FiftyShadesDarker).jpg",
  alt: "Zayn & TaylorSwift - I Don't Wanna Live Forever (Fifty Shades Darker)"
});
coverList.push({
  src: "004.KatyPerry&SkipMarley-ChainedToTheRhythm.jpg",
  alt: "Katy Perry & Skip Marley - Chained To The Rhythm"
});
coverList.push({
  src: "005.Migos&LilUziVert-BadAndBoujee.jpg",
  alt: "Migos & Lil Uzi Vert - Bad And Boujee"
});
coverList.push({
  src: "006.TheChainsmokers-Paris.jpg",
  alt: "The Chainsmokers - Paris"
});
coverList.push({
  src: "007.Rihanna-LoveOnTheBrain.jpg",
  alt: "Rihanna - Love On The Brain"
});
coverList.push({
  src: "008.BrunoMars-That'sWhatILike.jpg",
  alt: "Bruno Mars - That's What I Like"
});
coverList.push({
  src: "009.BigSean-BounceBack.jpg",
  alt: "Big Sean - Bounce Back"
});
coverList.push({
  src: "010.MachineGunKelly&CamilaCabello-BadThings.jpg",
  alt: "Machine Gun Kelly & Camila Cabello - Bad Things"
});


// STEP 1
// 문서 (HTML Document) 에서 제어할 대상 요소를 찾는다.
// 찾고자 하는 대상의 식별자를 사용하여 대상 찾기를 하자.
var coverList_el = document.querySelector('.music-coverlist');
// console.log('coverList_el:', coverList_el);

// STEP 2
// 데이터 coverList => HTML 템플릿에 순환 처리 하여 화면에 렌더링 => 뷰(View) 구현
// HTML Code: Template
// <li class="music-cover-item">
//   <img class="music-cover is-rwd" src="" alt="">
// </li>

// 순환 처리하여 완성할 HTML 코드를 담을 문자열 데이터
var inner_html_code = '';

for ( var i=0, l=coverList.length; i<l; ++i ) {
  // console.log(i);
  // console.log(coverList[i]); // 커버 이미지 경로
  // [{src:"001.EdSheeran-ShapeOfYou.jpg", alt:""}]
  var src = 'media/cover/' + coverList[i].src;
  var alt = coverList[i].alt;
  // console.log(src);
  // coverList_el // <ul> <- <li>
  inner_html_code += '<li class="music-cover-item">';
  inner_html_code +=     '<img class="music-cover is-rwd" src="'+ src +'" alt="'+ alt +'">';
  inner_html_code += '</li>';
}

coverList_el.innerHTML += inner_html_code;
