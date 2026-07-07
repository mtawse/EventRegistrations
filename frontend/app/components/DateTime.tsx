import React from 'react'
import { EventModel } from '../types'

interface DateTimeProps {
  dateTime: string,
}

export default function DateTime(props: DateTimeProps) {
    return <>
        {new Date(props.dateTime).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}
    </>
}