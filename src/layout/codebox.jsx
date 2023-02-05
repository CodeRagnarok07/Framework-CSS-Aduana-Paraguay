import React from 'react'

export default function codebox({code}) {
    return (
        <div class="codebox">

            <header>
                <span></span>
                <span></span>
                <span></span>
            </header>
            <code>
                <pre>
                    {code}                 
                </pre>
            </code>

        </div>
    )
}
