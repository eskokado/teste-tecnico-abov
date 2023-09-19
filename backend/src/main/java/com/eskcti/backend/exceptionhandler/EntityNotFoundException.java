package com.eskcti.backend.exceptionhandler;

public abstract class EntityNotFoundException extends BusinessException {
    private static final long serialVersionUID = 1l;

    public EntityNotFoundException(String message) {
        super(message);
    }
}
