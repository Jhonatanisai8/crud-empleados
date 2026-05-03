package com.isai.backend_app.service.impl;

import com.isai.backend_app.dto.EmployeeRequestDTO;
import com.isai.backend_app.dto.EmployeeResponseDTO;
import com.isai.backend_app.model.Employee;
import com.isai.backend_app.repository.EmployeeRepository;
import com.isai.backend_app.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

  private final EmployeeRepository employeeRepository;

  @Override
  public List<EmployeeResponseDTO> findAll() {
    return employeeRepository.findAll().stream()
        .map(this::mapToResponseDTO)
        .collect(Collectors.toList());
  }

  @Override
  public Optional<EmployeeResponseDTO> findById(Long id) {
    return employeeRepository.findById(id)
        .map(this::mapToResponseDTO);
  }

  @Override
  public EmployeeResponseDTO save(EmployeeRequestDTO employeeRequestDTO) {
    Employee employee = mapToEntity(employeeRequestDTO);
    Employee savedEmployee = employeeRepository.save(employee);
    return mapToResponseDTO(savedEmployee);
  }

  @Override
  public EmployeeResponseDTO update(Long id, EmployeeRequestDTO employeeRequestDTO) {
    return employeeRepository.findById(id)
        .map(existingEmployee -> {
          existingEmployee.setNombre(employeeRequestDTO.getNombre());
          existingEmployee.setApellido(employeeRequestDTO.getApellido());
          existingEmployee.setCorreo(employeeRequestDTO.getCorreo());
          existingEmployee.setDireccion(employeeRequestDTO.getDireccion());
          existingEmployee.setTelefono(employeeRequestDTO.getTelefono());
          Employee updatedEmployee = employeeRepository.save(existingEmployee);
          return mapToResponseDTO(updatedEmployee);
        }).orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
  }

  @Override
  public EmployeeResponseDTO partialUpdate(Long id, EmployeeRequestDTO employeeRequestDTO) {
    return employeeRepository.findById(id)
        .map(existingEmployee -> {
          if (employeeRequestDTO.getNombre() != null)
            existingEmployee.setNombre(employeeRequestDTO.getNombre());
          if (employeeRequestDTO.getApellido() != null)
            existingEmployee.setApellido(employeeRequestDTO.getApellido());
          if (employeeRequestDTO.getCorreo() != null)
            existingEmployee.setCorreo(employeeRequestDTO.getCorreo());
          if (employeeRequestDTO.getDireccion() != null)
            existingEmployee.setDireccion(employeeRequestDTO.getDireccion());
          if (employeeRequestDTO.getTelefono() != null)
            existingEmployee.setTelefono(employeeRequestDTO.getTelefono());
          Employee updatedEmployee = employeeRepository.save(existingEmployee);
          return mapToResponseDTO(updatedEmployee);
        }).orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
  }

  @Override
  public void deleteById(Long id) {
    employeeRepository.deleteById(id);
  }

  private EmployeeResponseDTO mapToResponseDTO(Employee employee) {
    return EmployeeResponseDTO.builder()
        .id(employee.getId())
        .nombre(employee.getNombre())
        .apellido(employee.getApellido())
        .correo(employee.getCorreo())
        .direccion(employee.getDireccion())
        .telefono(employee.getTelefono())
        .build();
  }

  private Employee mapToEntity(EmployeeRequestDTO dto) {
    return Employee.builder()
        .nombre(dto.getNombre())
        .apellido(dto.getApellido())
        .correo(dto.getCorreo())
        .direccion(dto.getDireccion())
        .telefono(dto.getTelefono())
        .build();
  }
}
