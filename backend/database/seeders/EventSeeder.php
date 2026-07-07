<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('events')->insert([
            [
                'name' => 'HDR UK July Event',
                'description' => 'Event description for HDR UK July Event',
                'registered_users' => 15,
                'event_date' => Carbon::parse('2025-07-25 15:00'),
            ],
            [
                'name' => 'HDR UK August Event',
                'description' => 'Event description for HDR UK August Event',
                'registered_users' => 5,
                'event_date' => Carbon::parse('2025-08-15 10:00'),
            ],
            [
                'name' => 'HDR UK September Event',
                'description' => 'Event description for HDR UK September Event',
                'registered_users' => 0,
                'event_date' => Carbon::parse('2025-09-17 13:00'),
            ]
        ]);
    }
}
