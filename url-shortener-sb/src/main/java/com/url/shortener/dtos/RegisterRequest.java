 package com.url.shortener.dtos;

import java.util.Set;

import lombok.Data;

@Data
public class RegisterRequest {

    private String username;
    private String email;
    private Set<String> role;
    private String password;
    

}
