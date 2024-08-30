<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'blog_image' => 'nullable|image|mimes:jpeg,jpg,webp,png,gif|max:2048',
            'blog_title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'author' => 'nullable|string|max:255',
            'tags' => 'nullable|string',
            'date' => 'nullable|date',
        ];
    }
}
