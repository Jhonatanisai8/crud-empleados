package com.isai.backend_app;

import com.isai.backend_app.model.Employee;
import com.isai.backend_app.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class BackendAppApplication {

  public static void main(String[] args) {
    SpringApplication.run(BackendAppApplication.class, args);
  }

  @Bean
  CommandLineRunner commandLineRunner(EmployeeRepository repository) {
    return args -> {
      if (repository.count() == 0) {
        List<Employee> employees = List.of(
            Employee.builder().nombre("Juan").apellido("Perez").correo("juan.perez@gmail.com").direccion("Calle 123")
                .telefono("123456789").build(),
            Employee.builder().nombre("Maria").apellido("Garcia").correo("maria.garcia@gmail.com")
                .direccion("Av. Siempre Viva").telefono("987654321").build(),
            Employee.builder().nombre("Carlos").apellido("Lopez").correo("carlos.lopez@gmail.com")
                .direccion("Jr. Union 456").telefono("456123789").build(),
            Employee.builder().nombre("Ana").apellido("Martinez").correo("ana.martinez@gmail.com")
                .direccion("Calle Real 789").telefono("789456123").build(),
            Employee.builder().nombre("Luis").apellido("Rodriguez").correo("luis.rod@gmail.com")
                .direccion("Av. Brasil 101").telefono("159263487").build(),
            Employee.builder().nombre("Elena").apellido("Sanchez").correo("elena.s@gmail.com")
                .direccion("Calle Lima 202").telefono("753951462").build(),
            Employee.builder().nombre("Pedro").apellido("Gomez").correo("pedro.g@gmail.com")
                .direccion("Av. Arequipa 303").telefono("852963741").build(),
            Employee.builder().nombre("Lucia").apellido("Diaz").correo("lucia.d@gmail.com").direccion("Calle Tacna 404")
                .telefono("951753852").build(),
            Employee.builder().nombre("Jorge").apellido("Torres").correo("jorge.t@gmail.com").direccion("Jr. Cusco 505")
                .telefono("357159248").build(),
            Employee.builder().nombre("Rosa").apellido("Ruiz").correo("rosa.r@gmail.com").direccion("Av. Larco 606")
                .telefono("654789123").build());
        repository.saveAll(employees);
        System.out.println("10 sample employees created");
      }
    };
  }

}
