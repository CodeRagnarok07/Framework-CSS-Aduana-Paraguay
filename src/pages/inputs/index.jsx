
export default function MyaApp() {
  return (
    <div>


      <section>

        <h3 className="h3">Checkbox</h3>

        <div className="p-4 flex flex-col items-center justify-center gap-2 ">

          <div className="box-dashed grid grid-cols-3 grid-rows-2 gap-8">

            <input class="input-check" type="checkbox" value="" />
            <input class="input-check" type="checkbox" value="" />
            <input class="input-check" type="checkbox" value="" disabled />
            <input class="input-check" type="checkbox" value="" checked />
            <input class="input-check" type="checkbox" value="" checked />
            <input class="input-check" type="checkbox" value="" checked disabled />
          </div>
          <hr />
          <code>
            {` <div className="p-2xl flex items-center justify-center ">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
      </div>`}
          </code>

        </div>

      </section>

      <section>

        <h3 className="h3">Checkbox</h3>

        <div className="p-4 flex flex-col items-center justify-center gap-2 ">

          <form className="box-dashed grid grid-cols-3 grid-rows-2 gap-8">
            <input class="input-radio" type="radio" />
            <input class="input-radio" type="radio" />
            <input class="input-radio" type="radio" disabled />
            <input class="input-radio" type="radio" checked/>
            <input class="input-radio" type="radio" checked/>
            <input class="input-radio" type="radio" disabled/>
          </form>
          <hr />
          <code>
            {` <div className="p-2xl flex items-center justify-center ">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
</div>`}
          </code>

        </div>

      </section>








    </div>
  )
}
