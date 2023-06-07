package com.example.RestCrud.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TuTablaRepository extends JpaRepository<TuTabla,Long> {
}
