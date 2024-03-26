package com.grandmaster.grandmaster.service;

import com.grandmaster.grandmaster.model.Institute;

import java.util.List;

public interface InstituteService {

    List<Institute> getAllInstitutes();

    Institute getInstituteById(Long id);

    Institute createInstitute(Institute institute);

    Institute updateInstitute(Long id, Institute institute);

    boolean deleteInstitute(Long id);
}
