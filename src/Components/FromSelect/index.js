import { FormControl, MenuItem, Select } from '@material-ui/core'
import React from 'react'

export default function FromSelect({  selectValue, onChange, maniValue, options }) {
    return (
        <FormControl>
            <Select variant='outlined' value={selectValue} onChange={onChange}>
                <MenuItem value={maniValue}> {maniValue} </MenuItem>
                {[options]?.map(option => (
                    <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}