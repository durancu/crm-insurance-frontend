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
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h4>Home Page</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
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
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h4>Gestión de ventas</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
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
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h4>Crear Venta</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
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





          </Accordion>
        </Col>
      </Row>
    </>
  );
};

export default Training;
