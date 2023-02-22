// import { createElement as h } from 'react'
import classes from './A11yHidden.module.css'

export const A11yHidden = ({
  // 컴포넌트 이름 설정
  // React는 브라우저가 인식할 수 없는 HTML 표준 요소가 아닌 경우
  // 컴포넌트 이름의 첫글자를 대문자로 구분한다.
  // React를 속여(trick) 보자!

  // 비 표준 속성이므로 restProps에서 제외해야 한다.
  focusable,
  as: ComponentName,

  ...restProps
}) => {
  // as는 렌더링 할 컴포넌트 요소의 (태그) 이름
  // : 뒤에 쓰는 이름이 별칭(지역 변수), 마치 리액트 컴포넌트 이름인 것처럼 트릭!

  // h 함수는 React.createElement의 별칭 함수입니다.
  // React.createElement(type[, props][, ...children])
  // h(type[, props][, ...children])
  // h(태그이름, props 객체(children 포함))
  // return h(as, restProps);
  return <ComponentName className={classes.srOnly} {...restProps} />
}
