import PropTypes from 'prop-types'
import classes from './Nav.module.scss'
import { A11yHidden } from '../../components'

export function Nav({ as, headline, list }) {
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

Nav.propTypes = {}
