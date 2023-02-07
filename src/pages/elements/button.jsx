import React from 'react'
import Section from "../../layout/section"



export default function button() {

    var code = `div className="input">
    <span className="material-symbols-outlined">
        key
    </span>
    <input className="input-password" type="password" placeholder="input password" />
</div>

<div className="input">
    <span className="material-symbols-outlined">
        key
    </span>
    <input className="input-password" type="password" placeholder="input password" />
</div>`

    return (
        <>
            <h1 className='h1'>botones</h1>

            <Section title={"tamaños"} type="2"
                code={`<div className="btn-xs btn-primary">
    <span class="material-symbols-outlined">
        warning
    </span>
    btn-xs
</div>

<div className="btn-sm btn-primary">
    <span class="material-symbols-outlined">
        warning
    </span>
    btn-sm
</div>

<div className="btn-lg btn-primary">
    <span class="material-symbols-outlined">
        warning
    </span>
    btn-lg                       
</div>`}>
                <div className="flex flex-col justify-between gap-8">
                    <div className="btn-xs btn-primary">
                        <span class="material-symbols-outlined">
                            warning
                        </span>
                        btn-xs
                    </div>

                    <div className="btn-sm btn-primary">
                        <span class="material-symbols-outlined">
                            warning
                        </span>
                        btn-sm
                    </div>

                    <div className="btn-lg btn-primary">
                        <span class="material-symbols-outlined">
                            warning
                        </span>
                        btn-lg
                    </div>

                </div>
            </Section>


            <Section title={"estilos"} type="2"
                code={`<div className="btn-sm btn-primary">
    <span class="material-symbols-outlined">
        warning
    </span>
    normal
</div>

<div className="btn-sm btn-primary btn-outline">
    <span class="material-symbols-outlined">
        warning
    </span>
    btn-outline
</div>

<div className="btn-sm btn-primary btn-text">
    <span class="material-symbols-outlined">
        warning
    </span>
    btn-text
</div>`}>
                <div className="flex flex-col justify-between gap-8">
                    <div className="btn-sm btn-primary">
                        <span class="material-symbols-outlined">
                            warning
                        </span>
                        normal
                    </div>

                    <div className="btn-sm btn-primary btn-outline">
                        <span class="material-symbols-outlined">
                            warning
                        </span>
                        btn-outline
                    </div>

                    <div className="btn-sm btn-primary btn-text">
                        <span class="material-symbols-outlined">
                            warning
                        </span>
                        btn-text
                    </div>



                </div>
            </Section>


            <Section title={"Colores"} type="2"
                code={`<div className="btn-sm btn-primary">
    <span class="material-symbols-outlined">
        warning
    </span>
     btn-primary
</div>
<div className="btn-sm btn-secondary">
    <span class="material-symbols-outlined">
        warning
    </span>
     btn-secondary
</div>
<div className="btn-sm btn-success">
    <span class="material-symbols-outlined">
        warning
    </span>
     btn-success
</div>
<div className="btn-sm btn-error">
    <span class="material-symbols-outlined">
        warning
    </span>
     btn-error
</div>`}>
                <div className="flex flex-col justify-between gap-8">
                    <div className="btn-sm btn-primary">
                        <span class="material-symbols-outlined">
                            warning
                        </span>
                        btn-primary
                    </div>
                    <div className="btn-sm btn-secondary">
                        <span class="material-symbols-outlined">
                            warning
                        </span>
                        btn-secondary
                    </div>
                    <div className="btn-sm btn-success">
                        <span class="material-symbols-outlined">
                            warning
                        </span>
                        btn-success
                    </div>
                    <div className="btn-sm btn-error">
                        <span class="material-symbols-outlined">
                            warning
                        </span>
                        btn-error
                    </div>

                </div>
            </Section>

            <Section text={"Links"}>

                <div>

                    <div className="flex flex-col gap-8">
                <a href="">Link nombre</a>

                    </div>
                </div>



            </Section>

        </>
    )
}
