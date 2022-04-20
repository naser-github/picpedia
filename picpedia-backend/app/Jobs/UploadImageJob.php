<?php

namespace App\Jobs;

use App\Models\Photo;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class UploadImageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $img;
    public $userId;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($img, $userId)
    {
        $this->img = $img;
        $this->userId = $userId;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $contents = file_get_contents($this->img);
        $name = substr($this->img, strrpos($this->img, '/') + 1);
        $destinationPath = 'public/image/';
        Storage::put($destinationPath.$name, $contents);

        $photos = new Photo();
        $photos->path = $name;
        $photos->fk_user_id = $this->userId;
        $photos->save();
    }
}
