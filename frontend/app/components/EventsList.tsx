"use client";

import React, { useEffect, useState } from "react";
import EventsTable from "./EventsTable";
import { EventModel } from "../types";

export default function EventsList() {

  const EVENTS_URL = 'http://localhost:8000/api/events';

  const [events, setEvents] = useState<EventModel[]>([]);
  const [loadingEventsError, setLoadingEventsError] = useState<string | null>(null);
  const [loadingEvents, setLoadingEvents] = useState<boolean>(false);

  const [registeringError, setRegisteringError] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  const fetchEvents = async () => {
    setLoadingEvents(true);
    setLoadingEventsError(null);
    try {
      const res = await fetch(EVENTS_URL);

      if (!res.ok) {
        throw new Error(`Error ${res.status}: Failed to fetch evets`);
      }

      const data = await res.json();
      setEvents(data.data);
    } catch (err: any) {
      setLoadingEventsError(err.message || 'An unexpected error occurred');
    } finally {
      setLoadingEvents(false);
    }
  };

  const register = async (id: Number) => {
    setIsRegistering(true);
    setRegisteringError(null);
    try {
      const res = await fetch(`${EVENTS_URL}/${id}/register`, {
        method: 'POST',
      });
      const data = await res.json();
      updateEvents(data.data);
    } catch (err: any) {
      setRegisteringError(err.message || 'An unexpected error occurred');
    } finally {
      setIsRegistering(false);
    }
  }

  const unregister = async (id: Number) => {
    setIsRegistering(true);
    setRegisteringError(null);
    try {
      const res = await fetch(`${EVENTS_URL}/${id}/unregister`, {
        method: 'POST',
      });
      const data = await res.json();
      updateEvents(data.data);
    } catch (err: any) {
      setRegisteringError(err.message || 'An unexpected error occurred');
    } finally {
      setIsRegistering(false);
    }
  }

  const updateEvents = (event: EventModel) => {
    const updatedEvents = events.map((e: EventModel) => {
      if (e.id === event.id) {
        return { ...event };
      }
      return e;
    });
    setEvents(updatedEvents);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="w-full max-w-7xl m-auto">
      <EventsTable
        events={events}
        register={register}
        unregister={unregister}
        isRegistering={isRegistering}
      />
    </div>
  );
}