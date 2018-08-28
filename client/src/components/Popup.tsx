import * as React from 'react'
import '../css/Popup.css'

interface Props {}

const Popup: React.SFC<Props> = ({children}) => (
    <div className={"Popup"}>
        {children}
    </div>
)

export default Popup