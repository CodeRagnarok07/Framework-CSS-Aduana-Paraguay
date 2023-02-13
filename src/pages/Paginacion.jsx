import React from 'react'
import Section from '../layout/section'

export default function Paginacion() {
    return (
        <div>

            <Section title={"Badge"} type={true}
                code={`<div className="btn-sm btn-primary">
  element
  <div className="bdg bg-white">48</div>
</div>`}>

                <div>

                    <div className="pagination">

                        <div className='pagination-item'>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.33337 1V13" stroke="#808080" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.6634 1L4.66669 7.018L10.6667 13" stroke="#808080" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='pagination-item'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 14L5 7.99867L10.9967 2" stroke="#808080" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <div className='pagination-item'>
                            1
                        </div>
                        <div className='pagination-item active'>
                            2
                        </div>

                        <div className='pagination-item'>
                            ...
                        </div>

                        <div className='pagination-item'>
                            4
                        </div>

                        <div className='pagination-item'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00333 2L11 8.018L5 14" stroke="#808080" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='pagination-item'>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 1V13" stroke="#808080" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.33671 1L7.33337 7.018L1.33337 13" stroke="#808080" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>


                    </div>


                </div>

            </Section>



        </div>
    )
}
