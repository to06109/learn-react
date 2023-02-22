import { tokens } from './tokens'

export const getColor = (colorNameAndVariant) => {
  if (colorNameAndVariant.includes('/')) {
    let [colorName, colorVariant] = colorNameAndVariant.split('/') // ['primary', '500']
    return tokens.colors[colorName][colorVariant]
  } else {
    return tokens.colors[colorNameAndVariant]
  }
}

// getColor('primary/500')
