<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Scan extends Model
{
    protected $fillable = [
        'statut',
        'certif_id',
    ];

    protected $with = [
        'certif',
    ];

    public function certif(){
        return $this->hasMany(
            Certif::class,
        );
    }
}
