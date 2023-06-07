package com.example.RestCrud.resource;

import com.example.RestCrud.persistence.TuTabla;
import com.example.RestCrud.service.TuTablaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TuTablaResource {
    TuTablaService service;

    public TuTablaResource(TuTablaService service) {
        this.service = service;
    }

    @GetMapping(value = "/TuTabla")
    public List<TuTabla> getAll() {
        return this.service.getAll();
    }

    @GetMapping(value = "/TuTabla/{Id}")
    public TuTabla getById(@PathVariable Long Id){
        return this.service.getById(Id);
    }

    @PostMapping(value = "/TuTabla")
    public TuTabla add(TuTabla tuTabla){
        return this.service.add(tuTabla);

    }

    @PutMapping(value = "/TuTabla/{Id}", consumes = "application/json")
    public TuTabla update(@PathVariable Long Id, @RequestBody TuTabla tuTabla){
        return this.service.update(Id, tuTabla);
    }

    @DeleteMapping(value = "/TuTabla/{Id}")
    public void delete(@PathVariable Long Id){
        this.service.delete(Id);
    }

}
