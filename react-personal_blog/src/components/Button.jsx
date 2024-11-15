import './Button.css'

export default function handleClick({children, onClick}) {
    return (<button className='button active' onClick={onClick}>{children}</button>)
}