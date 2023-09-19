package com.eskcti.backend.exceptionhandler;

public class BusinessException extends RuntimeException {
    private static final long serialVersionUID = 1l;

    public BusinessException(String message) {
        super(message);
    }

    public BusinessException(String message, Throwable cause) {
        super(message, cause);
    }
}
