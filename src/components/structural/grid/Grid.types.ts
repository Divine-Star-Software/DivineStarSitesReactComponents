
export interface GridProps {

    collumnWidth ?: string;
    rowHeight ?: string;
    collumnGap ?: string;

    /**## Mobdile Break
     * ---
     * If screen width is below 600px and this is set 
     * the elements will break downward with by setting the display to block.
     * Otherwise it will set the display to flex. 
     */
    mobileBreak ?: boolean;

    collumns ?: {
        small ?: number,
        medium ?: number,
        large ?: number
    }

    children : JSX.Element | JSX.Element[] | string
}