import java.util.Random;
import java.util.Scanner;

//public class Ejercicios {
//    public static void main(String[] args) {
//        double temperaturaEnCelsius = 30.4;
//        double temperaturaEnFahrenheit = (temperaturaEnCelsius * 1.8) + 32;
//
//        String mensaje = String.format("La temperatura de %f Celsius es equivalente a %f Fahrenheit", temperaturaEnCelsius, temperaturaEnFahrenheit);
//
//        System.out.println(mensaje);
//
//        int temperaturaEnFahrenheitEntero = (int) temperaturaEnFahrenheit;
//        System.out.println("La temperatura en Fahrenheit entera es: " + temperaturaEnFahrenheitEntero);
//        }
//    }
//                Scanner scanner = new Scanner(System.in);
//
//                System.out.print("Digite su nombre: ");
//                String nombre = scanner.nextLine();
//                System.out.print("Digite su edad: ");
//                int edad = scanner.nextInt();
//                System.out.print("Digite el monto que deseas invertir este mes: ");
//                double valor = scanner.nextDouble();
//
//                System.out.println(nombre + " que tiene " + edad + " años, irá invertir $ " + valor + " este mes.");
//
//                scanner.close();
//            }
//        }
//        switch (expresion) {
//            case valor1:
//                // código a ejecutar si la expresión es igual a valor1
//                break;
//            case valor2:
//                // código a ejecutar si la expresión es igual a valor2
//                break;
//            // otros casos posibles...
//            default:
//                // código a ejecutar si ninguno de los casos anteriores se cumple
//        }
//    }
//}
//        int dia = 3;
//        switch (dia) {
//            case 1:
//                System.out.println("El día 1 es lunes");
//                break;
//            case 2:
//                System.out.println("El día 2 es martes");
//                break;
//            case 3:
//                System.out.println("El día 3 es miércoles");
//                break;
//            // otros casos posibles...
//            default:
//                System.out.println("Día no válido");
//        }
//    }
//}
//public class Ejercicios {
//
//    public static void main(String[] args) {
//        int contador = 1;
//
//        while(contador <= 10) {
//            System.out.println(contador);
//            contador++;
//        }
//    }
//}
//public class Ejercicios {
//
//    public static void main(String[] args) {
//
//        int contador = 1;
//
//        while(contador <= 10) {
//            System.out.println(contador);
//            contador++;
//        }
//    }
//}
//public class Ejercicios {
//    public static void main(String[] args) {
//        for(int contador = 1; contador <= 10; contador++) {
//            System.out.println(contador);
//        }
//    }
//}
//public class Ejercicios {
//    public static void main(String[] args) {
//        Scanner lector = new Scanner(System.in);
//        int numeroGenerado = new Random().nextInt(100);
//        int intentos = 0;
//
//        while (intentos < 5){
//            System.out.println("Digite un número entre el 0 y el 100: ");
//            int numeroDeUsuario = lector.nextInt();
//            intentos++;
//
//            if (numeroDeUsuario == numeroGenerado) {
//                System.out.println("Felicidades, adivinaste el número en " + intentos + " intentos!");
//                break; // interrumpe el loop while
//            } else if (numeroDeUsuario < numeroGenerado) {
//                System.out.println("El número que escribiste es menor al número generado.");
//            } else {
//                System.out.println("El número que escribiste es mayor al número generado.");
//            }
//        }
//        if (intentos == 5) {
//            System.out.println("Lo siento, no conseguiste adivinar el número en 5 intentos. El número era " + numeroGenerado);
//        }
//    }
//}

public class Ejercicios {
    public static void main(String[] args) {
        Scanner aplicacionBancaria = new Scanner(System.in);
        double saldoActualizado = 1_300.00; // Saldo inicial
        int opcionesUsuario = 0;
        int regresarMenu = 9; // Opción para salir

        do {
            // Mostrar menú de opciones
            System.out.println("Escriba el número de la opción deseada");
            System.out.println("1. Consulta de saldo");
            System.out.println("2. Retirar");
            System.out.println("3. Depositar");
            System.out.println("9. Salir");

            // Leer la opción seleccionada por el usuario
            opcionesUsuario = aplicacionBancaria.nextInt();

            switch (opcionesUsuario) {
                case 1:
                    // Consulta de saldo
                    System.out.println("El saldo actualizado es: " + saldoActualizado);
                    break;
                case 2:
                    // Retiro
                    System.out.print("Ingrese el monto a retirar: ");
                    double montoRetiro = aplicacionBancaria.nextDouble();
                    if (montoRetiro <= saldoActualizado) {
                        saldoActualizado -= montoRetiro;
                        System.out.println("Has retirado: " + montoRetiro);
                        System.out.println("Saldo actualizado: " + saldoActualizado);
                    } else {
                        System.out.println("Saldo insuficiente.");
                    }
                    break;
                case 3:
                    // Depósito
                    System.out.print("Ingrese el monto a depositar: ");
                    double montoDeposito = aplicacionBancaria.nextDouble();
                    saldoActualizado += montoDeposito;
                    System.out.println("Has depositado: " + montoDeposito);
                    System.out.println("Saldo actualizado: " + saldoActualizado);
                    break;
                case 9:
                    // Salir
                    System.out.println("Saliendo del sistema...");
                    break;
                default:
                    // Opción inválida
                    System.out.println("Opción no válida, por favor intente de nuevo.");
            }
        } while (opcionesUsuario != regresarMenu); // Repite hasta que se seleccione la opción 9 (Salir)

        aplicacionBancaria.close();
    }
}
