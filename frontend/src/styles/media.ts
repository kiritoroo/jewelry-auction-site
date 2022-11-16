export const breakpoints = {
  tablet: 767,
  desktop: 1920
}

const mediaQuery = (minWidth: number) => {
  `@media only screen and (min-width: ${minWidth / 16}em)`
}

export const media = {
  custom: mediaQuery,
  tablet: mediaQuery(breakpoints.tablet),
  desktop: mediaQuery(breakpoints.desktop),
}