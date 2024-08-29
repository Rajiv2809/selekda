<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'name' => 'nullable|string|max:255',
            'username' => 'nullable|string|max:255|unique:users,username',
            'email' => 'nullable|string|email|max:255|unique:users,email',
            'dateOfBirth' => 'nullable|date_format:Y-m-d',
            'phoneNumber' => 'nullable|string|max:15',
            'profilePicture' => 'nullable|image|mimes:jpeg,jpg,webp,png,gif|max:2048',
            
        ];
    }
}
