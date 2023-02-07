import Section from "../../layout/section"

export default function MyaApp() {


  const checkbox_code = `<input className="input-check" type="checkbox" value="" />
  <input className="input-check" type="checkbox" value="" />
  <input className="input-check" type="checkbox" value="" disabled />
  <input className="input-check" type="checkbox" value="" checked />
  <input className="input-check" type="checkbox" value="" checked />
  <input className="input-check" type="checkbox" value="" checked disabled />`


  const radio_code = ` 
  <input className="input-radio" type="radio" />
  <input className="input-radio" type="radio" />
  <input className="input-radio" type="radio" disabled />
  <input className="input-radio" type="radio" checked />
  <input className="input-radio" type="radio" checked />
  <input className="input-radio" type="radio" disabled />
`

  return (
    <>

      <Section title="Inputs" code={`<input className="input" type="text" placeholder="input text" />
<input className="input" type="number" placeholder="input text" />`} >


        <form className="grid grid-cols-2 gap-8">

          <h3 className="h3 font-bold">Text</h3>
          <h3 className="h3 font-bold">Number</h3>

          <input className="input" type="text" placeholder="input text" />
          <input className="input" type="number" placeholder="input text" />


        </form>


      </Section>

      <Section type={true} title={"Icons"}
        code={`<div className="input">
  <span className="material-symbols-outlined">
    key
  </span>
  <input type="text" placeholder="input disabled" />
  <span className="material-symbols-outlined">
    visibility
  </span>
</div>`} >


        {/* ICONS */}
        <div className="flex items-start gap-8">

          <div className="input">
            <span className="material-symbols-outlined">
              key
            </span>
            <input type="text" placeholder="input disabled" />
            <span className="material-symbols-outlined">
              visibility
            </span>
          </div>


        </div>

      </Section>

      <Section type={true} title={"Password"} text={"el botón que muestra la contraseña será agregado automáticamente al final del contenedor del input, para no romper el componente no se debe agregar otro elemento después del input"}
        code={`<div className="input">
  <span className="material-symbols-outlined">
    key
  </span>
  <input className="input-password" type="password" placeholder="input password" />
</div>`}>


        <div className="flex items-start gap-8">
          <div className="input">
            <span className="material-symbols-outlined">
              key
            </span>
            <input className="input-password" type="password" placeholder="input password" />
          </div>

        </div>

      </Section>


      <Section type={true} title={"Estados"}
        code={`<input className="input input-success" type="text" placeholder="input-success" />

<input className="input input-error" type="text" placeholder="input-error" />

<input className="input" type="text" placeholder="input disabled" disabled />`}>
        <div className="flex items-center gap-8">
          <ul className="flex flex-col gap-4">
            <li><input className="input input-success" type="text" placeholder="input-success" /></li>
            <li><input className="input input-error" type="text" placeholder="input-error" /></li>
            <li><input className="input" type="text" placeholder="input disabled" disabled /></li>
          </ul>
        </div>

      </Section>

      <Section type={true} title={"Tamaños"}
        code={` 
<input className="input" type="text" placeholder="tamaño base" />

<input className="input input-sm" type="text" placeholder="input-sm" />

<input className="input input-lg" type="text" placeholder="input-md" />

            `} >
        <ul className="flex flex-col gap-4">
          <li><input className="input" type="text" placeholder="tamaño base" /></li>
          <li><input className="input input-sm" type="text" placeholder="input-sm" /></li>
          <li><input className="input input-lg" type="text" placeholder="input-lg" /></li>
        </ul>

      </Section>



      <Section title="Checkbox" code={checkbox_code}>

        <div className="box-dashed mx-auto grid grid-cols-3 grid-rows-2 gap-8 ">
          <input className="input-check" type="checkbox" value="" />
          <input className="input-check input-hover" type="checkbox" value="" />
          <input className="input-check " type="checkbox" value="" disabled />
          <input className="input-check" type="checkbox" value="" checked />
          <input className="input-check input-hover" type="checkbox" value="" checked />
          <input className="input-check" type="checkbox" value="" checked disabled />
        </div>


        <div className="flex justify-around w-full">

          <ul className="flex flex-col gap-8">
            <li>
              <h3 className="h3 font-extrabold">On</h3>
            </li>
            <li className="input-group">
              <input className="input-check" type="checkbox" checked value="" />
              <label htmlFor="">Checkbox On</label>
            </li>
            <li className="input-group">
              <input className="input-check  input-hover" type="checkbox" checked value="" />
              <label htmlFor="">Hover On</label>
            </li>
            <li className="input-group">
              <input className="input-check input-hover" type="checkbox" checked value="" />
              <label htmlFor="">Focused On</label>
            </li>
          </ul>

          <ul className="flex flex-col gap-8">
            <li>
              <h3 className="h3 font-extrabold">Off</h3>
            </li>
            <li className="input-group">
              <input className="input-check" type="checkbox" value="" />
              <label htmlFor="">Checkbox Off</label>
            </li>
            <li className="input-group">
              <input className="input-check  input-hover" type="checkbox" value="" />
              <label htmlFor="">Hover Off</label>
            </li>
            <li className="input-group">
              <input className="input-check input-hover" type="checkbox" value="" />
              <label htmlFor="">Focused Off</label>
            </li>
          </ul>

          <ul className="flex flex-col gap-8">
            <li>
              <h3 className="h3 font-extrabold">Disabled</h3>
            </li>
            <li className="input-group">
              <input className="input-check" type="checkbox" checked disabled value="" />
              <label htmlFor="">Disabled On</label>
            </li>
            <li className="input-group">
              <input className="input-check" type="checkbox" disabled value="" />
              <label htmlFor="">Disabled Off</label>
            </li>


          </ul>


        </div>
      </Section>


      <Section title="Radio" code={radio_code}>
        <form className="box-dashed mx-auto grid grid-cols-3 grid-rows-2 gap-8">
          <input className="input-radio" type="radio" />
          <input className="input-radio input-hover" type="radio" />
          <input className="input-radio" type="radio" disabled />
          <input className="input-radio" type="radio" checked />
          <input className="input-radio input-hover" type="radio" checked />
          <input className="input-radio" type="radio" checked disabled />
        </form>

        <div className="flex justify-around w-full">

          <ul className="flex flex-col gap-8">
            <li>
              <h3 className="h3 font-extrabold">On</h3>
            </li>
            <li className="input-group">
              <input className="input-radio" type="radio" checked value="" />
              <label htmlFor="">Checkbox On</label>
            </li>
            <li className="input-group">
              <input className="input-radio  input-hover" type="radio" checked value="" />
              <label htmlFor="">Hover On</label>
            </li>
            <li className="input-group">
              <input className="input-radio input-hover" type="radio" checked value="" />
              <label htmlFor="">Focused On</label>
            </li>
          </ul>

          <ul className="flex flex-col gap-8">
            <li>
              <h3 className="h3 font-extrabold">Off</h3>
            </li>
            <li className="input-group">
              <input className="input-radio" type="radio" value="" />
              <label htmlFor="">Checkbox Off</label>
            </li>
            <li className="input-group">
              <input className="input-radio  input-hover" type="radio" value="" />
              <label htmlFor="">Hover Off</label>
            </li>
            <li className="input-group">
              <input className="input-radio input-hover" type="radio" value="" />
              <label htmlFor="">Focused Off</label>
            </li>
          </ul>

          <ul className="flex flex-col gap-8">
            <li>
              <h3 className="h3 font-extrabold">Disabled</h3>
            </li>
            <li className="input-group">
              <input className="input-radio" type="radio" checked disabled value="" />
              <label htmlFor="">Disabled On</label>
            </li>
            <li className="input-group">
              <input className="input-radio" type="radio" disabled value="" />
              <label htmlFor="">Disabled Off</label>
            </li>


          </ul>


        </div>
      </Section>







    </ >
  )
}
