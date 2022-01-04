import type {  MouseEventHandler } from "react"
export interface ButtonProps {
    children : JSX.Element | JSX.Element[] | string
    primary?:boolean,
    disabled?: boolean,
    size?: "small" | "medium" | "large",
    onClick?: MouseEventHandler<HTMLButtonElement>
}