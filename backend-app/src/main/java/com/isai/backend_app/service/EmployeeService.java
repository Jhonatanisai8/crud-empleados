package com.isai.backend_app.service;

import com.isai.backend_app.dto.EmployeeRequestDTO;
import com.isai.backend_app.dto.EmployeeResponseDTO;
import java.util.List;
import java.util.Optional;

public interface EmployeeService {
  List<EmployeeResponseDTO> findAll();

  Optional<EmployeeResponseDTO> findById(Long id);

  EmployeeResponseDTO save(EmployeeRequestDTO employeeRequestDTO);

  EmployeeResponseDTO update(Long id, EmployeeRequestDTO employeeRequestDTO);

  EmployeeResponseDTO partialUpdate(Long id, EmployeeRequestDTO employeeRequestDTO);

  void deleteById(Long id);
}
