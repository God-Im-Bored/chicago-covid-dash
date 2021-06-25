import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

const Counties = ({ data, handleChange }) => {
    
    return (
        <FormControl>
            <NativeSelect defaultValue='' onChange={(e) => {
                handleChange(e.target.value)
            }}>
                <option value=''>Illinois</option>
                {data.map((county, i) => (
                    <option key={i} value={county}>
                        {county}
                    </option>
                ))}

            </NativeSelect>
        </FormControl>
    )
}

export default Counties