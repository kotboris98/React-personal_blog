import Button from './Button';
import { useState } from 'react'
import { socialMediaLogos } from '../data'

export default function SocialMedia() {
    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
    setContentType(type) 
}
    return (
        <section>
            <h3>Мои социальные сети</h3>
            <Button onClick={() => handleClick('vk')}>VK</Button>
            <Button onClick={() => handleClick('inst')}>Instagram</Button>
            <Button onClick={() => handleClick('tg')}>Telegram</Button>
            {contentType ? (
            <p>{socialMediaLogos[contentType]}</p>) : (<div>Нажми на кнопку</div>)}
        </section>
    )
}