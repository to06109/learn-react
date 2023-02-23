import SkipToContent from '../index'

export function Header() {
  return (
    <header>
      <h2>앱 헤더</h2>
      <SkipToContent to="#snack">과자</SkipToContent>
      <SkipToContent to="#pumpkin">호박</SkipToContent>
      <SkipToContent to="#icecream">아이스크림</SkipToContent>

      <Nav as="h3" headline="상품 목록" list={navList} />
    </header>
  )
}
