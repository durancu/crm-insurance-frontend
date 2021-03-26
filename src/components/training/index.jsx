import React from "react";

//COMPONENT
import { Row, Col, Accordion, Card, Image } from "react-bootstrap";

const Training = () => {
  return (
    <>
      <Row className="mt-3 mb-3">
        <Col sm="12">
          <h3>Training</h3>
          <p>
            Esta es la página de entrenamiento. Aqui iremos agregando contenidos
            para ayudarte a comprender el uso y funcionamiento de este sistema.{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm="2">&nbsp;</Col>
        <Col sm="8" lg="8">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h4>Login</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row>
                    <Col>
                      <p>
                        Para entrar al sistema, debe usarse el usuario de correo
                        de la compañía. Por ejemplo para{" "}
                        <b>ebarzaga@vl17insagency.com</b>, el usuario será{" "}
                        <b>ebarzaga</b>.{" "}
                        <p>
                          El password será proporcionado a cada empleado de
                          manera individual.
                        </p>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "left" }}>
                      <Image
                        src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/login.png"
                        thumbnail
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <h4>Home Page</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Row>
                    <Col>
                      <p>
                        En la página de inicio aparecen dos secciones de
                        estadísticas:
                        <ul>
                          <li>
                            Company Overview proporciona gráficas (diferentes
                            según el tipo de empleado o rol de usuario), con
                            información actualizada en tiempo real sobre el
                            comportamiento de las ventas en ambas oficinas. De
                            esta manera, todos los empleados pueden darle
                            seguimiento tanto al rendimiento de la empresa como
                            de los otros vendedores.
                          </li>
                          <li>
                            En la barra lateral derecha, el empleado tendrá la
                            oportunidad de darle seguimiento a su rendimiento
                            personal en lo que va de mes (los meses se calculan
                            empezando los días 21, y terminando el 20 del
                            siguiente). El empleado podrá consultar cuánto ha
                            vendido durante el mes, así como el bono y salario
                            acumulados de acuerdo a las metricas de rendimiento
                            aplicadas por el empleador.
                          </li>
                        </ul>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "left" }}>
                      <Image
                        src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/home.png"
                        thumbnail
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <h4>Gestión de ventas</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Row>
                    <Col>
                      <p>
                        Esta es probablemente la página más importante del
                        sistema. Desde aquí el empleado podrá crear y
                        administrar sus ventas.
                      </p>
                      <p>
                        Justo debajo del título de la página, puede encontrarse
                        el selector de fechas. Desde allí, el empleado podrá
                        filtrar las ventas para un período especifico de tiempo,
                        que bien puede ser de los predeterminados en esa lista,
                        como un período de tiempo cualquiera solo seleccionando
                        las fechas de inicio y fin.
                      </p>
                      <p>
                        Las columnas de la tabla indican los campos asociados a
                        cada compra, según el orden en que aparecen a continuación:
                        <ul>
                          <li><b>Date:</b> Fecha en que se realizó la venta.</li>
                          <li><b>Customer:</b> Cliente o compañía al que se le realizó la venta.</li>
                          <li><b>Liability Insurer:</b>Compañía de aseguranza que vendió el Liability.</li>
                          <li><b>Charge:</b> Cargo asociado a Liability.</li>
                          <li><b>Cargo Insurer:</b>Compañía de aseguranza que vendió el Cargo Damage.</li>
                          <li><b>Charge:</b> Cargo asociado a Cargo Damage.</li>
                          <li><b>Damage Insurer:</b>Compañía de aseguranza que vendió el Physical Damage.</li>
                          <li><b>Charge:</b> Cargo asociado a Physical Damage.</li>
                          <li><b>WCGLUMB Insurer:</b>Compañía de aseguranza que vendió el WC/GL/UMB.</li>
                          <li><b>Charge:</b> Cargo asociado a WC/GL/UMB.</li>
                          <li><b>Premium:</b> Valor autocalculado (no editable) que representa la suma de los cargos de los cuatro tipos de aseguranza.</li>
                          <li><b>Fees:</b> Monto cobrado por concepto de fees asociados a la venta.</li>
                          <li><b>Permits:</b> Monto cobrado por concepto de permisos asociados a la venta.</li>
                          <li><b>Tips:</b> Monto recibido por el vendedor en concepto de propina.</li>
                          <li><b>Down Payment:</b> Monto cobrado al comprador por concepto de down payment.</li>
                          <li><b>Paid:</b> Valor pagado por el comprador (siempre menor o igual al valor del Down Payment).</li>
                          <li><b>(Icono de cesto):</b> Permite eliminar una venta <span style={{fontWeight:"bold", color:"red"}}>Tenga precaución al eliminar una venta. Este proceso es irreversible.</span></li>
                        </ul>
                      </p>
                      <p>Al final de la tabla, podrá consultar los acumulados de datos para cada columna, así como el total de ventas asociado al período seleccionado.</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "left" }}>
                      <Image
                        src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/sales-management.png"
                        thumbnail
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <h4>Crear Venta</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Row>
                    <Col>
                      <p>
                        Para crear una venta, debe dar clic en el botón "Add New Sale", que aparece en la esquina superar de la tabla.
                        Al hacerlo, se abrirá la siguiente ventana, donde deberá introducir todos los datos asociados a esa venta.
                      </p>
                      <p>
                        Los campos deberán ser llenados según las siguientes indicaciones:
                        <ul>
                          <li><b>Date:</b> Fecha en que se realizó la venta. Le fecha actual aparecerá como valor predeterminado</li>
                          <li><b>Customer:</b> Seleccione un cliente de la lista, o agregue uno nuevo dando clic en el botón azul [+] que aparece a la derecha del campo.</li>
                          <li><b>Liability Insurer:</b> Seleccione la compañía de aseguranza que vendió el Liability (si aplica).</li>
                          <li><b>Charge:</b> Ingrese el monto asociado a Liability (Este campo estará oculto hasta tanto no se seleccione una aseguranza en el campo anterior.)</li>
                          <li><b>Cargo Insurer:</b> Seleccione la compañía de aseguranza que vendió el Cargo Damage (si aplica).</li>
                          <li><b>Charge:</b> Ingrese el monto asociado a Cargo Damage (Este campo estará oculto hasta tanto no se seleccione una aseguranza en el campo anterior.)</li>
                          <li><b>Damage Insurer:</b> Seleccione la compañía de aseguranza que vendió el Physical Damage (si aplica).</li>
                          <li><b>Charge:</b> Ingrese el monto asociado a Physical Damage (Este campo estará oculto hasta tanto no se seleccione una aseguranza en el campo anterior.)</li>
                          <li><b>WCGLUMB Insurer:</b> Seleccione la compañía de aseguranza que vendió el WC/GL/UMB Damage (si aplica).</li>
                          <li><b>Charge:</b> Ingrese el monto asociado a WC/GL/UMB (Este campo estará oculto hasta tanto no se seleccione una aseguranza en el campo anterior.)</li>
                          <li><b>Premium:</b> Valor autocalculado (no editable) que representa la suma de los cargos de los cuatro tipos de aseguranza.</li>
                          <li><b>Fees:</b> Ingrese el monto cobrado por concepto de fees asociados a la venta.</li>
                          <li><b>Permits:</b> Ingrese el monto cobrado por concepto de permisos asociados a la venta.</li>
                          <li><b>Tips:</b> Ingrese el monto recibido por el vendedor en concepto de propina.</li>
                          <li><b>Down Payment:</b> Ingrese el monto cobrado al comprador por concepto de down payment.</li>
                          <li><b>Paid:</b> Ingrese el monto pagado por el comprador (siempre menor o igual al valor del Down Payment).</li>
                        </ul>
                      </p>
                      <p>
                      A continuación, de clic en el botón "Save", si desea guardar la venta y salir, o "Save and New" para guardar la venta, y continuar creando una nueva.
                      </p>
                      <p>
                        Si desea salir sin almacenar la venta, de clic en el boton "Cancelar".
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "left" }}>
                      <Image
                        src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/create-sale.png"
                        thumbnail
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <h4>Gestión de Clientes</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <Row>
                    <Col>
                      <p>
                        La pagina de Clientes <b>(Customer Management)</b> gestiona la informacion de todos los clientes así como su actualización.
                      </p>
                      <p>Cuenta con el boton <b>Add New Customer</b> de color azul situado en la zona derecha superior de la tabla,
                       el cual permite la insercción de nuevos clientes al sistema.</p>
                      <p>
                        Las columnas de la tabla indican los campos asociados a
                        cada cliente, según el orden en que aparecen a continuación:
                        <ul>
                          <li><b>Contact Person:</b> Nombre del contacto del Cliente</li>
                          <li><b>Company:</b> Nombre de la compañia del Cliente</li>
                          <li><b>DOT:</b> (**********VALOR DEL DTO PREGUNTAR).</li>
                          <li><b>Email:</b> Email del contacto del Cliente</li>
                          <li><b>Phone:</b> Telefono del contacto del Cliente.</li>
                          <li><b>Fax:</b> Fax del contacto del Cliente</li>
                          <li><b>Address:</b> Direccion del Cliente.</li>
                          <li><b>City:</b> Ciudad a la que pertenece el Cliente.</li>
                          <li><b>State:</b> Estado al que pertenece el Cliente.).</li>
                          <li><b>Zip:</b> Codigo Postal  de la ciudad que pertenece el Cliente..</li>
                        </ul>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "left" }}>
                      <Image
                        /* src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/create-sale.png" */
                         src="/images/clientes.jpg" 
                        thumbnail
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <h4>Crear Clientes</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <Row>
                    <Col>
                      <p>
                        Para agregar un cliente, debe dar clic en el botón "Add New Customer", que aparece en la esquina superar de la tabla.
                        Al hacerlo, se abrirá la siguiente ventana, donde deberá introducir todos los datos asociados a ese cliente.
                      </p>
                      <p>
                        Los campos deberán ser llenados según las siguientes indicaciones:
                        <ul>
                          <li><b>Name:</b> Nombre del contacto del cliente .</li>
                          <li><b>Email:</b> Email del contacto cliente.</li>
                          <li><b>Company:</b> Compañia del cliente.</li>
                          <li><b>DOT:</b>(*****PREGUNTAR LA DESCRIPCION).</li>
                          <li><b>Phone:</b>Telefono del contacto del cliente.</li>
                          <li><b>FAX:</b>Fax del contacto del cliente.</li>
                          <li><b>Address:</b> Direccion del Cliente.</li>
                          <li><b>City:</b> Ciudad a la que pertenece el Cliente.</li>
                          <li><b>State:</b> Estado al que pertenece el Cliente.).</li>
                          <li><b>Zip:</b> Codigo Postal de la ciudad que pertenece el Cliente..</li>
                        </ul>
                      </p>
                      <p>
                      A continuación, de clic en el botón "Create", si desea guardar la venta y salir.
                      </p>
                      <p>
                        Si desea salir sin almacenar la venta, de clic en el boton "Cancelar".
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "left" }}>
                      <Image
                        src="/images/create-customers.jpg"
                       /*  src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/create-sale.png" */
                        thumbnail
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <h4>Directorio de Empleados</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  <Row>
                    <Col>
                      <p>
                        La pagina Directorio de Empleados <b>(Employee Directory)</b> gestiona la informacion de todos los empleados de la compañia.
                      </p>
                      <p>
                        Las columnas de la tabla indican los campos asociados a
                        cada cliente, según el orden en que aparecen a continuación:
                        <ul>
                          <li><b>Firts Name:</b> Nombre del Empleado</li>
                          <li><b>Last Name:</b> Apellido del Empleado</li>
                          <li><b>Email:</b> Email del Empleado</li>
                          <li><b>Phone:</b> Telefono de contacto del Empleado</li>
                          <li><b>Location:</b> Localizacion de la officina del Empleado</li>
                          <li><b>Position:</b> Cargo que ocupa en la compañia</li>
                          
                        </ul>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "left" }}>
                      <Image
                        /* src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/create-sale.png" */
                         src="/images/employees.jpg" 
                        thumbnail
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7">
                <h4>Reporte de ventas</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  <Row>
                    <Col>
                      <p>
                        En esta página encontraremos el reporte del total de ventas realizadas por la compañia.
                      </p>
                      <p>
                        Justo debajo del título de la página, puede encontrarse
                        el selector de fechas. Desde allí, el empleado podrá
                        filtrar las ventas para un período especifico de tiempo,
                        que bien puede ser de los predeterminados en esa lista,
                        como un período de tiempo cualquiera solo seleccionando
                        las fechas de inicio y fin.
                      </p>
                      <p>
                        Las columnas de la tabla indican los campos asociados a
                        cada venta, según el orden en que aparecen a continuación:
                        <ul>
                          <li><b>Date:</b> Fecha en que se realizó la venta.</li>
                          <li><b>Employee:</b> Empleado de la compañía que realizó la venta.</li>
                          <li><b>Location:</b>Officina de donde se realizo la venta.</li>
                          <li><b>Customer:</b> Cliente al que se le realizo la venta.</li>
                          <li><b>Insurance Providers:</b>Aseguranzas que se aplicaron en la venta.</li>
                          <li><b>Down Payment:</b>Monto cobrado al comprador por concepto de down payment.</li>
                          <li><b>Fees:</b>Monto cobrado por concepto de fees asociados a la venta.</li>
                          <li><b>Permits:</b>Monto cobrado por concepto de permisos asociados a la venta.</li>
                          <li><b>Tips:</b>Monto recibido por el vendedor en concepto de propina.</li>
                          <li><b>Premium:</b>Representa la suma de los cargos de los cuatro tipos de aseguranza.</li>
                        </ul>
                      </p>
                      <p>Al final de la tabla, podrá consultar los acumulados de datos para cada columna, así como el total de ventas asociado al período seleccionado.</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "left" }}>
                      <Image
                        src="/images/sales-reports.jpg"
                        /* src="https://arane-crm-resources.s3.us-east-2.amazonaws.com/training/sales-management.png" */
                        thumbnail
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>


          </Accordion>
        </Col>
      </Row>
    </>
  );
};

export default Training;
