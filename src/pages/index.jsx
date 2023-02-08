import React from 'react'
import Section from '../layout/section'

export default function index() {
  return (
    <div>

      <Section title={"Badge"} type={true}
        code={`<div className="btn-sm btn-primary">
  element
  <div className="bdg bg-white">48</div>
</div>`}>

        <div>
          <div className="btn-sm btn-primary ">
            element
            <div className="bdg bg-white">48</div>
          </div>
        </div>

      </Section>

      <Section title={"posicion"}
        code={`

        // left top
        <div>
          <div className="btn-sm btn-primary relative">
            element
            <div className="bdg bg-success absolute -top-4 -left-4">48</div>
          </div>
        </div>

        //  top

        <div>
          <div className="btn-sm btn-primary relative">
            element
            <div className="bdg bg-success absolute -top-4">48</div>
          </div>
        </div>

        // right top
        <div>
          <div className="btn-sm btn-primary relative">
            element
            <div className="bdg bg-success absolute -top-4 -right-4">48</div>
          </div>
        </div>

        <div>
          <div className="btn-sm btn-primary relative">
            element
            <div className="bdg bg-success absolute  -left-4">48</div>
          </div>
        </div>

        <div>
          <div className="btn-sm btn-primary relative">
            element
            <div className="bdg bg-success absolute  ">48</div>
          </div>
        </div>
        <div>
          <div className="btn-sm btn-primary relative">
            element
            <div className="bdg bg-success absolute  -right-4">48</div>
          </div>
        </div>

        <div>
          <div className="btn-sm btn-primary relative">
            element
            <div className="bdg bg-success absolute  -bottom-4 -left-4">48</div>
          </div>
        </div>

        <div>
          <div className="btn-sm btn-primary relative">
            element
            <div className="bdg bg-success absolute  -bottom-4">48</div>
          </div>
        </div>
        <div>
          <div className="btn-sm btn-primary relative">
            element
            <div className="bdg bg-success absolute  -bottom-4 -right-4">48</div>
          </div>
        `}>


        <div className='grid grid-cols-3 gap-16'>

          <div>
            <div className="btn-sm btn-primary relative">
              element
              <div className="bdg bg-success absolute -top-4 -left-4">48</div>
            </div>
          </div>

          <div>
            <div className="btn-sm btn-primary relative">
              element
              <div className="bdg bg-success absolute -top-4">48</div>
            </div>
          </div>



          <div>
            <div className="btn-sm btn-primary relative">
              element
              <div className="bdg bg-success absolute -top-4 -right-4">48</div>
            </div>
          </div>




          <div>
            <div className="btn-sm btn-primary relative">
              element
              <div className="bdg bg-success absolute  -left-4">48</div>
            </div>
          </div>

          <div>
            <div className="btn-sm btn-primary relative">
              element
              <div className="bdg bg-success absolute  ">48</div>
            </div>
          </div>
          <div>
            <div className="btn-sm btn-primary relative">
              element
              <div className="bdg bg-success absolute  -right-4">48</div>
            </div>
          </div>

          <div>
            <div className="btn-sm btn-primary relative">
              element
              <div className="bdg bg-success absolute  -bottom-4 -left-4">48</div>
            </div>
          </div>

          <div>
            <div className="btn-sm btn-primary relative">
              element
              <div className="bdg bg-success absolute  -bottom-4">48</div>
            </div>
          </div>
          <div>
            <div className="btn-sm btn-primary relative">
              element
              <div className="bdg bg-success absolute  -bottom-4 -right-4">48</div>
            </div>
          </div>

        </div>



      </Section>

      <Section title={"Badge"} type={true}
        code={`<div className="btn-sm btn-primary">
  element
  <div className="bdg bg-white">48</div>
</div>`}>

        <div>
          <div className="btn-sm btn-primary ">
            element
            <div className="bdg bg-white">48</div>
          </div>
        </div>

      </Section>



      <Section title={"Mensaje"} type={true}
        code={`<div className="btn-sm btn-primary">
  element
  <div className="bdg bg-white">48</div>
</div>`}>

        <div className='grid gap-8'>

          <div className="message">
            
            <div className='close'>
              <div>x</div>
            </div>
            <span class="material-symbols-outlined">
              error
            </span>
            Este mensaje es muy importante.
          </div>

          <div className="message ">
            <span class="material-symbols-outlined">
              error
            </span>
            Este mensaje es muy importante, pero es un poco más largo que el anterior, porque queremos probar que tal se ve esto en varios reglones.
          </div>
        </div>

      </Section>


    </div>
  )
}
