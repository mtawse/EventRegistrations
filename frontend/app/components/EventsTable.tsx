"use client";

import React from "react";
import EventRow from "./EventRow";
import { EventModel } from "../types";

interface EventTableProps {
    events: EventModel[],
    register: (id: number,) => void,
    unregister: (id: number,) => void,
    isRegistering: boolean,
}

export default function EventsTable(props: EventTableProps) {
    return (
        <table className="w-full border-collapse border border-slate-400">
            <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
                Events List
            </caption>

            <thead>
                <tr className="text-center">
                    <th className="border border-slate-300">Name</th>
                    <th className="border border-slate-300">Date</th>
                    <th className="border border-slate-300">Attendees</th>
                    <th className="border border-slate-300" colSpan={2}>Manage Registrations</th>
                </tr>
            </thead>
            <tbody>
                {props.events.map((event: EventModel) =>
                    <EventRow
                        key={event.id}
                        event={event}
                        register={props.register}
                        unregister={props.unregister}
                        isRegistering={props.isRegistering}
                    />
                )}
            </tbody>
        </table>
    )
}