<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\Models\Event;
use App\Http\Resources\EventResource;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $events = Event::orderBy('event_date', 'desc')->get();
        $events = Event::all();
        return EventResource::collection($events);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new EventResource(Event::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function register(string $id)
    {
        $event = Event::findOrFail($id);
        $event->increment('registered_users');
        return new EventResource($event);
    }

    public function unregister(string $id)
    {
        $dbFunction = DB::connection()->getDriverName() === 'sqlite' ? 'MAX' : 'GREATEST';  
        $event = DB::transaction(function () use ($id, $dbFunction) {
        DB::table('events')
            ->where('id', $id)
            ->update(['registered_users' => DB::raw($dbFunction . '(registered_users - 1, 0)')]);

            return DB::table('events')->find($id);
        });
        return new EventResource($event);
    }
}
