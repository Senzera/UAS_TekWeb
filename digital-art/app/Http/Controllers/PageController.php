<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;

class PageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Items/Index', [
            'items' => Item::latest()->paginate(10),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Items/Create');
    }

    public function store(StoreItemRequest $request): RedirectResponse
    {
        $data = $request->all();

        if ($request->hasFile('image')) {
            $data['image'] = $this->uploadImage($request->file('image'), 'items', 'public');
        }

        Item::create($data);

        return redirect()->route('items.index')->with('success', 'Item berhasil ditambahkan.');
    }

    public function show(Item $item): Response
    {
        return Inertia::render('Items/Show', [
            'item' => $item
        ]);
    }

    public function edit(Item $item): Response
    {
        return Inertia::render('Items/Edit', [
            'item' => $item
        ]);
    }

    public function update(UpdateItemRequest $request, Item $item): RedirectResponse
    {
        $data = $request->all();

        if ($request->hasFile('image')) {
            $this->deleteImageIfExists($item->image);
            $data['image'] = $this->uploadImage($request->file('image'), 'items', 'public');
        }

        $item->update($data);

        return redirect()->route('items.index')->with('success', 'Item berhasil diedit');
    }

    public function destroy(Item $item): RedirectResponse
    {
        $this->deleteImageIfExists($item->image);
        $item->delete();

        return redirect()->route('items.index')->withSuccess('Item berhasil dihapus');
    }

    private function uploadImage($file, $directory, $disk): string
    {
        return $file->store($directory, $disk);
    }

    private function deleteImageIfExists($path): void
    {
        if ($path && Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
    }
}
