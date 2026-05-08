import { Link as RouterLink, type LinkProps } from 'react-router'

import { Link } from '@mui/material'
import { forwardRef, type Ref } from 'react'

export const LinkForMUI = forwardRef(function LinkForMUI(
  props: { to: string } & Omit<LinkProps, 'component'>,
  ref: Ref<HTMLAnchorElement>,
) {
  const { to, ...rest } = props
  return <Link component={RouterLink} ref={ref} to={to} {...rest} />
})
