import React from 'react'
import Section from '../layout/section'
export default function Navbar() {
    return (
        <div>

            <Section title={"navbar and tabs"}
                code={`

<div className="navbar">

<div className="item-nav">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51017 7.78857L0.435871 11.378C0.337883 11.7054 0.445203 12.064 0.701747 12.2663L10 19.6001L1.51017 7.78857Z" fill="#FCA326" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4898 7.78857L19.5641 11.378C19.6621 11.7054 19.5548 12.064 19.2983 12.2663L10 19.6001L18.4898 7.78857Z" fill="#FCA326" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99999 19.6L6.46474 7.78845H1.51016L9.99999 19.6Z" fill="#FC6D26" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.6L13.5353 7.78845H18.4898L10 19.6Z" fill="#FC6D26" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4897 7.78853H13.5352L15.6645 0.674564C15.774 0.308462 16.251 0.308561 16.3605 0.674564L18.4897 7.78853Z" fill="#E24329" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51028 7.78853H6.46486L4.33556 0.674564C4.22604 0.308462 3.74901 0.308561 3.63949 0.674564L1.51028 7.78853Z" fill="#E24329" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99995 19.6001L13.5352 7.78857H6.46469L9.99995 19.6001Z" fill="#E24329" />
    </svg>

    Test tab flow
    <div className="bdg bg-primary-light">48</div>
</div>

<div className="item-nav active">

    Test tab flow
    <div className="bdg bg-primary-light">48</div>
</div>
<div className="item-nav">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51017 7.78857L0.435871 11.378C0.337883 11.7054 0.445203 12.064 0.701747 12.2663L10 19.6001L1.51017 7.78857Z" fill="#FCA326" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4898 7.78857L19.5641 11.378C19.6621 11.7054 19.5548 12.064 19.2983 12.2663L10 19.6001L18.4898 7.78857Z" fill="#FCA326" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99999 19.6L6.46474 7.78845H1.51016L9.99999 19.6Z" fill="#FC6D26" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.6L13.5353 7.78845H18.4898L10 19.6Z" fill="#FC6D26" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4897 7.78853H13.5352L15.6645 0.674564C15.774 0.308462 16.251 0.308561 16.3605 0.674564L18.4897 7.78853Z" fill="#E24329" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51028 7.78853H6.46486L4.33556 0.674564C4.22604 0.308462 3.74901 0.308561 3.63949 0.674564L1.51028 7.78853Z" fill="#E24329" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99995 19.6001L13.5352 7.78857H6.46469L9.99995 19.6001Z" fill="#E24329" />
    </svg>

    Test tab flow
    <div className="bdg bg-primary-light">48</div>
</div>
</div>`}>

                <div>


                    <div className="navbar">

                        <div className="item-nav">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51017 7.78857L0.435871 11.378C0.337883 11.7054 0.445203 12.064 0.701747 12.2663L10 19.6001L1.51017 7.78857Z" fill="#FCA326" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4898 7.78857L19.5641 11.378C19.6621 11.7054 19.5548 12.064 19.2983 12.2663L10 19.6001L18.4898 7.78857Z" fill="#FCA326" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99999 19.6L6.46474 7.78845H1.51016L9.99999 19.6Z" fill="#FC6D26" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.6L13.5353 7.78845H18.4898L10 19.6Z" fill="#FC6D26" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4897 7.78853H13.5352L15.6645 0.674564C15.774 0.308462 16.251 0.308561 16.3605 0.674564L18.4897 7.78853Z" fill="#E24329" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51028 7.78853H6.46486L4.33556 0.674564C4.22604 0.308462 3.74901 0.308561 3.63949 0.674564L1.51028 7.78853Z" fill="#E24329" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99995 19.6001L13.5352 7.78857H6.46469L9.99995 19.6001Z" fill="#E24329" />
                            </svg>

                            Test tab flow
                            <div className="bdg bg-primary-light">48</div>
                        </div>

                        <div className="item-nav active">

                            Test tab flow
                            <div className="bdg bg-primary-light">48</div>
                        </div>
                        <div className="item-nav">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51017 7.78857L0.435871 11.378C0.337883 11.7054 0.445203 12.064 0.701747 12.2663L10 19.6001L1.51017 7.78857Z" fill="#FCA326" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4898 7.78857L19.5641 11.378C19.6621 11.7054 19.5548 12.064 19.2983 12.2663L10 19.6001L18.4898 7.78857Z" fill="#FCA326" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99999 19.6L6.46474 7.78845H1.51016L9.99999 19.6Z" fill="#FC6D26" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.6L13.5353 7.78845H18.4898L10 19.6Z" fill="#FC6D26" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4897 7.78853H13.5352L15.6645 0.674564C15.774 0.308462 16.251 0.308561 16.3605 0.674564L18.4897 7.78853Z" fill="#E24329" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51028 7.78853H6.46486L4.33556 0.674564C4.22604 0.308462 3.74901 0.308561 3.63949 0.674564L1.51028 7.78853Z" fill="#E24329" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99995 19.6001L13.5352 7.78857H6.46469L9.99995 19.6001Z" fill="#E24329" />
                            </svg>

                            Test tab flow
                            <div className="bdg bg-primary-light">48</div>
                        </div>
                    </div>


                </div>

            </Section>



            <Section title={"navbar and dropmenu"}
                code={`
<div className="navbar">


<div className="item-nav menu ">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51017 7.78857L0.435871 11.378C0.337883 11.7054 0.445203 12.064 0.701747 12.2663L10 19.6001L1.51017 7.78857Z" fill="#FCA326" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4898 7.78857L19.5641 11.378C19.6621 11.7054 19.5548 12.064 19.2983 12.2663L10 19.6001L18.4898 7.78857Z" fill="#FCA326" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99999 19.6L6.46474 7.78845H1.51016L9.99999 19.6Z" fill="#FC6D26" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.6L13.5353 7.78845H18.4898L10 19.6Z" fill="#FC6D26" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4897 7.78853H13.5352L15.6645 0.674564C15.774 0.308462 16.251 0.308561 16.3605 0.674564L18.4897 7.78853Z" fill="#E24329" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51028 7.78853H6.46486L4.33556 0.674564C4.22604 0.308462 3.74901 0.308561 3.63949 0.674564L1.51028 7.78853Z" fill="#E24329" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99995 19.6001L13.5352 7.78857H6.46469L9.99995 19.6001Z" fill="#E24329" />
    </svg>

    Test tab flow
    <div className="bdg bg-primary-light">48</div>

    <div className="menu-cont down ">

        <div className='dropdown text-black'>
            <div className="item">
                Menu item-nav 1
            </div>
            <div className="item">
                <svg className="snniper sm" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66146 7.66146C2.9441 12.3788 2.12227 19.5216 5.2042 25.0825C5.65655 25.8987 5.36159 26.9271 4.54539 27.3794C3.72918 27.8318 2.70081 27.5368 2.24846 26.7206C-1.54471 19.8764 -0.539636 11.0835 5.27191 5.27191C11.0835 -0.539636 19.8764 -1.54471 26.7206 2.24846C27.5368 2.70081 27.8318 3.72918 27.3794 4.54539C26.9271 5.36159 25.8987 5.65655 25.0825 5.2042C19.5216 2.12227 12.3788 2.9441 7.66146 7.66146ZM8.62058 31.4546C9.07293 30.6384 10.1013 30.3434 10.9175 30.7958C16.4784 33.8777 23.6212 33.0559 28.3385 28.3385C33.0559 23.6212 33.8777 16.4784 30.7958 10.9175C30.3434 10.1013 30.6384 9.07293 31.4546 8.62058C32.2708 8.16823 33.2992 8.46319 33.7515 9.2794C37.5447 16.1236 36.5396 24.9165 30.7281 30.7281C24.9165 36.5396 16.1236 37.5447 9.2794 33.7515C8.46319 33.2992 8.16823 32.2708 8.62058 31.4546Z" fill="#3B9AF0" />
                </svg>
                Menu item-nav 3
            </div>
            <div className="item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0008 13.9354V8.24169C11.0008 7.95849 10.8884 7.68689 10.6881 7.48671L9.17942 5.97808C8.97924 5.77776 8.70764 5.66528 8.42444 5.66528H4.73157C4.14222 5.66528 3.66446 6.14305 3.66446 6.73239V13.9354C3.66446 14.5247 4.14222 15.0025 4.73157 15.0025H9.93374C10.5231 15.0025 11.0008 14.5247 11.0008 13.9354V13.9354Z" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.0008 12.3348H13.2685C13.8578 12.3348 14.3356 11.857 14.3356 11.2677V4.33145C14.3356 3.59476 13.7384 2.99756 13.0017 2.99756H8.06629C7.47694 2.99756 6.99918 3.47532 6.99918 4.06467V5.66534" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.0008 8.33306H8.86662C8.57195 8.33306 8.33307 8.09418 8.33307 7.79951V5.66528" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Menu item-nav 3
            </div>
        </div>
    </div>


</div>
</div>
`}>

                <div>


                    <div className="navbar">

                        <div className="item-nav menu menu-arrow ">
                            Test tab flow

                            <div className="menu-cont down ">

                                <div className='dropdown text-black'>
                                    <div className="item">
                                        Menu item-nav 1
                                    </div>
                                    <div className="item">
                                        <svg className="snniper sm" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66146 7.66146C2.9441 12.3788 2.12227 19.5216 5.2042 25.0825C5.65655 25.8987 5.36159 26.9271 4.54539 27.3794C3.72918 27.8318 2.70081 27.5368 2.24846 26.7206C-1.54471 19.8764 -0.539636 11.0835 5.27191 5.27191C11.0835 -0.539636 19.8764 -1.54471 26.7206 2.24846C27.5368 2.70081 27.8318 3.72918 27.3794 4.54539C26.9271 5.36159 25.8987 5.65655 25.0825 5.2042C19.5216 2.12227 12.3788 2.9441 7.66146 7.66146ZM8.62058 31.4546C9.07293 30.6384 10.1013 30.3434 10.9175 30.7958C16.4784 33.8777 23.6212 33.0559 28.3385 28.3385C33.0559 23.6212 33.8777 16.4784 30.7958 10.9175C30.3434 10.1013 30.6384 9.07293 31.4546 8.62058C32.2708 8.16823 33.2992 8.46319 33.7515 9.2794C37.5447 16.1236 36.5396 24.9165 30.7281 30.7281C24.9165 36.5396 16.1236 37.5447 9.2794 33.7515C8.46319 33.2992 8.16823 32.2708 8.62058 31.4546Z" fill="#3B9AF0" />
                                        </svg>
                                        Menu item-nav 3
                                    </div>
                                    <div className="item">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0008 13.9354V8.24169C11.0008 7.95849 10.8884 7.68689 10.6881 7.48671L9.17942 5.97808C8.97924 5.77776 8.70764 5.66528 8.42444 5.66528H4.73157C4.14222 5.66528 3.66446 6.14305 3.66446 6.73239V13.9354C3.66446 14.5247 4.14222 15.0025 4.73157 15.0025H9.93374C10.5231 15.0025 11.0008 14.5247 11.0008 13.9354V13.9354Z" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.0008 12.3348H13.2685C13.8578 12.3348 14.3356 11.857 14.3356 11.2677V4.33145C14.3356 3.59476 13.7384 2.99756 13.0017 2.99756H8.06629C7.47694 2.99756 6.99918 3.47532 6.99918 4.06467V5.66534" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.0008 8.33306H8.86662C8.57195 8.33306 8.33307 8.09418 8.33307 7.79951V5.66528" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Menu item-nav 3
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="item-nav active">

                            Test tab flow
                        </div>
                        <div className="item-nav">
                            Test tab flow
                        </div>

                        <div className="item-nav menu menu-arrow">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51017 7.78857L0.435871 11.378C0.337883 11.7054 0.445203 12.064 0.701747 12.2663L10 19.6001L1.51017 7.78857Z" fill="#FCA326" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4898 7.78857L19.5641 11.378C19.6621 11.7054 19.5548 12.064 19.2983 12.2663L10 19.6001L18.4898 7.78857Z" fill="#FCA326" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99999 19.6L6.46474 7.78845H1.51016L9.99999 19.6Z" fill="#FC6D26" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.6L13.5353 7.78845H18.4898L10 19.6Z" fill="#FC6D26" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4897 7.78853H13.5352L15.6645 0.674564C15.774 0.308462 16.251 0.308561 16.3605 0.674564L18.4897 7.78853Z" fill="#E24329" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51028 7.78853H6.46486L4.33556 0.674564C4.22604 0.308462 3.74901 0.308561 3.63949 0.674564L1.51028 7.78853Z" fill="#E24329" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99995 19.6001L13.5352 7.78857H6.46469L9.99995 19.6001Z" fill="#E24329" />
                            </svg>

                            Test tab flow
                            <div className="bdg bg-primary-light">48</div>

                            <div className="menu-cont down ">

                                <div className='dropdown text-black'>
                                    <div className="item">
                                        Menu item-nav 1
                                    </div>
                                    <div className="item">
                                        <svg className="snniper sm" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66146 7.66146C2.9441 12.3788 2.12227 19.5216 5.2042 25.0825C5.65655 25.8987 5.36159 26.9271 4.54539 27.3794C3.72918 27.8318 2.70081 27.5368 2.24846 26.7206C-1.54471 19.8764 -0.539636 11.0835 5.27191 5.27191C11.0835 -0.539636 19.8764 -1.54471 26.7206 2.24846C27.5368 2.70081 27.8318 3.72918 27.3794 4.54539C26.9271 5.36159 25.8987 5.65655 25.0825 5.2042C19.5216 2.12227 12.3788 2.9441 7.66146 7.66146ZM8.62058 31.4546C9.07293 30.6384 10.1013 30.3434 10.9175 30.7958C16.4784 33.8777 23.6212 33.0559 28.3385 28.3385C33.0559 23.6212 33.8777 16.4784 30.7958 10.9175C30.3434 10.1013 30.6384 9.07293 31.4546 8.62058C32.2708 8.16823 33.2992 8.46319 33.7515 9.2794C37.5447 16.1236 36.5396 24.9165 30.7281 30.7281C24.9165 36.5396 16.1236 37.5447 9.2794 33.7515C8.46319 33.2992 8.16823 32.2708 8.62058 31.4546Z" fill="#3B9AF0" />
                                        </svg>
                                        Menu item-nav 3
                                    </div>
                                    <div className="item">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0008 13.9354V8.24169C11.0008 7.95849 10.8884 7.68689 10.6881 7.48671L9.17942 5.97808C8.97924 5.77776 8.70764 5.66528 8.42444 5.66528H4.73157C4.14222 5.66528 3.66446 6.14305 3.66446 6.73239V13.9354C3.66446 14.5247 4.14222 15.0025 4.73157 15.0025H9.93374C10.5231 15.0025 11.0008 14.5247 11.0008 13.9354V13.9354Z" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.0008 12.3348H13.2685C13.8578 12.3348 14.3356 11.857 14.3356 11.2677V4.33145C14.3356 3.59476 13.7384 2.99756 13.0017 2.99756H8.06629C7.47694 2.99756 6.99918 3.47532 6.99918 4.06467V5.66534" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.0008 8.33306H8.86662C8.57195 8.33306 8.33307 8.09418 8.33307 7.79951V5.66528" stroke="#3B9AF0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Menu item-nav 3
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>

            </Section>
        </div>
    )
}
