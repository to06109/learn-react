/* -------------------------------------------------------------------------- */
/*                                 React 컴포넌트                                 */
/* -------------------------------------------------------------------------- */

// 함수(형) 컴포넌트
function Group() {
  return React.createElement(
    'div',
    { role: 'group', lang: 'en' },
    'Group Element',
  ) // <div role="group" lang="en">Group Element</div>
}

// Web Components API
// globalThis.customElements('web-component', WebComponent)
// <web-component></web-component>

// 클래스 컴포넌트



/* -------------------------------------------------------------------------- */
/*                                React DOM 렌더                                */
/* -------------------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById('root'))

reactDomRoot.render(
  // HTML, XML
  <div role="group" lang="en">
    Group Element
  </div>,
  // ReactDOM.createElement(Group)
)
