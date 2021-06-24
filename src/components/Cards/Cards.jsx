import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'


const Cards = ( {data: { cases, county, deaths, tested } } ) => {
    console.log(cases, county, deaths, tested)
    return (
        <h2>Cards</h2>
    )
}

export default Cards