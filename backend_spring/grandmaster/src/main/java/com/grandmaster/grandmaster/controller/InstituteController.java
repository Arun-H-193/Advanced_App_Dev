package com.grandmaster.grandmaster.controller;

import com.grandmaster.grandmaster.model.Institute;
import com.grandmaster.grandmaster.service.InstituteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/institutes")
public class InstituteController {

    @Autowired
    private InstituteService instituteService;

    @GetMapping
    public ResponseEntity<List<Institute>> getAllInstitutes() {
        List<Institute> institutes = instituteService.getAllInstitutes();
        return new ResponseEntity<>(institutes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Institute> getInstituteById(@PathVariable Long id) {
        Institute institute = instituteService.getInstituteById(id);
        if (institute != null) {
            return new ResponseEntity<>(institute, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/post")
    public ResponseEntity<Institute> createInstitute(@RequestBody Institute institute) {
        Institute createdInstitute = instituteService.createInstitute(institute);
        return new ResponseEntity<>(createdInstitute, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Institute> updateInstitute(@PathVariable Long id, @RequestBody Institute institute) {
        Institute updatedInstitute = instituteService.updateInstitute(id, institute);
        if (updatedInstitute != null) {
            return new ResponseEntity<>(updatedInstitute, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInstitute(@PathVariable Long id) {
        if (instituteService.deleteInstitute(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
