import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

const Counties = ({ data }) => {
    
    return (
        <FormControl>
            <NativeSelect defaultValue=''>
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