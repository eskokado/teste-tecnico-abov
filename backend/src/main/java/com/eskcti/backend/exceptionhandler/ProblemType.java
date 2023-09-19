package com.eskcti.backend.exceptionhandler;

import lombok.Getter;

@Getter
public enum ProblemType {
    DATA_INVALID("/data-invalid", "Data invalid"),
    SYSTEM_ERROR("/system-error", "Sistem error"),
    RESOURCE_NOT_FOUND("/resource-not-found", "Resource not found"),
    PARAMETER_INVALID("/parameter-invalid", "Parameter inválid"),
    UNRECOGNIZED_PROPERTY("/unrecognized-property", "Unrecognized Property"),
    IGNORED_PROPERTY("/ignored-property", "Ignored Property"),
    INCOMPREHENSIBLE_MESSAGE("/incomprehensible-message", "Incomprehensible message"),
    ENTITY_NOT_FOUND("/entity-not-found", "Entity not found"),
    ENTITY_IN_USE("/entity-in-use", "Entity in use"),
    ERROR_BUSINESS("/error_business", "Error business");

    private String title;
    private String uri;

    ProblemType(String path, String title) {
        this.uri = "https://algafood.com.br" + path;
        this.title = title;
    }
}
