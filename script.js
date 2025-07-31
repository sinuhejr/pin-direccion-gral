<link rel="stylesheet" href="estilos.css">


  <!-- Pantalla de autenticación -->
  <div id="login-section">
    <h2>Ingrese la contraseña para acceder</h2>
    <input type="password" id="password" placeholder="Contraseña" oninput="verificarEnTiempoReal(this.value)">
    <button onclick="verificarContraseña()">Ingresar</button>
    <p id="mensaje" style="color: red;"></p>
  </div>

  <!-- Pantalla principal -->
  <div id="main-section" class="hidden">
    <h2>Bienvenido</h2>

    <!-- Selección de PIN -->
    <p>¿Qué PIN desea crear?</p>
    <div class="botones-pin">
      <button id="btnSalida" onclick="seleccionarPin('Salida')">Salida</button>
      <button id="btnRegreso" onclick="seleccionarPin('Regreso')">Regreso</button>
    </div>

    <!-- Fecha y Hora -->
    <div id="fechaHora"></div>
    <p id="pinConfirmado" style="color: green; margin-top: 20px;"></p>

    <!-- Sección Personas -->
    <hr>
    <h3>Selecciona las áreas para mostrar los oficiales:</h3>
    <div class="area-checkbox">
      <label><input type="checkbox" class="area" value="Operativos" onchange="mostrarOficiales()"> Operativa</label><br>
      <label><input type="checkbox" class="area" value="Forensia" onchange="mostrarOficiales()"> Forensia</label><br>
      <label><input type="checkbox" class="area" value="Prevención" onchange="mostrarOficiales()"> Prevención</label><br>
      <label><input type="checkbox" class="area" value="Técnicas" onchange="mostrarOficiales()"> Técnicas</label>
      <label><input type="checkbox" class="area" value="Administrativa" onchange="mostrarOficiales()"> Administrativa</label><br>
    </div>

    <div class="oficiales-lista" id="oficialesLista"></div>

    <!-- Sección Vehículos -->
    <hr>
    <h3>Selecciona un vehículo:</h3>
    <div class="vehiculos-lista" id="vehiculosLista"></div>

    <!-- Sección Lugares -->
    <hr>
    <h3>Selecciona el lugar de destino:</h3>
    <form id="formLugares">
      <div style="text-align: left; display: inline-block;">
        <label><input type="checkbox" class="lugar" value="abastecer combustible" onchange="registrarLugar(this)"> a abastecer combustible</label><br>
        <label><input type="checkbox" class="lugar" value="traer alimentos para el personal en turno" onchange="registrarLugar(this)"> traer alimentos para el personal en turno</label><br>
        <label><input type="checkbox" class="lugar" value="realizar tomas con el dron" onchange="registrarLugar(this)"> a realizar tomas con el dron</label><br>
        <label><input type="checkbox" class="lugar" value="realizar entrevista en campo" onchange="registrarLugar(this)"> a realizar entrevista en campo</label><br>
        <label><input type="checkbox" class="lugar" value="comisión" onchange="registrarLugar(this)"> a comisión</label><br>
        <label><input type="checkbox" class="lugar" value="realizar investigación en campo" onchange="registrarLugar(this)"> a realizar investigación en campo</label><br>
        <label><input type="checkbox" class="lugar" value="FGA documentación" onchange="registrarLugar(this)"> a la Fiscalía General de Aguascalientes a entregar documentación</label><br>
        <label><input type="checkbox" class="lugar" value="revisar carpeta en CJM" onchange="registrarLugar(this)"> a revisar carpeta de investigación en el Centro de Justicia de la Mujer</label><br>
        <label><input type="checkbox" class="lugar" value="lavar unidad" onchange="registrarLugar(this)"> a lavar la unidad en Autolavado</label><br>
        <label><input type="checkbox" class="lugar" value="entregar CJM" onchange="registrarLugar(this)"> a entregar documentación al Centro de Justicia de la Mujer</label><br>
        <label><input type="checkbox" class="lugar" value="entrevista MP CJM" onchange="registrarLugar(this)"> a entrevistarse con el Ministerio Público del Centro de Justicia de la Mujer</label><br>
        <label><input type="checkbox" class="lugar" value="asunto personal" onchange="registrarLugar(this)"> a asunto personal</label><br>
        <label><input type="checkbox" class="lugar" value="Bodega FGA" onchange="registrarLugar(this)"> a la Bodega de Indicios de la FGA a entregar un indicio</label><br>
        <label>Otro (a): <input type="text" id="otroLugar" placeholder="Escribe otro sin (a)" oninput="desmarcarRadios()"></label>
      </div>
    </form>

    <!-- Oficial que Firma -->
    <hr>
    <h3>Oficial que Firma:</h3>
    <select id="oficialFirma"></select><br><br>

    <button onclick="generarPin()">Generar PIN</button>
    <button onclick="copiarPin()">Copiar PIN</button>
    <pre id="resultadoPin"></pre>
  </div>

  <script src="script.js"></script>