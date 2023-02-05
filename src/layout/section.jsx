import React from 'react'
import Codebox from "./codebox"

export default function Section({ title, code, children }) {
    return (
        <section>
            <h3 className="h3">{title}</h3>

            <div className="w-full flex flex-col items-start justify-center gap-8">



                {children}
                {code &&
                    <div className='mx-auto'>
                        <Codebox code={code} />
                    </div>
                }

            </div>

        </section>
    )
}
