<?php

namespace App\Http\Controllers;

use App\Http\Requests\PortofolioRequest;
use App\Http\Requests\UpdatePortofolioRequest;
use App\Models\Portfolio;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function create(PortofolioRequest $request){
        $path = $request->file('portofolio_image')->store('images', 'public');
        $portofolio = Portfolio::create([
            'portofolio_image' => $path ,
            'portofolio_title' => $request->portofolio_title,
            'description' => $request->description,
            'author' => $request->author,
        ]);
        return response()->json([
            'message' => 'Portofolio created successfully!',
            'data' => $portofolio
        ], 201);
    }
    public function get(){
        $portofolios = Portfolio::all();

        return response()->json([
            'portofolios' => $portofolios
        ],200);
    }
    public function update(UpdatePortofolioRequest $request, $portfolioID){
        $portofolio = Portfolio::findOrFail($portfolioID);
        $portofolio->update($request->all());
        return response()->json([
            'message' => 'Portofolio updated successfully!',
            'data' => $portofolio
        ], 200);
    }
    public function delete($portofolioID){
        $portofolio = Portfolio::findOrFail($portofolioID);
        $portofolio->delete();

        return response()->json([
            'message' => 'Portofolio deleted successfully!'
        ], 200);
    }
}
