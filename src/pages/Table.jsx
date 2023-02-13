import React from 'react'
import Section from '../layout/section'

export default function Table() {
  return (
    <div>

      <Section title={"Badge"}
        code={`<div className="btn-sm btn-primary">
  element
  <div className="bdg bg-white">48</div>
</div>`}>

        <div className='w-full'>

          <div className="table">


            <div className='table-head-options'>

              <div className='btn-sm'>
                <span class="material-symbols-outlined">
                  replay
                </span>
                Recargar
              </div>

              <div className='btn-sm'>
                <span class="material-symbols-outlined">
                  add
                </span>
                Crear
              </div>

              <div className='table-head-dropmenu'>
                <div className="dropmenu-name ">
                  Filtro
                </div>

                <div className="dropmenu-selected  menu menu-arrow">

                  Todos

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
              <div className="w-full"></div>

              <div className="input">
                <span class="material-symbols-outlined">
                  search
                </span>
              <input className='w-[500px]' type="text" placeholder="buscar" />

            </div>



          </div>

          <table>
            <thead>
              <tr className='table-head'>
                <th >
                  <div>
                    Teléfono
                    <span class="material-symbols-outlined">unfold_more</span>
                  </div>
                </th>
                <th >
                  <div>
                    Nombre
                    <span class="material-symbols-outlined">unfold_more</span>

                  </div>
                </th>
                <th >
                  <div>
                    Dirección
                    <span class="material-symbols-outlined">unfold_more</span>
                  </div>
                </th>


              </tr>


            </thead>

            <tbody>
              <tr>
                <td>+7495-123-45-67</td>
                <td>Meriden O.	</td>
                <td>32 St Margarets St. Hendersonville, NC 28792</td>
              </tr>
              <tr>
                <td>+7495-123-45-67</td>
                <td>Meriden O.	</td>
                <td>32 St Margarets St. Hendersonville, NC 28792</td>
              </tr>
              <tr>
                <td>+7495-123-45-67</td>
                <td>Meriden O.	</td>
                <td>32 St Margarets St. Hendersonville, NC 28792</td>
              </tr>
              <tr>
                <td>+7495-123-45-67</td>
                <td>Meriden O.	</td>
                <td>32 St Margarets St. Hendersonville, NC 28792</td>
              </tr>
              <tr>
                <td>+7495-123-45-67</td>
                <td>Meriden O.	</td>
                <td>32 St Margarets St. Hendersonville, NC 28792</td>
              </tr>
              <tr>
                <td>+7495-123-45-67</td>
                <td>Meriden O.	</td>
                <td>32 St Margarets St. Hendersonville, NC 28792</td>
              </tr>
            </tbody>

          </table>

          <div className="pagination-cont">

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
        </div>

    </div>

      </Section >



    </div >
  )
}
