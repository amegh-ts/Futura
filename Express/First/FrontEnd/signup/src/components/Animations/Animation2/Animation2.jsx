import React from 'react'
import './Animation2.css'

const Animation2 = () => {
    return (
        <div>
            <div class="container">
                <svg viewBox="0 0 960 300">
                    <symbol id="s-text">
                        <text text-anchor="middle" x="50%" y="80%">Elysium</text>
                    </symbol>

                    <g class="g-ants">
                        <use xlinkHref="#s-text" class="text-copy"></use>
                        <use xlinkHref="#s-text" class="text-copy"></use>
                        <use xlinkHref="#s-text" class="text-copy"></use>
                        <use xlinkHref="#s-text" class="text-copy"></use>
                        <use xlinkHref="#s-text" class="text-copy"></use>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Animation2