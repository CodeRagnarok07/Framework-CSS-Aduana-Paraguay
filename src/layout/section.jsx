import React from 'react'
import Codebox from "./codebox"

export default function Section({ title, text, code, type, children }) {
    return (
        <section>

            {type ?
                <>
                    <h3 className="h3 font-bold uppercase">{title}</h3>
                    {text &&
                        <pre>
                            <p>
                                {text}
                            </p>
                        </pre>
                    }
                    <div className="flex w-full gap-8">

                        {children}

                        {code && <div ><Codebox code={code} /></div>}


                    </div>
                </>
                :

                <>
                    <h3 className="h3 font-bold uppercase">{title}</h3>

                    <div className="w-full flex flex-col items-center justify-center gap-8">



                        {children}
                        {code && <div className='mx-auto'><Codebox code={code} /></div>}

                    </div>

                </>

            }

        </section>
    )
}
