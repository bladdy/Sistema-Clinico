using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.Response
{
    public class ApiResponse<T>
    {
        
        public ApiResponse(T data, string message = null, int statusCode = 200)
        {
            Success = true;
            Message = message;
            Data = data;
            StatusCode = statusCode;
        }
        public ApiResponse(int statusCode, string message = null, List<string> errors = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
            Errors = errors ?? new List<string>();
        }
        public List<string> Errors { get; set; }
        public bool Success { get; set; }
        public int StatusCode { get; set; }
        public string Message { get; set; }

        public T Data { get; set; } = default(T);

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                204 => "Deleted resource",
                400 => "A bad request, you have made",
                401 => "Authorized, you are not",
                404 => "Resource found, it was not",
                405 => "Method not allowed",
                409 => "Duplicate record",
                500 => "Errors are the path to the dark side. Errors lead to anger. Anger leads to hate. Hate leads to career change.",
                _ => null
            };
        }
        

        public ApiResponse(List<string> errorMessage, int statusCode = 400)
        {
            Success = false;
            StatusCode = statusCode;
            Errors = errorMessage ?? new List<string>();
        }

        public ApiResponse(bool success, string? message, int statusCode = 200)
        {
            Success = success;
            Message = message;
            StatusCode = statusCode;
        }
    }
}