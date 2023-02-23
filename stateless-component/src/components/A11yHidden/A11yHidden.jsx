// import { createElement as h } from 'react'
import classes from './A11yHidden.module.css'

export const A11yHidden = ({
  as: ComponentName = 'span',
  focusable = false,
  className = '',
  ...restProps
}) => {
  // 변수(문자 값) 변수(문자 값)
  // `${개발ㄹ자의 클래스이름} ${사용자의 클래스이름}`
  const combinedClassName = `${classes.srOnly} ${className}`.trim()
  return <ComponentName className={combinedClassName} {...restProps} />
}
