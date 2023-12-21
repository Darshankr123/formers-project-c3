package com.formersMarket.formersMarket.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CustomerFeedBack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fid;
    private String email;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String feedback;
}
