/* -------------------------------------------------------------------------- */
/* React Component Types                                                      */
/* -------------------------------------------------------------------------- */

// Component VS. Element
// Element -> <div></div>
// Componentt -> HTMLDivElement class
// 컴포넌트를 통해 엘리먼트를 생성함 / 컴포넌트를 사용하면 엘리먼트를 여럿 생성할 수 있다.

// 컴포넌트의 역할
// - 재사용
// - React 엘리먼트 생성 (REact.createElement)
// - 생성된 React 엘리먼트 반환(return)

// 1. class Component
// 클래스 문법을 사용해 React 요소를 여러번 생성할 수 있는 컴포넌트 설계
// class {

// }

// 2. functional Component
// 함수 문법을 사용해 React 요소를 여러번 생성할 수 있는 컴포넌트 설계
export function Group() {
  return React.createElement(
    'div',
    { role: 'group', lang: 'en' },
    'Group Element',
  ) // <div role="group" lang="en">Group Element</div>
}
