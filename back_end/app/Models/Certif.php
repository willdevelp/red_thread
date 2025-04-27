<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Certif extends Model
{
    protected $fillable = [
        'original_name',
        'reference_number',
        'processed_path',
        'public_url',
    ];

    public function scan() {
        return $this->belongsTo(
            Scan::class,
        );
    }
}
