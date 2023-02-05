import Section from "../../layout/section"

import Codebox from "../../layout/codebox"
export default function MyaApp() {


  const checkbox_code = `<input class="input-check" type="checkbox" value="" />
  <input class="input-check" type="checkbox" value="" />
  <input class="input-check" type="checkbox" value="" disabled />
  <input class="input-check" type="checkbox" value="" checked />
  <input class="input-check" type="checkbox" value="" checked />
  <input class="input-check" type="checkbox" value="" checked disabled />`


  const radio_code = ` 
  <input class="input-radio" type="radio" />
  <input class="input-radio" type="radio" />
  <input class="input-radio" type="radio" disabled />
  <input class="input-radio" type="radio" checked />
  <input class="input-radio" type="radio" checked />
  <input class="input-radio" type="radio" disabled />
`

  return (
    <div>

      <Section title="Inputs" >

        <div className="flex justify-around w-full">
          <ul className="flex flex-col gap-4">
            <li><h4 className="h4 font-bold">text</h4></li>
            <li><input class="input" type="text" placeholder="input text" /></li>
          </ul>

          <ul className="flex flex-col gap-4">
            <li><h4 className="h4 font-bold">password</h4></li>
            <li><input class="input" type="password" placeholder="input text" /></li>
          </ul>

          <ul className="flex flex-col gap-4">
            <li><h4 className="h4 font-bold">number</h4></li>
            <li><input class="input" type="number" placeholder="input text" /></li>
          </ul>


        </div>


        {/* icons */}
        <div className="flex items-center gap-8">
          <ul className="flex flex-col gap-4">
            <li><h4 className="h4  font-bold">icons</h4></li>
            <li>
              <div className="input">
                <span class="material-symbols-outlined">
                  key
                </span>
                <input type="text" placeholder="input disabled" />
                <span class="material-symbols-outlined">
                  visibility
                </span>
              </div>
            </li>
          </ul>

          < Codebox>
            {`<div className="input">
  <span class="material-symbols-outlined">
    key
  </span>
  <input type="text" placeholder="input disabled" />
  <span class="material-symbols-outlined">
    visibility
  </span>
</div>`}
          </Codebox>
        </div>


        {/* states */}
        <div className="flex items-center gap-8">
          <ul className="flex flex-col gap-4">
            <li><h4 className="h4  font-bold">Estados</h4></li>
            <li><input class="input input-success" type="text" placeholder="input-success" /></li>
            <li><input class="input input-error" type="text" placeholder="input-error" /></li>
            <li><input class="input" type="text" placeholder="input disabled" disabled /></li>
          </ul>

          < Codebox>
            {`<input class="input input-success" type="text" placeholder="input-success" />

<input class="input input-error" type="text" placeholder="input-error" />

<input class="input" type="text" placeholder="input disabled" disabled />`}
          </Codebox>
        </div>



        {/* tamaños */}
        <div className="flex items-center gap-8">
          <ul className="flex flex-col gap-4">
            <li><h4 className="h4  font-bold">Tamaños</h4></li>
            <li><input class="input" type="text" placeholder="tamaño base" /></li>
            <li><input class="input input-sm" type="text" placeholder="input-sm" /></li>
            <li><input class="input input-lg" type="text" placeholder="input-md" /></li>
          </ul>

          < Codebox>
            {`<input class="input input-success" type="text" placeholder="input-success" />

<input class="input input-error" type="text" placeholder="input-error" />

<input class="input" type="text" placeholder="input disabled" disabled />`}
          </Codebox>
        </div>

      </Section>



      <Section title="Checkbox" code={checkbox_code}>
        <div className="box-dashed grid grid-cols-3 grid-rows-2 gap-8 ">
          <input class="input-check" type="checkbox" value="" />
          <input class="input-check input-hover" type="checkbox" value="" />
          <input class="input-check " type="checkbox" value="" disabled />
          <input class="input-check" type="checkbox" value="" checked />
          <input class="input-check input-hover" type="checkbox" value="" checked />
          <input class="input-check" type="checkbox" value="" checked disabled />
        </div>


        <div className="flex justify-around w-full">

          <ul className="flex flex-col gap-8">
            <li>
              <h4 className="h4 font-extrabold">On</h4>
            </li>
            <li className="input-group">
              <input class="input-check" type="checkbox" checked value="" />
              <label htmlFor="">Checkbox On</label>
            </li>
            <li className="input-group">
              <input class="input-check  input-hover" type="checkbox" checked value="" />
              <label htmlFor="">Hover On</label>
            </li>
            <li className="input-group">
              <input class="input-check input-hover" type="checkbox" checked value="" />
              <label htmlFor="">Focused On</label>
            </li>
          </ul>

          <ul className="flex flex-col gap-8">
            <li>
              <h4 className="h4 font-extrabold">Off</h4>
            </li>
            <li className="input-group">
              <input class="input-check" type="checkbox" value="" />
              <label htmlFor="">Checkbox Off</label>
            </li>
            <li className="input-group">
              <input class="input-check  input-hover" type="checkbox" value="" />
              <label htmlFor="">Hover Off</label>
            </li>
            <li className="input-group">
              <input class="input-check input-hover" type="checkbox" value="" />
              <label htmlFor="">Focused Off</label>
            </li>
          </ul>

          <ul className="flex flex-col gap-8">
            <li>
              <h4 className="h4 font-extrabold">Disabled</h4>
            </li>
            <li className="input-group">
              <input class="input-check" type="checkbox" checked disabled value="" />
              <label htmlFor="">Disabled On</label>
            </li>
            <li className="input-group">
              <input class="input-check" type="checkbox" disabled value="" />
              <label htmlFor="">Disabled Off</label>
            </li>


          </ul>


        </div>
      </Section>


      <Section title="Radio" code={radio_code}>
        <form className="box-dashed grid grid-cols-3 grid-rows-2 gap-8">
          <input class="input-radio" type="radio" />
          <input class="input-radio input-hover" type="radio" />
          <input class="input-radio" type="radio" disabled />
          <input class="input-radio" type="radio" checked />
          <input class="input-radio input-hover" type="radio" checked />
          <input class="input-radio" type="radio" checked disabled />
        </form>

        <div className="flex justify-around w-full">

          <ul className="flex flex-col gap-8">
            <li>
              <h4 className="h4 font-extrabold">On</h4>
            </li>
            <li className="input-group">
              <input class="input-radio" type="radio" checked value="" />
              <label htmlFor="">Checkbox On</label>
            </li>
            <li className="input-group">
              <input class="input-radio  input-hover" type="radio" checked value="" />
              <label htmlFor="">Hover On</label>
            </li>
            <li className="input-group">
              <input class="input-radio input-hover" type="radio" checked value="" />
              <label htmlFor="">Focused On</label>
            </li>
          </ul>

          <ul className="flex flex-col gap-8">
            <li>
              <h4 className="h4 font-extrabold">Off</h4>
            </li>
            <li className="input-group">
              <input class="input-radio" type="radio" value="" />
              <label htmlFor="">Checkbox Off</label>
            </li>
            <li className="input-group">
              <input class="input-radio  input-hover" type="radio" value="" />
              <label htmlFor="">Hover Off</label>
            </li>
            <li className="input-group">
              <input class="input-radio input-hover" type="radio" value="" />
              <label htmlFor="">Focused Off</label>
            </li>
          </ul>

          <ul className="flex flex-col gap-8">
            <li>
              <h4 className="h4 font-extrabold">Disabled</h4>
            </li>
            <li className="input-group">
              <input class="input-radio" type="radio" checked disabled value="" />
              <label htmlFor="">Disabled On</label>
            </li>
            <li className="input-group">
              <input class="input-radio" type="radio" disabled value="" />
              <label htmlFor="">Disabled Off</label>
            </li>


          </ul>


        </div>
      </Section>







    </div>
  )
}
