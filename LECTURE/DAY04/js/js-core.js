/*! js-core.js © yamoo9.net, 2017 */

///////////
// Array //
///////////

// 하나 이상의 값을 묶은 데이터 유형.
// 자바스크립트를 잘 하려면? 배열을 정복해야 한다.
// 배열은 값의 집합. 배열은 값들이 순서(index)를 가진다.
// 배열의 원소(값)는 인덱스가 0부터 시작한다.
// 고로 가장 마지막 원소는 배열 원소 총 개수 - 1이 된다.

// 배열 데이터 정의
var employees = [];

// 배열 데이터에 원소 추가
// .push() 능력(Method, 메서드)을 사용
employees.push('김민기');
employees.push('이현민');
employees.push('정대만');
employees.push('서태웅');

// 배열 데이터 employees를 콘솔에서 확인
console.log('employees:', employees);

// 배열 데이터 employees의 총 원소 개수
console.log('employees.length:', employees.length); // 4

// 배열 데이터 employees에 새로운 원소(item) 추가
employees.push('설민석');

// 자동 업데이트 된 배열 데이터 employees의 총 원소 개수
console.log('employees.length:', employees.length); // 5

// 배열 데이터 employees의 각 원소(item)을 출력
// 0
console.log('employees[0]:', employees[0]);
// 1
console.log('employees[1]:', employees[1]);
// 2
console.log('employees[2]:', employees[2]);
// 3
console.log('employees[3]:', employees[3]);
// 4
console.log('employees[4]:', employees[4]);
console.log('employees[employees.length - 1]:', employees[employees.length - 1]);
// 5 === employees.length
console.log('employees[5]:', employees[5]); // undefined
console.log('employees[employees.length]:', employees[employees.length]);







////////////
// Object //
////////////

