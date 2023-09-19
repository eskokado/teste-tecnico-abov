package com.eskcti.backend.exceptionhandler;

public class EntityInUseException extends BusinessException {
    private static final long serialVersionUID = 1l;

    public EntityInUseException(String message) {
        super(message);
    }
}
