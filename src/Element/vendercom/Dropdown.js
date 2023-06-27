export const CountryDropdown = ({ label, json, defaultvalue, state, onChange, key }) => {
    console.log("dropdown", json)
    return (
        <>
            <label className="form-label" style={{ textAlign: 'left', width: '100%' }}>{label}</label>
            <select
                value={state}
                onChange={onChange} className="form-select" required>
                <option>{defaultvalue}</option>

                {json?.map((item) => (
                    <option value={item.country_name}>{item?.country_name}</option>
                ))}

            </select>
        </>
    )
}

export const StateDropdown = ({ label, json, defaultvalue, state, onChange, key }) => {
    console.log("dropdown", json)
    return (
        <>
            <label className="form-label" style={{ textAlign: 'left', width: '100%' }}>{label}</label>
            <select
                value={state}
                onChange={onChange} className="form-select" required>
                <option >{defaultvalue}</option>

                {json?.map((item) => (
                    <option value={item.state}>{item?.state}</option>
                ))}
            </select>
        </>
    )
}


export const DistrictDropdown = ({ label, json, defaultvalue, state, onChange, key }) => {
    console.log("distr", json)
    return (
        <>
            <label className="form-label" style={{ textAlign: 'left', width: '100%' }}>{label}</label>
            <select
                value={state}
                onChange={onChange} className="form-select" required>
                <option >{defaultvalue}</option>

                {json?.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </>
    )
}


export const Dropdown = ({ label, json, defaultvalue, state, onChange, key, className, }) => {
    console.log("distr", json)
    return (
        <div className={className}>
            <label className="form-label" style={{ textAlign: 'left', width: '100%' }} >{label}</label>
            <select
                value={state}
                onChange={onChange} className="form-select rounded" required>
                <option className="dropdown">{defaultvalue}</option>

                {json?.map((item) => (
                    <option key={item} className="dropdown">{item}</option>
                ))}
            </select>
        </div>
    )
}

export const DropdownCustom = ({ label, json, defaultvalue, state, onChange, key, className, }) => {
    console.log("distr", json)
    return (
        <div className={className}>
            {label && <label className="form-label" style={{ textAlign: 'left', width: '100%' }} >
                {label}
            </label>}
            <select
                value={state}
                onChange={onChange} className="form-select rounded" required>
                <option className="dropdown border-0">{defaultvalue}</option>

                {json?.map((item) => (
                    <option key={item} className="dropdown">{item}</option>
                ))}
            </select>
        </div>
    )
}
export const UserSettingDropdownCustom = ({ label, json, defaultvalue, state, onChange, key, className, inputcss }) => {
    console.log("distr", json)
    return (
        <div className={className}>
            {label && <label className="form-label mb-0 col-6" style={{}} >
                {label}
            </label>}
            <select
                value={state}
                onChange={onChange} className={inputcss} required>
                <option className="dropdown border-0">{defaultvalue}</option>

                {json?.map((item) => (
                    <option key={item} className="dropdown">{item}</option>
                ))}
            </select>
        </div>
    )
}