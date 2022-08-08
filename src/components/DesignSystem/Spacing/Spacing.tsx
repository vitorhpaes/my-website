import React, { Children } from 'react'
import { styled, SizeKey, Theme, useTheme } from '@mui/material'

interface StyledSpacingProps {
    eachChildren?: boolean
    // specific margin's
    mt?: SizeKey
    mb?: SizeKey
    ml?: SizeKey
    mr?: SizeKey
    marginTop?: SizeKey
    marginBottom?: SizeKey
    marginLeft?: SizeKey
    marginRight?: SizeKey
    // straight margin's
    marginX?: SizeKey
    marginY?: SizeKey
    mx?: SizeKey
    my?: SizeKey
    // specific padding's
    paddingTop?: SizeKey
    paddingBottom?: SizeKey
    paddingLeft?: SizeKey
    paddingRight?: SizeKey
    pt?: SizeKey
    pb?: SizeKey
    pl?: SizeKey
    pr?: SizeKey
    // straight padding's
    paddingX?: SizeKey
    paddingY?: SizeKey
    px?: SizeKey
    py?: SizeKey
}

const createSpacingProps = (props: StyledSpacingProps, theme: Theme) => {
    let {
        paddingLeft: paddingLeftKEY,
        paddingRight: paddingRightKEY,
        paddingTop: paddingTopKEY,
        paddingBottom: paddingBottomKEY,

        paddingX: paddingXKEY,
        paddingY: paddingYKEY,

        marginLeft: marginLeftKEY,
        marginRight: marginRightKEY,
        marginTop: marginTopKEY,
        marginBottom: marginBottomKEY,

        marginX: marginXKEY,
        marginY: marginYKEY,
    } = props

    paddingXKEY = paddingXKEY ?? props.px
    paddingYKEY = paddingYKEY ?? props.py
    marginXKEY = marginXKEY ?? props.mx
    marginYKEY = marginYKEY ?? props.my

    const paddingLeft = theme.size[paddingLeftKEY ?? props.pl ?? paddingXKEY]
    const paddingRight = theme.size[paddingRightKEY ?? props.pr ?? paddingXKEY]

    const paddingTop = theme.size[paddingTopKEY ?? props.pt ?? paddingYKEY]
    const paddingBottom =
        theme.size[paddingBottomKEY ?? props.pb ?? paddingYKEY]

    const marginLeft = theme.size[marginLeftKEY ?? props.ml ?? marginXKEY]
    const marginRight = theme.size[marginRightKEY ?? props.mr ?? marginXKEY]

    const marginTop = theme.size[marginTopKEY ?? props.mt ?? marginYKEY]
    const marginBottom = theme.size[marginBottomKEY ?? props.mb ?? marginYKEY]

    return {
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
    }
}

const StyledSpacing = styled('div')<StyledSpacingProps>`
    ${({ theme, ...props }) => createSpacingProps(props, theme)}
`

interface SpacingProps extends StyledSpacingProps {
    children: React.ReactElement | React.ReactElement[] | React.ReactNode
}

const Spacing: React.FC<SpacingProps> = ({
    children,
    eachChildren,
    ...props
}) => {
    const isMultiChildren = Children.count(children) > 1
    const theme = useTheme()

    if ((isMultiChildren && !eachChildren) || !React.isValidElement(children))
        return <StyledSpacing {...props}>{children}</StyledSpacing>

    const styledChild = Children.map(children, (child) => {
        return React.cloneElement(child, {
            style: createSpacingProps(props, theme),
        })
    })

    return <>{styledChild}</>
}

export default Spacing
