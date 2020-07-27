<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Books;
use App\Department;
use App\Logs;
use App\Publication;
use App\Students;

class LibraryController extends Controller
{
    // ----------------Department------------------------------------------
    public function getAllDepartments()
    {
        $departments = Department::orderBy('created_at','desc')->get();
        return response()->json($departments);
    }

    public function storeDepartment(Request $request)
    {
        $department = Department::create([
            'departmentName' => $request->input('departmentName'),
            'departmentStatus' => 0,
        ]);
        return response()->json($department);
    }

    public function deleteDepartment($id)
    {
        $department = Department::find($id)->delete();
        return response()->json($department);
    }

    // ----------------Books---------------------------------------------
    public function getAllBooks()
    {
        $books = Books::all();
        return response()->json($books);
    }

    public function getOneBook($id)
    {
        $book = Books::find($id);
        return response()->json($book);
    }

    public function storeBook(Request $request)
    {
        $book = Books::create([
            'bookIsbn' => $request->input('bookIsbn'),
            'bookName' => $request->input('bookName'),
            'bookDetails' => $request->input('bookDetails'),
            'bookQuantity' => $request->input('bookQuantity'),
            'bookPublication' => $request->input('bookPublication'),
            'bookPrice' => $request->input('bookPrice'),
            'bookStatus' => 0,
        ]);
        return response()->json($book);
    }

    public function updateBook(Request $request,$id)
    {
        $book = Books::find($id)->update([
            'bookIsbn' => $request->input('bookIsbn'),
            'bookName' => $request->input('bookName'),
            'bookDetails' => $request->input('bookDetails'),
            'bookQuantity' => $request->input('bookQuantity'),
            'bookPublication' => $request->input('bookPublication'),
            'bookPrice' => $request->input('bookPrice'),
            'bookStatus' => 0,
        ]);
        return response()->json($book);
    }

    public function deleteBook($id)
    {
        $book = Books::find($id)->delete();
        return response()->json($book);
    }
}
