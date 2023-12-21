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


public class FarmerAddCrops {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String cropName;
    private String cropCategory;
    private int cropPricePerKG;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String cropImage;
}
