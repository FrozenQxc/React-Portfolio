import React from 'react'
import { useParams } from 'react-router-dom'

function CarDetail() {
    const { car } = useParams()

    return (
        <div>carDetail {car}</div>
    )
}

export default CarDetail
