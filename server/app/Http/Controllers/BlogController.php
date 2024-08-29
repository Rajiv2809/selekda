<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use App\Http\Requests\BlogRequest;
use App\Http\Requests\UpdateBlogRequest;

class BlogController extends Controller
{
    public function create(BlogRequest $request){
        $path = $request->file('blog_image')->store('images', 'public');
        $blog = Blog::create([
            'blog_image' => $path ,
            'blog_title' => $request->blog_title,
            'description' => $request->description,
            'author' => $request->author,
            'tags' =>$request->tags,
            'date' =>now(),
        ]);
        return response()->json([
            'message' => 'Blog created successfully!',
            'data' => $blog
        ], 201);
    }
    public function update(UpdateBlogRequest $request, $blogID){
        $blog = Blog::findOrFail($blogID);
        $blog->update($request->all());
        return response()->json([
            'message' => 'Blog updated successfully!',
            'data' => $blog
        ], 200);
    }
    public function get()
    {
        $blogs = Blog::all();

        return response()->json([
            'blogs' => $blogs
        ],200);
    }

    public function delete($blogID)
    {
        $blog = Blog::findOrFail($blogID);
        $blog->delete();

        return response()->json([
            'message' => 'Blog deleted successfully!'
        ], 200);
    }
}
