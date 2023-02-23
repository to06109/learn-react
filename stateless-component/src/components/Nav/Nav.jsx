import { arrayOf, number, string, oneOfType, oneOf, exact } from 'prop-types'
import classes from './Nav.module.scss'
import { A11yHidden } from '../../components'

export function Nav({ as, headline, list, ...restProps }) {
  return (
    <nav>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <ul>
        {list.map((item, index) => {
          // item에 id가 없는 경우 index쓰도록 설계
          return (
            <li key={item.id ?? index}>
              <a href={item.to}>{item.text}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

Nav.defaultProps = {
  // typescript type
  list: [] /* [{id: string, to: string, text: string}] */,
  as: 'h2', // 이것들 중 하나 'h2', 'h3', 'h4', 'h5', 'h6'
}

Nav.propTypes = {
  // [{id: string, to: string, text: string}] 이런 형태로 받을거야!
  list: arrayOf(
    exact({
      id: string,
      to: string,
      test: string,
    }).isRequired,
  ),
  // headline 필수로 설정
  headline: string.isRequired,
  // 이것들 중 하나 'h2', 'h3', 'h4', 'h5', 'h6'
  as: oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
}
