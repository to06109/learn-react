import classes from './Button.module.css'
import { tokens } from '@/theme/tokens'
import { getColor } from '@/theme/utils'

const { colors } = tokens

console.log(getColor('primary/500'))

export function Button({
  mode,
  secondary: isSecondary,
  disabled,
  ...restProps
}) {
  return (
    <button
      type="button"
      className={classes.component}
      style={{
        backgroundColor: !isSecondary
          ? colors.primary['500']
          : colors.primary['50'],
        color: !isSecondary ? colors.white : colors.primary['400'],
      }}
      {...restProps}
    />
  )
}

Button.defaultProps = {
  mode: 'primary', // 'secondary'
  secondary: false,
  disabled: false,
}
