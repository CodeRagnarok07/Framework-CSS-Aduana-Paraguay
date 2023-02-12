import React from 'react'
import Section from '../layout/section'

export default function card() {
    return (
        <div>


            <Section title={"Card"} type={true}
                code={`<div className="card w-[500px]">
<div className="card-header skeleton">
    <div className="skeleton-header"> skeleton-header</div>

</div>

<div className="card-body skeleton">
    <div className="skeleton-avatar">skeleton-avatar</div>

    <div className="skeleton">
        <div className="skeleton-content">skeleton-content</div>
        <div className="skeleton-content"></div>
        <div className="skeleton-content"></div>
        <div className="skeleton-content"></div>
    </div>

</div>

<div className="card-footer skeleton justify-center">
    <div className="btn-sm btn-primary"> skeleton</div>
    <div className="btn-sm bg-warning"> skeleton</div>
</div>
</div>`}>

                <div className="flex gap-8 flex-col">

                    <div className="card w-[500px]">

                        <div className="card-header skeleton">
                            <div className="skeleton-header"> skeleton-header</div>

                        </div>

                        <div className="card-body skeleton">
                            <div className="skeleton-avatar">skeleton-avatar</div>

                            <div className="skeleton">
                                <div className="skeleton-content">skeleton-content</div>
                                <div className="skeleton-content"></div>
                                <div className="skeleton-content"></div>
                                <div className="skeleton-content"></div>
                            </div>

                        </div>

                        <div className="card-footer skeleton justify-center">
                            <div className="btn-sm btn-primary"> skeleton</div>
                            <div className="btn-sm bg-secondary-dark"> skeleton</div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section title={"Card info"} type={true}
                code={`<div className="card w-[500px]">
<div className="card-header skeleton">
    <div className="skeleton-header"> skeleton-header</div>

</div>

<div className="card-body skeleton">
    <div className="skeleton-avatar">skeleton-avatar</div>

    <div className="skeleton">
        <div className="skeleton-content">skeleton-content</div>
        <div className="skeleton-content"></div>
        <div className="skeleton-content"></div>
        <div className="skeleton-content"></div>
    </div>

</div>

<div className="card-footer skeleton justify-center">
    <div className="btn-sm btn-primary"> skeleton</div>
    <div className="btn-sm bg-warning"> skeleton</div>
</div>
</div>`}>

                <div className="flex gap-8 flex-col">

                    <div className="card w-[500px]">

                        <div className="card-header skeleton justify-between">

                            <div className='btn-sm btn-scondary btn-outline relative'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.7109 9.0795H8.60956" stroke="#3B9AF0" stroke-linecap="round" stroke-linejoin="round" />
                                    <ellipse cx="9.01123" cy="8.67784" rx="6.0025" ry="6.0025" stroke="#3B9AF0" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.60953 9.07951V5.34312" stroke="#3B9AF0" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Info
                            </div>
                            <div></div>

                            <div className='menu bdg bg-muted '>
                                <svg width="4" height="12" viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00796 4.66666C2.74127 4.66666 3.34125 5.26666 3.33325 6C3.33325 6.73333 2.73327 7.33333 1.99996 7.33333C1.26664 7.33333 0.666662 6.73333 0.666662 6C0.666662 5.26666 1.26664 4.66666 2.00796 4.66666Z" fill="#3B9AF0" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00796 0C2.74127 0 3.34125 0.6 3.33325 1.33333C3.33325 2.06667 2.73327 2.66667 1.99996 2.66667C1.26664 2.66667 0.666662 2.06667 0.666662 1.33333C0.666662 0.6 1.26664 0 2.00796 0Z" fill="#3B9AF0" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00796 9.33334C2.74127 9.33334 3.34125 9.93334 3.33325 10.6667C3.33325 11.4 2.73327 12 1.99996 12C1.26664 12 0.666662 11.4 0.666662 10.6667C0.666662 9.93334 1.26664 9.33334 2.00796 9.33334Z" fill="#3B9AF0" />
                                </svg>



                                <div className="menu-cont right ">
                                    <div className='dropdown popover rt '>
                                        <div className="item">
                                            Menu item 1
                                        </div>
                                        <div className="item">
                                            <svg className="snniper sm" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66146 7.66146C2.9441 12.3788 2.12227 19.5216 5.2042 25.0825C5.65655 25.8987 5.36159 26.9271 4.54539 27.3794C3.72918 27.8318 2.70081 27.5368 2.24846 26.7206C-1.54471 19.8764 -0.539636 11.0835 5.27191 5.27191C11.0835 -0.539636 19.8764 -1.54471 26.7206 2.24846C27.5368 2.70081 27.8318 3.72918 27.3794 4.54539C26.9271 5.36159 25.8987 5.65655 25.0825 5.2042C19.5216 2.12227 12.3788 2.9441 7.66146 7.66146ZM8.62058 31.4546C9.07293 30.6384 10.1013 30.3434 10.9175 30.7958C16.4784 33.8777 23.6212 33.0559 28.3385 28.3385C33.0559 23.6212 33.8777 16.4784 30.7958 10.9175C30.3434 10.1013 30.6384 9.07293 31.4546 8.62058C32.2708 8.16823 33.2992 8.46319 33.7515 9.2794C37.5447 16.1236 36.5396 24.9165 30.7281 30.7281C24.9165 36.5396 16.1236 37.5447 9.2794 33.7515C8.46319 33.2992 8.16823 32.2708 8.62058 31.4546Z" fill="#3B9AF0" />
                                            </svg>
                                            Menu item 3
                                        </div>
                                        <div className="item">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0008 13.9354V8.24169C11.0008 7.95849 10.8884 7.68689 10.6881 7.48671L9.17942 5.97808C8.97924 5.77776 8.70764 5.66528 8.42444 5.66528H4.73157C4.14222 5.66528 3.66446 6.14305 3.66446 6.73239V13.9354C3.66446 14.5247 4.14222 15.0025 4.73157 15.0025H9.93374C10.5231 15.0025 11.0008 14.5247 11.0008 13.9354V13.9354Z" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M11.0008 12.3348H13.2685C13.8578 12.3348 14.3356 11.857 14.3356 11.2677V4.33145C14.3356 3.59476 13.7384 2.99756 13.0017 2.99756H8.06629C7.47694 2.99756 6.99918 3.47532 6.99918 4.06467V5.66534" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M11.0008 8.33306H8.86662C8.57195 8.33306 8.33307 8.09418 8.33307 7.79951V5.66528" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Menu item 3
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="card-body skeleton">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M58.3245 61.25H11.6754C8.45246 61.25 5.84204 58.6396 5.84204 55.4167V14.5833C5.84204 11.3604 8.45246 8.75 11.6754 8.75H58.3245C61.5475 8.75 64.1579 11.3604 64.1579 14.5833V55.4167C64.1579 58.6396 61.5445 61.25 58.3245 61.25Z" stroke="#3B9AF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M27.4581 22.1252C29.7361 24.4033 29.7361 28.0967 27.4581 30.3748C25.18 32.6528 21.4865 32.6528 19.2085 30.3748C16.9304 28.0967 16.9304 24.4033 19.2085 22.1252C21.4865 19.8471 25.18 19.8471 27.4581 22.1252" stroke="#3B9AF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M64.1666 46.6667L51.8612 36.8229C50.6041 35.8167 48.7666 36.0209 47.7604 37.2779L38.0304 49.4404C37.0241 50.6975 35.1895 50.9017 33.9295 49.8954L28.4812 45.535C27.2416 44.5433 25.4362 44.7242 24.4183 45.9463L11.6666 61.25" stroke="#3B9AF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                            <div className="skeleton">
                                <div className="skeleton-content">skeleton-content</div>
                                <div className="skeleton-content"></div>
                                <div className="skeleton-content"></div>
                                <div className="skeleton-content"></div>
                            </div>

                        </div>

                        <div className="card-footer skeleton justify-between">

                            <div className='small'>
                                Info footer
                            </div>

                            <div className='small'>
                                Info footer
                            </div>


                        </div>
                    </div>
                </div>
            </Section>


        </div>
    )
}
