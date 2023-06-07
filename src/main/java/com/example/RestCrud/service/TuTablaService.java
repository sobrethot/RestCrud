package com.example.RestCrud.service;

import com.example.RestCrud.persistence.TuTabla;
import com.example.RestCrud.persistence.TuTablaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TuTablaService {

    TuTablaRepository repository;

    public TuTablaService(TuTablaRepository repository) {
        this.repository = repository;
    }

    public List<TuTabla> getAll(){
        return this.repository.findAll();
    }

    public TuTabla getById(Long Id){
        return this.repository.findById(Id).get();
    }

    public TuTabla add(TuTabla tuTabla){
        return this.repository.save(tuTabla);
    }

    public TuTabla update(Long id, TuTabla tuTabla) {
        Optional<TuTabla> tut = this.repository.findById(id);
        if (tut.isPresent()) {
            TuTabla existingTuTabla = tut.get();

            existingTuTabla.setDescripcion(tuTabla.getDescripcion());


            existingTuTabla.setFechaCreacion(tuTabla.getFechaCreacion());


            existingTuTabla.setVigente(tuTabla.isVigente());


            return this.repository.save(existingTuTabla);
        }

        throw new RuntimeException();
    }

    public void delete(Long Id){
        this.repository.deleteById(Id);
    }

}
