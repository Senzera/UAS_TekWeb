<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function index()
    {
        return Collection::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required'
        ]);

        $collection = Collection::create($request->all());
        return response()->json($collection, 201);
    }

    public function show($id)
    {
        return Collection::find($id);
    }

    public function update(Request $request, $id)
    {
        $collection = Collection::findOrFail($id);
        $collection->update($request->all());
        return response()->json($collection, 200);
    }

    public function destroy($id)
    {
        Collection::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
