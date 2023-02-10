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
code={`<div class="message">
<span class="material-symbols-outlined">
  error
</span>
<div class="content">

  <div className='close'>
    <div>x</div>
  </div>
  Este mensaje es muy importante, pero es un poco más largo que el anterior, porque queremos probar que tal se ve esto en varios reglones.
</div>
</div>`}>

        <div className='flex flex-col items-start gap-8'>


          <div class="message">
            <span class="material-symbols-outlined">
              error
            </span>
            <div class="content">

              <div className='close'>
                <div>x</div>
              </div>
              Este mensaje es muy importante, pero es un poco más largo que el anterior, porque queremos probar que tal se ve esto en varios reglones.
            </div>
          </div>

          

          <div class="message">
            <span class="material-symbols-outlined">
              error
            </span>
            <div class="content">

              <div className='close'>
                <div>x</div>
              </div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nulla necessitatibus ullam autem voluptatibus quam a asperiores atque cum earum quod deserunt, temporibus, quibusdam laborum aperiam animi repellat aliquam impedit.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nulla necessitatibus ullam autem voluptatibus quam a asperiores atque cum earum quod deserunt, temporibus, quibusdam laborum aperiam animi repellat aliquam impedit.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nulla necessitatibus ullam autem voluptatibus quam a asperiores atque cum earum quod deserunt, temporibus, quibusdam laborum aperiam animi repellat aliquam impedit.
            </div>
          </div>

        </div>

      </Section>


    </div>
  )
}
