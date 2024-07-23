<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class CollectionController extends Controller
{
    public function index()
    {
        $collections = Collection::all();
        return Inertia::render('Collections/Index', [
            'collections' => $collections
        ]);
    }

    public function create()
    {
        return Inertia::render('Collections/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'deskripsi' => 'required|string',
            'uploader' => 'required|string|max:255',
        ]);
    
        $data = $request->only(['judul', 'deskripsi', 'uploader']);
        
        if ($request->hasFile('gambar')) {
            $file = $request->file('gambar');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('images'), $filename);
            $data['gambar'] = '/images/' . $filename;
        }
    
        Collection::create($data);
    
        return redirect()->route('collections.index')->with('success', 'Collection created successfully.');
    }
    

    


    public function show(Collection $collection)
    {
        return Inertia::render('Collections/Show', [
            'collection' => $collection
        ]);
    }

    public function edit(Collection $collection)
    {
        return Inertia::render('Collections/Edit', [
            'collection' => $collection
        ]);
    }

    public function update(Request $request, Collection $collection)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'deskripsi' => 'required|string',
            'uploader' => 'required|string|max:255',
        ]);

        if ($request->hasFile('gambar')) {
            // Hapus gambar lama
            if ($collection->gambar_path) {
                Storage::disk('public')->delete($collection->gambar_path);
            }

            // Upload gambar baru
            $path = $request->file('gambar')->store('collections', 'public');
            $request->merge(['gambar_path' => $path]);
        }

        $collection->update($request->except('gambar'));

        return redirect()->route('collections.index')->with('success', 'Collection updated successfully.');
    }

    public function destroy(Collection $collection)
    {
        if ($collection->gambar_path) {
            Storage::disk('public')->delete($collection->gambar_path);
        }

        $collection->delete();

        return redirect()->route('collections.index')->with('success', 'Collection deleted successfully.');
    }
}
