'use strict';

window.onload = () => {
  // console.log('hello')
  const root = document.querySelector('#root');

  const tempText = "hi this is 'b bold b' and this is enter 'br' using Regular Expressions";
  const div = document.createElement("div");
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  const br = document.createElement("br");
  p.textContent = tempText;
  // const divCont = document.createTextNode(tempText);


  div.appendChild(p);

  // ? 정규 표현식 리터럴은 스크립트를 불러올 때 컴파일되므로 바뀔 일이 없는 패턴의 경우 리터럴을 사용하면 성능이 향상 될 수 있다. 
  // const re = new RegExp('ab+c');
  // 생성자 함수로 사용하면 정규 표현식이 런타임에 컴파일 된다. 

  const regstrong = new RegExp(/'b * b'/); // literal - 정규표현식이 변하지 않는다면, 리터럴로 생성하기 
  // const regbr = new RegExp('{br}'); // 생성자
  // https://velog.io/@jude-ui/%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9DRegExp

  // const regEnd = new RegExp(/)
  // const result = tempText.replace(regbr, "enter");
  // console.log(result)

  const handlereplace = () => {
    console.log("executed")
  }
  const result2 = tempText.replace(regstrong, '$2 $1');
  const result3 = tempText.split(regstrong);
  console.log(result2)
  console.log(result3)

  root.appendChild(div);
}