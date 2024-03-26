package com.grandmaster.grandmaster.service.impl;

import com.grandmaster.grandmaster.model.Institute;
import com.grandmaster.grandmaster.repository.InstituteRepo;
import com.grandmaster.grandmaster.service.InstituteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstituteServiceImpl implements InstituteService {

    @Autowired
    private InstituteRepo instituteRepository;

    @Override
    public List<Institute> getAllInstitutes() {
        return instituteRepository.findAll();
    }

    @Override
    public Institute getInstituteById(Long id) {
        Optional<Institute> optionalInstitute = instituteRepository.findById(id);
        return optionalInstitute.orElse(null);
    }

    @Override
    public Institute createInstitute(Institute institute) {
        return instituteRepository.save(institute);
    }

    @Override
    public Institute updateInstitute(Long id, Institute institute) {
        if (instituteRepository.existsById(id)) {
            institute.setId(id);
            return instituteRepository.save(institute);
        }
        return null;
    }

    @Override
    public boolean deleteInstitute(Long id) {
        if (instituteRepository.existsById(id)) {
            instituteRepository.deleteById(id);
            return true;
        }
        return false;
    }
}