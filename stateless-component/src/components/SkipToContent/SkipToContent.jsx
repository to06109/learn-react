import { useEffect, useRef } from 'react'
import { A11yHidden } from '../A11yHidden/A11yHidden'

export function SkipToContent({ to, ...restProps }) {
  // DOM요소가 없을 때는 초기값 null
  const skipToContentRef = useRef(null) // {current: null}

  let targetElement = null

  console.log(skipToContentRef)

  // 사이드 이펙트
  // 명령형 프로그래밍
  useEffect(() => {
    // 복사(primitive) vs. 참조(object)

    // 실제 DOM 요소(객체) 접근(참조)
    targetElement = document.querySelector(to) // null

    if (targetElement) {
      // 실제 DOM 요소 조작 -> 사이드 이펙트이기 때문에 useEffect 사용
      targetElement.setAttribute('tabindex', -1)

      // 이벤트 핸들링
      // React의 방식(useRef)
      // skipToContentRef.current
      skipToContentRef.current.addEventListener('click', (e) => {
        e.preventDefault()
        targetElement && targetElement.focus()
      })
    }
  }, [])

  // const handleJumpToArea = (e) => {
  //   // 사이드 이펙트
  //   e.preventDefault();

  //   if (targetElement) {
  //     targetElement.focus();
  //   }
  // };

  // React 요소 ({ref, key, props, type}) → ReactDOM 렌더링 → 실제 DOM
  return (
    <>
      <A11yHidden
        ref={skipToContentRef}
        as="a"
        focusable
        href={to}
        // onClick={handleJumpToArea}
        {...restProps}
      />
    </>
  )
}
