/**
 * <h2>clase Empleado, se utiliza para crear y leer empleados de una BD </h2>
 *
 * Puedes encontrar más información sobre JSDoc en <a href="https://jsdoc.app/">la documentación oficial</a>
 * @see <a href="https://github.com/jsdoc/jsdoc">Repo JSDoc</a>
 * @version 2-2024
 * @author -
 * @since 12-11-2023
 */
class Empleado {
    /**
     * Constructor con tres parámetros
     * Crea objetos empleado con nombre, apellido y salario
     * @param {string} nombre Nombre del empleado
     * @param {string} apellido Apellido del empleado
     * @param {number} salario Salario del empleado
     */
    constructor(nombre, apellido, salario) {
        /**
         * Atributo nombre del empleado
         */
        this.nombre = nombre;
        /**
         * Atributo apellido del empleado
         */
        this.apellido = apellido;
        /**
         * Atributo salario del empleado
         */
        this.salario = salario;
    }

    // Métodos públicos

    /**
     * Sube el salario al empleado
     * @see Empleado
     * @param subida Valor de la subida del salario
     */
    subidaSalario(subida) {
        salario = salario + subida;
    }

    /**
     * Comprueba que el nombre no esté vacío
     * @return <ul>
     *                   <li>false: el nombre es una cadena vacía</li>
     *                   <li>true: el nombre <b>No</b> es una cadena vacía</li>
     *              </ul>
     */
    comprobar() {
        return !(nombre === "");
    }
}
