import React from 'react'
import Section from "../layout/section"
import Codebox from "../layout/codebox"
import Layer from "../layout"


export default function avatar() {


    return (
        <>
            <Section title={"Avatar"} 
                code={`img className='avatar' src={"avatar.png"} alt="" />

            <svg className='avatar' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.1873 11.3128C39.6044 14.7299 39.6044 20.2701 36.1873 23.6872C32.7702 27.1043 27.23 27.1043 23.8129 23.6872C20.3958 20.2701 20.3958 14.7299 23.8129 11.3128C27.23 7.89573 32.7702 7.89573 36.1873 11.3128" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 46.25V48.75C10 50.13 11.12 51.25 12.5 51.25H47.5C48.88 51.25 50 50.13 50 48.75V46.25C50 38.685 40.12 33.77 30 33.77C19.88 33.77 10 38.685 10 46.25Z" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className='avatar'>
                RA
            </div>`}>

                <div className='flex gap-8'>

                    <img className='avatar' src={"avatar.png"} alt="" />

                    <svg className='avatar' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.1873 11.3128C39.6044 14.7299 39.6044 20.2701 36.1873 23.6872C32.7702 27.1043 27.23 27.1043 23.8129 23.6872C20.3958 20.2701 20.3958 14.7299 23.8129 11.3128C27.23 7.89573 32.7702 7.89573 36.1873 11.3128" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 46.25V48.75C10 50.13 11.12 51.25 12.5 51.25H47.5C48.88 51.25 50 50.13 50 48.75V46.25C50 38.685 40.12 33.77 30 33.77C19.88 33.77 10 38.685 10 46.25Z" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                    <div className='avatar'>
                        <div className='h2 font-bold text-primary'>
                            RA
                        </div>
                    </div>
                </div>



            </Section>



            <Section title={"Tamaños"} 
                code={`
<img className='avatar avatar-xs' src={"avatar.png"} alt="" />

<img className='avatar avatar-sm' src={"avatar.png"} alt="" />

<img className='avatar' src={"avatar.png"} alt="" />

<img className='avatar avatar-lg' src={"avatar.png"} alt="" />
`}>

                <div className="flex mx-auto  gap-8">
                    <div>
                        <h4 className='text-center'>Tiny</h4>
                        <div className='flex'>
                            <img className='avatar avatar-xs' src={"avatar.png"} alt="" />
                          
                        </div>
                    </div>

                    <div>
                        <h4 className='text-center'>Small</h4>
                        <div className='flex'>
                            <img className='avatar avatar-sm' src={"avatar.png"} alt="" />
                           
                        </div>
                    </div>


                    <div>
                        <h4 className='text-center'>Normal</h4>
                        <div className='flex'>
                            <img className='avatar' src={"avatar.png"} alt="" />
                          
                        </div>
                    </div>


                    <div>
                        <h4 className='text-center'>Large</h4>
                        <div className='flex'>
                            <img className='avatar avatar-lg' src={"avatar.png"} alt="" />
                          
                        </div>
                    </div>
                </div>



            </Section>
        </>
    )
}
