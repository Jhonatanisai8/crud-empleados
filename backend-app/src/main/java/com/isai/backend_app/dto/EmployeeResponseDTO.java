package com.isai.backend_app.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeResponseDTO {
  private Long id;
  private String nombre;
  private String apellido;
  private String correo;
  private String direccion;
  private String telefono;
}
