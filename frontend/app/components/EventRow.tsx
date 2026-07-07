import React from 'react'
import DateTime from './DateTime'
import { EventModel } from '../types'

interface EventRowProps {
  event: EventModel,
  register: (id: number,) => void,
  unregister: (id: number,) => void,
  isRegistering: boolean,
}

export default function EventRow(props: EventRowProps) {
  return (
    <tr>
      <td className='border border-slate-300 text-left pl-5'>{props.event.name}</td>
      <td className='border border-slate-300 text-center'><DateTime dateTime={props.event.eventDate} /></td>
      <td className='border border-slate-300 text-center'>{props.event.registeredUsers}</td>
      <td className='border border-slate-300 text-center'>
        <span><button
          onClick={() => props.register(props.event.id)}
          disabled={props.isRegistering}
          className='bg-green-500 inline-block text-white text-sm cursor-pointer p-1'>
          Register
        </button></span>
      </td>
      <td className='border border-slate-300 text-center'>
        <span><button
          onClick={() => props.unregister(props.event.id)}
          disabled={props.isRegistering}
          className='bg-red-500 inline-block text-white text-sm cursor-pointer p-1'>
          Cancel Registration
        </button></span>
      </td>
    </tr>
  )
}