<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class BlogRequest extends FormRequest
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
            'blog_image' => 'required|image|mimes:jpeg,jpg,webp,png,gif|max:2048',
            'blog_title' => 'required|string|max:255',
            'description' => 'required|string',
            'author' => 'required|string|max:255',
            'tags' => 'required|string',
            
        ];
    }
    public function failedValidation(Validator $validator){
        throw new HttpResponseException(
            response()->json([
                'message' => 'invalid field',
                'errors' => $validator->errors()
            ], 422)
        );
    }
}
