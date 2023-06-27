import { useCallback, useEffect } from "react";

export const InputBox = ({ inputcss,type, placeholder, useRef, state, setState, label, defaultValue, editstatus }) => {

  return (

    <div className="col-md-6">
      <label htmlFor="validationDefault02" className="form-label" style={{ textAlign: 'left', width: '100%' }}>
        {label}
      </label>
      {editstatus ? (
        <input
          ref={useRef}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={`form-control ${inputcss}`}
          id="validationDefault01"
          required
          readOnly
        />
      ) : (

        <input
          ref={useRef}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="form-control"
          id="validationDefault01"
          required

        />
      )}

    </div>
  )
}
export const InputBoxTextArea = ({ type, placeholder, state, setState, label, defaultValue,inputcss }) => {
  return (
    <>
      <label className="form-label" style={{ textAlign: 'left', width: '100%' }}>
        {label}
      </label>
      <input type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
        className={`form-control ${inputcss}`}
        id="validationDefault01"
        required 
        
        />
    </>
  )
}

export const InputBoxcmp = ({ type, defaultValue, placeholder, state, setState, label, className, iconname, inputcss, inputboxcontainer }) => {
  return (

    <div className={className}>
      {label && <label htmlFor="validationDefault02" className="form-label" style={{ textAlign: 'left', width: '100%' }}>
        {label}
      </label>}
      <div className={`d-flex align-items-center ${inputboxcontainer}`}>
        <input type={type}

          defaultValue={defaultValue}
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={`form-control ${inputcss}`}
          // id="validationDefault01"
          required />
        {iconname && <i class={iconname}></i>}
      </div>
    </div>
  )
}


export const InputBoxCustom = ({ type, placeholder, state, setState, label, className, iconname, inputcss, inputboxcontainer,defaultValue,readOnlyStatus }) => {
  return (

    <div className={className}>
      {label && <label htmlFor="validationDefault02" className="form-label" style={{ textAlign: 'left', width: '100%' }}>
        {label}
      </label>}
      <div className={`d-flex align-items-center ${inputboxcontainer}`}>
        <input type={type}
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={inputcss}
          // id="validationDefault01"
          required 
            defaultValue={defaultValue}
            readOnly={readOnlyStatus}
          />
        {iconname && <i class={iconname}></i>}
      </div>
    </div>
  )
}

export const InputBoxReadOnlycmp = ({ type, defaultValue, placeholder, state, setState, label, className, iconname, inputcss, inputboxcontainer }) => {
  return (

    <div className={className}>
      {label && <label htmlFor="validationDefault02" className="form-label" style={{ textAlign: 'left', width: '100%' }}>
        {label}
      </label>}
      <div className={`d-flex align-items-center ${inputboxcontainer}`}>
        <input type={type}

          defaultValue={defaultValue}
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={`form-control ${inputcss}`}
          // id="validationDefault01"
          required readOnly />
        {iconname && <i class={iconname}></i>}
      </div>
    </div>
  )
}
export const UserInputBoxCustom = ({ type, placeholder, state, setState, label, className, iconname, inputcss, inputboxcontainer,defaultValue,readOnlyStatus }) => {
  return (

    <div className={className}>
      {label && <label htmlFor="validationDefault02" className="form-label mb-0" style={{ textAlign: 'left', width: '100%' }}>
        {label}
      </label>}
      <div className={`d-flex align-items-center ${inputboxcontainer}`}>
        <input type={type}
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={inputcss}
          // id="validationDefault01"
          required 
            defaultValue={defaultValue}
            readOnly={readOnlyStatus}
          />
        {iconname && <i class={iconname}></i>}
      </div>
    </div>
  )
}
export const UserSettingInput = ({ type, placeholder, state, setState, label, className, iconname, inputcss, inputboxcontainer,defaultValue,readOnlyStatus }) => {
  return (

    <div className={className}>
      {label && <label htmlFor="validationDefault02" className="form-label mb-0 col-6" style={{}}>
        {label}
      </label>}
      <div className={`d-flex align-items-center col-6 ${inputboxcontainer}`}>
        <input type={type}
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={inputcss}
          // id="validationDefault01"
          required 
            defaultValue={defaultValue}
            readOnly={readOnlyStatus}
          />
        {iconname && <i class={iconname}></i>}
      </div>
    </div>
  )
}

