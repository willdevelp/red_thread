<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getAuthenticatedUser(Request $request)
    {
        return response()->json([
            'success' => true,
            'user' => $request->user(), // Récupère l'utilisateur connecté
        ]);
    }

    public function updateUser(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $user->name = $request->input('name');
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Informations mises à jour avec succès',
            'user' => $user,
        ]);
    }
}
