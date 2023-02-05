import React from 'react'

export default function codebox({children}) {
    return (
        <div class="codebox">

            <header>
                <span></span>
                <span></span>
                <span></span>
            </header>
            <code>
                <pre>
                    {children}                 
                </pre>
            </code>

        </div>
    )
}
