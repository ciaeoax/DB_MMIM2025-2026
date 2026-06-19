// ***********  VALORES INICIALES ************* //
console.log('Ejecutando tercero .js');
let valor_if_nan = 0;
unidad_deseada = 'UMF 01 Oaxaca';

// ***********  VALORES INICIALES ************* //
// *****************  HEADER ****************** //
let selector_indicador = document.getElementById('indicador_select'); 
selector_indicador.textContent = indicador_deseado;
selector_indicador.innerHTML = '';
lista_indicadores.forEach((ind) => {
	const option = document.createElement("option");
	option.value = ind; 
	option.textContent = ind;  // Usar el primer array para el texto visible
	selector_indicador.appendChild(option);
});

// *****************  HEADER ****************** //
// ************  TABLAS INICIALES ************* //
const data_1 = [
	{ fecha: 'septiembre 2026', numerador: '20,000',	denominador: '375,000',	resultado: '12.5' },
	{ fecha: 'septiembre 2026', numerador: '20,000',	denominador: '375,000',	resultado: '12.5' },
	{ fecha: 'septiembre 2026', numerador: '20,000',	denominador: '375,000',	resultado: '12.5' },
	{ fecha: 'septiembre 2026', numerador: '20,000',	denominador: '375,000',	resultado: '12.5' }
];

const tabla_numden = new Tabulator("#tabla_numden", {
    data: data_1,
    // Enable tree structure
	layout: 'fitData',
    columns: [
		{ title: 'n', formatter: 'rownum', hozAlign: "center", },
        { title: "Fecha", field: "fecha", headerHozAlign:'center', hozAlign: "center", },
		{ title: "Numerador", field: "numerador", headerHozAlign:'center', hozAlign: "center", },
		{ title: "Denominador", field: "denominador", headerHozAlign:'center', hozAlign: "center", },
		{ title: "Ind", field: "resultado", headerHozAlign:'center', hozAlign: "center", },
    ],
});

const data_3 = [
	{ ind: 'DM 01', desempeño: 'esperado'},
	{ ind: 'DM 02', desempeño: 'esperado'},
	{ ind: 'EH 01', desempeño: 'esperado'},
	{ ind: 'CAMama 01', desempeño: 'medio'},
	{ ind: 'CAMama 02', desempeño: 'medio'},
	{ ind: 'DM 01', desempeño: 'bajo'},
	{ ind: 'DM 01', desempeño: 'bajo'},
	{ ind: 'DM 01', desempeño: 'otro'},
];

const tabla_desempeños = new Tabulator('#tabla_desempeños', {
	data: data_3,
	layout: 'fitColumns',
	columnDefaults:{ headerSort: false, }, // <--- ESTO desactiva el ordenamiento
	columns: [
		{ title: 'n', formatter: 'rownum', hozAlign: "center", width: 20, },
		{ title: "🟢 Esperado", field: "esperado", formatter: formateadorIndicador, cellClick: eventoClickIndicador },
        { title: "🟡 Medio", field: "medio", formatter: formateadorIndicador, cellClick: eventoClickIndicador },
        { title: "🔴 Bajo", field: "bajo", formatter: formateadorIndicador, cellClick: eventoClickIndicador },
        { title: "⚪ No Aplica", field: "noAplica", formatter: formateadorIndicador, cellClick: eventoClickIndicador }
	]
});

// ************  TABLAS INICIALES ************* //
// ***************  FUNCIONES  **************** //
// Función reutilizable para el evento Click de cualquier columna
function eventoClickIndicador(e, cell) {
    const val = cell.getValue();
    if (val) { // Solo redirige si la celda tiene un código de indicador
        document.getElementById('unidad_select').hidden = false; // mostrar la seleccion de unidades
		document.getElementById('indicador_select').hidden = false; // mostrar la seleccion de indicadores
		updateSelectedIndicador(val);
		ActualizarCadaGrafica(1);
    }
}

function actualizando_lista_desplegable_indicador(datos_indicadores){
	lista_indicadores = [];
	datos_indicadores.forEach(ind => {
		lista_indicadores.push(ind.indicador);
	});
	//console.log(lista_indicadores);	
	// Agregar opciones basadas en tus arrays
	selector_indicador.innerHTML = '';
	lista_indicadores.forEach((ind) => {
		//console.log(ind);
		const option = document.createElement("option");
		option.value = ind; 
		option.textContent = ind;  // Usar el primer array para el texto visible
		selector_indicador.appendChild(option);
	});
	indicador_deseado = lista_indicadores[0];
	return lista_indicadores;
}

function inicializando_vista_indicador(datos_indicadores, datos_desc, fecha_deseada, unidad_deseada, indicador_deseado){
	document.getElementById('unidad_select').hidden = false; // mostrar la seleccion de unidades
	document.getElementById('indicador_select').hidden = false; // mostrar la seleccion de indicadores
	
	//console.log(unidad_deseada, indicador_deseado);

	dato_indicador = filtrarIndicador(datos_desc, indicador_deseado);
	//console.log(dato_indicador, filtrarIndicador(datos_desc, indicador_deseado));
	document.getElementById('v3_indicador').innerHTML = dato_indicador[0].indicador;
	document.getElementById('v3_nombre_indicador').innerHTML = dato_indicador[0].nombre_indicador;
	let ranking_texto = document.getElementById('es_ranking');
	if (dato_indicador[0].es_rank) ranking_texto.hidden = false;
	else ranking_texto.hidden = true;

	//obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'valor');
	return lista_indicadores;
}

function obtener_info_indicador(datos, datos_pond, datos_desc, unidad_deseada, fecha_deseada, indicador_deseado){
	datos_ = filtrarIndicador(filtrarFecha(filtrarUnidad(datos, unidad_deseada), fecha_deseada), indicador_deseado);
	datos_pond_ = filtrarIndicador(filtrarFecha(filtrarUnidad(datos_pond, unidad_deseada), fecha_deseada), indicador_deseado);
	datos_desc_ = filtrarIndicador(datos_desc, indicador_deseado);
	//console.log(datos_, datos_pond_, datos_desc_);
	return [datos_[0], datos_pond_[0], datos_desc_[0]];
}

function obtener_data_historico(datos, unidad_deseada, indicador_deseado, elemento){
	datos_ = filtrarIndicador(filtrarUnidad(datos, unidad_deseada), indicador_deseado);
	datos_historicos = [];
	datos_historicos = datos_.map(fila => fila[elemento]);
	//console.log(datos_, datos_historicos);
	return datos_historicos;
}

function transformar_texto_a_fecha(texto){
	partes = texto.toLowerCase().split(' ');
	mes_texto = partes[0];
	año_ = partes[1];

	const meses_dict = {
		'enero' : '01', 'ene': '01',
		'febrero' : '02', 'feb': '02',
		'marzo' : '03', 'mar': '03',
		'abril' : '04', 'abr': '04',
		'mayo' : '05', 'may': '05',
		'junio' : '06', 'jun': '06',
		'julio' : '07', 'jul': '07',
		'agosto' : '08', 'ago': '08',
		'septiembre' : '09', 'sep': '09',
		'octubre' : '10', 'oct': '10',
		'noviembre' : '11', 'nov': '11',
		'diciembre' : '12', 'dic': '12',
	};

	let mes_numero = meses_dict[mes_texto] || '01';
	return `${año_}-${mes_numero}-01`;
}

function transformar_fecha_a_texto(fecha, mes_corto){
	const partes = fecha.split('-');
	año = partes[0];
	i_mes = parseInt(partes[1]) - 1;
	mes = meses[i_mes];
	if (mes_corto) return `${mes.slice(0, 3)} ${año}`;
	else return `${mes} ${año}`;
}

function actualizar_cards_informacion(d_, d_p_, d_d_, ponderaciones, unidades_1N_ranking, unidades_2N_ranking){
	numerador = (d_.numerador != undefined) ? d_.numerador : 'SD';
	denominador = (d_.denominador != undefined) ? d_.denominador : 'SD';
	valor = (d_.valor != undefined) ? d_.valor : 'SD';
	//console.log(d_, d_d_, d_p_);
	//console.log(unidad_deseada, unidades1, unidades2);
	if (unidades1.includes(unidad_deseada)) {
		document.getElementById('v3_card_desempeño_1').hidden = false;
		document.getElementById('v3_card_desempeño_2').hidden = true;
		actualizarCardsRanking('v3_card_desempeño_1', datos_pond, fecha_deseada, nivel_deseado, unidades_1N_ranking, [unidades_1N_ranking.indexOf(unidad_deseada)]);	
	}
	if (unidades2.includes(unidad_deseada) & unidad_deseada != 'Oaxaca') {
		document.getElementById('v3_card_desempeño_1').hidden = true;
		document.getElementById('v3_card_desempeño_2').hidden = false;
		actualizarCardsRanking('v3_card_desempeño_2', datos_pond, fecha_deseada, nivel_deseado, unidades_2N_ranking, [unidades_2N_ranking.indexOf(unidad_deseada)]);	
	}
	if (unidad_deseada == 'HGZMF 02 Salina Cruz' || unidad_deseada == 'HGSMF 41 Huatulco'){
		document.getElementById('v3_card_desempeño_1').hidden = false;
		document.getElementById('v3_card_desempeño_2').hidden = false;
		actualizarCardsRanking('v3_card_desempeño_1', datos_pond, fecha_deseada, 'Primer Nivel', unidades_1N_ranking, [unidades_1N_ranking.indexOf(unidad_deseada)]);
	}
	if (unidad_deseada == 'Oaxaca'){
		document.getElementById('v3_card_desempeño_1').hidden = true;
		document.getElementById('v3_card_desempeño_2').hidden = true;
	}

	if (isNaN(d_.valor) & d_d_.es_rank){
		valores = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'valor');
		fechas = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'fecha');
		denominadores = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'denominador');
		for (let i = -1; i > (-1-valores.length); i--) {
			valor = valores.at(i);
			fecha = fechas.at(i);
			if ((denominadores.at(i) != 'SD')){ break; }
		}
		//console.log(fecha, valor);
		valor_if_nan = valor;
		document.querySelector('#v3_card_resultado .card-ranking-porcentage').innerHTML = `${d_.valor} —<span style="font-size: 10px;">Para ranking: ${valor.toFixed(2)} (${fecha})</span>`;
		document.getElementById('card_formula').innerHTML = 'Sin datos para cálculo';
	} else {
		document.querySelector('#v3_card_resultado .card-ranking-porcentage').innerHTML = d_.valor.toFixed(2);
		document.getElementById('card_formula').innerHTML = `${numerador.toLocaleString()} / ${denominador.toLocaleString()} * ${d_d_.factor.toLocaleString()}`;
	}
	color_ = calcularColor(valor, d_.esperado_, d_.medio_, d_.bajo_);
	//console.log(color_, valor, d_.esperado_, d_.medio_, d_.bajo_);
	if (color_ == 'green') {
		document.querySelector('#v3_card_resultado .card-ranking-porcentage').style.color = color_verde;
		document.querySelector('#v3_card_semaforo .card-ranking-porcentage').style.color = color_verde;
		document.querySelector('#v3_card_semaforo .card-ranking-porcentage').innerHTML = `<i class="fa-solid fa-circle"></i> VERDE`;
		document.querySelector('#v3_card_semaforo .card-ranking-nota').innerHTML = `Rango: ${d_.esperado_}`;
	} else if (color_ == 'orange'){
		document.querySelector('#v3_card_resultado .card-ranking-porcentage').style.color = color_amarillo;
		document.querySelector('#v3_card_semaforo .card-ranking-porcentage').style.color = color_amarillo;
		document.querySelector('#v3_card_semaforo .card-ranking-porcentage').innerHTML = `<i class="fa-solid fa-circle"></i> AMARILLO`;
		document.querySelector('#v3_card_semaforo .card-ranking-nota').innerHTML = `Rango: ${d_.medio_}`;
	} else if (color_ == 'red'){
		document.querySelector('#v3_card_resultado .card-ranking-porcentage').style.color = color_rojo;
		document.querySelector('#v3_card_semaforo .card-ranking-porcentage').style.color = color_rojo;
		document.querySelector('#v3_card_semaforo .card-ranking-porcentage').innerHTML = `<i class="fa-solid fa-circle"></i> ROJO`;
		document.querySelector('#v3_card_semaforo .card-ranking-nota').innerHTML = `Rango: ${d_.bajo_}`;
	} else {
		document.querySelector('#v3_card_resultado .card-ranking-porcentage').style.color = '#000';
		document.querySelector('#v3_card_semaforo .card-ranking-porcentage').style.color = '#000';
		document.querySelector('#v3_card_semaforo .card-ranking-porcentage').innerHTML = `<i class="fa-solid fa-circle"></i> ——`;
		document.querySelector('#v3_card_semaforo .card-ranking-nota').innerHTML = `Rango: --`;
	}

	if (d_d_.es_rank){
		document.getElementById('v3_card_pond_max').hidden = false;
		document.getElementById('v3_card_pond_obt').hidden = false;
		document.getElementById('v3_card_aporte_g').hidden = false;
		document.getElementById('v3_card_aporte_p').hidden = false;
		document.querySelector('#v3_card_pond_max .card-ranking-porcentage').innerHTML = d_p_.pond_est.toFixed(2);
		document.querySelector('#v3_card_pond_obt .card-ranking-porcentage').innerHTML = d_p_.pond_obt.toFixed(2);
		pond_obt_unidad = d_p_.pond_obt;
		pond_est_unidad = d_p_.pond_est;
		division = (procesos.includes(d_p_.ind)) ? 0.6 : 0.4;
		pond_est = (procesos.includes(d_p_.ind)) ? ponderaciones.pond_proc_est : ponderaciones.pond_norm_est;
		pond_est_division = parseInt((pond_est / division).toFixed(0));
		//console.log(d_p_.pond_obt, pond_est_division, procesos, procesos.includes(d_p_.ind), ponderaciones.pond_proc_est, ponderaciones.pond_norm_est);
		aporte_rank_positivo = (pond_obt_unidad / pond_est_division * division * 100).toFixed(2);
		aporte_rank_negativo = ((pond_est_unidad - pond_obt_unidad) / pond_est_division * division * 100).toFixed(2);
		//console.log(pond_obt_unidad, pond_est_division, aporte_rank_positivo, aporte_rank_negativo);
		document.querySelector('#v3_card_aporte_g .card-ranking-porcentage').innerHTML = `▲${aporte_rank_positivo}%`;
		document.querySelector('#v3_card_aporte_p .card-ranking-porcentage').innerHTML = `▼${aporte_rank_negativo}%`;
	} else {
		document.getElementById('v3_card_pond_max').hidden = true;
		document.getElementById('v3_card_pond_obt').hidden = true;
		document.getElementById('v3_card_aporte_g').hidden = true;
		document.getElementById('v3_card_aporte_p').hidden = true;
	}	
}

function obtener_menor_mayor(...numeros){
	let numeros_limpios = numeros
		.flat(Infinity)
		.map(v => parseFloat(v))
		//.filter(v => !isNaN(v) && isFinite(v))
	menor = Math.min(numeros_limpios[0], numeros_limpios[1]);
	if (isNaN(menor)) menor = numeros_limpios[0];
	mayor = Math.max(numeros_limpios[0], numeros_limpios[1]);
	if (isNaN(mayor)) mayor = numeros_limpios[0];

	//console.log(numeros_limpios, menor, mayor);
	return [menor, mayor];
} 

function calcular_bloques_semaforo(fila){
	//console.log(fila);
	rangos = [];
	let puntuacion = document.querySelector('#v3_card_pond_max .card-ranking-porcentage').textContent;
	texto_esperado = `Esperado<br>${fila['esperado_']}<br>${puntuacion} pts`;
	texto_medio = `Medio<br>${fila['medio_']}<br>Pond. proporcional`;
	texto_bajo = `Bajo<br>${fila['bajo_']}<br>0.00 pts`;
	potencia_max = 1.05;
	potencia_min = 0.95;
	//console.log(valor_if_nan);

	if (fila['esperado_'].includes('<')) {
		minimo = (isNaN(fila['valor'])) ? obtener_menor_mayor(fila['esperado'], valor_if_nan)[0] : Math.min(fila['esperado'], fila['valor']);
		dato = {color: color_verde, inicio: minimo *potencia_min, fin: fila['esperado'], texto: texto_esperado, color_text: 'white'};
	} else if (fila['esperado_'].includes('>')) {
		maximo = (isNaN(fila['valor'])) ? obtener_menor_mayor(fila['esperado'], valor_if_nan)[1] : Math.max(fila['esperado'], fila['valor']);
		dato = {color: color_verde, inicio: fila['esperado'], fin: maximo *potencia_max, texto: texto_esperado, color_text: 'white'};
	} else {
		dato = {color: color_verde, inicio: fila['esperado'][0], fin: fila['esperado'][1], texto: texto_esperado, color_text: 'white'};
	}
	rangos.push(dato);
	if (fila['medio'] != 0){
		if (fila['medio'].at(0).length != 2){
			dato = {color: color_amarillo, inicio: fila['medio'][0], fin: fila['medio'][1], texto: texto_medio, color_text: 'black'};
		} else if (fila['medio'].at(0).length == 2){
			texto_medio = `Medio<br>${fila['medio_'].split('o')[0]}<br>Pond. proporcional`;
			dato = {color: color_amarillo, inicio: fila['medio'][0][0], fin: fila['medio'][0][1], texto: texto_medio, color_text: 'black'};
			rangos.push(dato);			
			texto_medio = `Medio<br>${fila['medio_'].split('o')[1]}<br>Pond. proporcional`;
			dato = {color: color_amarillo, inicio: fila['medio'][1][0], fin: fila['medio'][1][1], texto: texto_medio, color_text: 'black'};
		}
		rangos.push(dato);
	}
	if (fila['bajo'].length == undefined ){
		if (fila['bajo_'].includes('<')) {
			minimo = (isNaN(fila['valor'])) ? obtener_menor_mayor(fila['bajo'], valor_if_nan)[0] : Math.min(fila['bajo'], fila['valor']);
			dato = {color: color_rojo, inicio: minimo *potencia_min, fin: fila['bajo'], texto: texto_bajo, color_text: 'white'};
		} else if (fila['bajo_'].includes('>')) {
			maximo = (isNaN(fila['valor'])) ? obtener_menor_mayor(fila['bajo'], valor_if_nan)[1] : Math.max(fila['bajo'], fila['valor']);
			dato = {color: color_rojo, inicio: fila['bajo'], fin: maximo *potencia_max, texto: texto_bajo, color_text: 'white'};
		} 
	} else if (fila['bajo'].length == 2 ){
		minimo = (isNaN(fila['valor'])) ? obtener_menor_mayor(fila['bajo'], valor_if_nan)[0] : Math.min(fila['bajo'][0], fila['valor']);
		maximo = (isNaN(fila['valor'])) ? obtener_menor_mayor(fila['bajo'], valor_if_nan)[1] : Math.max(fila['bajo'][1], fila['valor']);
		texto_bajo = `Bajo<br>${fila['bajo_'].split('o')[0]}<br>0.00 pts`;
		dato = {color: color_rojo, inicio: minimo *potencia_min, fin: fila['bajo'][0], texto: texto_bajo, color_text: 'white'};
		rangos.push(dato);
		texto_bajo = `Bajo<br>${fila['bajo_'].split('o')[1]}<br>0.00 pts`;
		dato = {color: color_rojo, inicio: fila['bajo'][1], fin: maximo *potencia_max, texto: texto_bajo, color_text: 'white'};
	}
	rangos.push(dato);
	//console.log(fila['bajo'], fila['bajo'].length);
	config_semaforo = {
		tipo: 'lineal',
		rangos
	}
	//console.log(rangos, config_semaforo);
	return config_semaforo;
}

function graficarRangosPonderacion(contenedor_id, datos_indicador){
	const config_semaforo = calcular_bloques_semaforo(datos_indicador);
	if (isNaN(datos_indicador.valor)){
		resultado_actual = valor_if_nan;
	} else resultado_actual = datos_indicador.valor;
	//console.log(resultado_actual, config_semaforo);

	const textos_ = [];
	let anotaciones_rangos = [];
	//console.log(datos_indicador);
	x_names = ([datos_indicador.esperado, datos_indicador.medio, datos_indicador.bajo].flat(Infinity));
	const formas_fondo = config_semaforo.rangos.map(bloque => {
		altura = (bloque.color == 'orange') ? 0.90 : 0.1;
		anotaciones_rangos.push({
			xref: 'x',
			yref: 'paper',
			x: (bloque.fin + bloque.inicio) / 2,
			y: altura,
			text: `${bloque.texto}`,
			showarrow: false,
			valign: 'top',
			font: {
				size: 11,
				color: 'black'
			}
		})
		textos_.push(bloque.texto);
		return {
			type: 'rect',
			xref: 'x',
			yref: 'paper',
			x0: bloque.inicio,
			x1: bloque.fin,
			y0: 0.3,
			y1: 0.6,
			fillcolor: bloque.color,
			opacity: 0.85,
			line: {width : 0},
			/* label: {
				text: bloque.texto,
				textposition: 'top center',
				font: {size: 12, color: bloque.color_text}
			}, */
		};
	});
	//console.log(formas_fondo);
	if (!isNaN(resultado_actual)){
		formas_fondo.push({
			type: 'line+text',
			xref: 'x',
			yref: 'paper',
			x0: resultado_actual,
			x1: resultado_actual,
			y0: 0.25,
			y1: 0.65,
			line: {
				color: '#1f2937',
				width : 3,
				dash: 'solid'
			},
		});
	}

	const data_ = [{
		x: [resultado_actual],
		y: [7],
		mode: 'markers+text',
		textposition: 'right bottom',
		marker: { size: 10, color: 'white' },
		type: 'scatter',
		cliponaxis: false,
		texttemplate: '<b>%{x:.2f}</b>',
		hoverinfo: 'none'
	}];

	const layout = {
		...BASE_LAYOUT,
		title: {
			text: `Rangos de desempeño y resultado final`,
			x: 0,
		},
		xaxis: {
			showgrid: false,
			zeroline: false,
			tickmode: 'array',
			tickvals: x_names,
			ticktext: x_names,
			tickfont: {size: 10},
			tickangle: 0,
			visible: false
		},
		yaxis: {
			visible: false,
			showgrid: false,
			range: [0,10]
		},
		//height: 180,
		//hovertemplate: '%text',
		annotations: anotaciones_rangos,
		shapes: formas_fondo,
		margin: {l: 20, r: 20, t: 40, b: 20},
		showlegend: false,
	};

	Plotly.newPlot(contenedor_id, data_, layout, {displayModeBar: false});
} 

function dibujar_linea(valores_x, valores_y, color_, textos){
	return {
		type: 'scatter',
		mode: 'lines',
		x: valores_x,
		y: valores_y,
		cliponaxis: false,
		text: textos,
		texttemplate: '%{text}<extra></extra>',
		hovertemplate: '%{text}<extra></extra>',
		/* text: valores_y,
		textposition: 'top left',
		texttemplate: '<b>%{y:.1f}</b>',
		textfont: {	size: 11 }, */
		marker: { color: color_, size: 6 },
		line: {
			dash: 'dashdot',
			width: 2,
			color: color_
		},
		//hoverinfo: 'none'
	}
}

function graficarResultadoIndicador(id_grafica, datos, unidad_deseada, indicador_deseado){
	resultados = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'valor');
	fechas = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'fecha');
	esperados = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'esperado');
	medios = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'medio');
	bajos = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'bajo');
	colores = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'color');
	esperados_texto = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'esperado_');
	bajos_texto = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'bajo_');

	fechas_ = fechas.map(f => transformar_texto_a_fecha(f));
	//console.log(esperados, medios, bajos);
	//console.log(fechas);
	lineas = [];

	lineas.push({
		type: 'scatter',
		mode: 'lines+markers+text',
		x: fechas_,
		y: resultados,
		cliponaxis: false,
		text: resultados,
		textposition: 'top left',
		texttemplate: '<b>%{y:.1f}</b>',
		textfont: {	size: 11 },
		marker: { color: '#1d1f25b6', size: 10 },
		line: {
			dash: 'solid',
			width: 3,
			color: '#1d1f25b6'
		},
		hoverinfo: 'none'
	});
	esperados_ = esperados.map(dato => [].concat(dato));
	for (let i = 0; i < esperados_[0].length; i++) {
		linea_ = esperados_.map(dato => parseFloat(dato[i]));
		linea = dibujar_linea(fechas_, linea_, color_verde, esperados_texto);
		lineas.push(linea);
	}
	bajos_ = bajos.map(dato => [].concat(dato));
	for (let i = 0; i < bajos_[0].length; i++) {
		linea_ = bajos_.map(dato => parseFloat(dato[i]));
		linea = dibujar_linea(fechas_, linea_, color_rojo, bajos_texto);
		lineas.push(linea);
	}
	//console.log(bajos_texto);
	lineas.push({
		type: 'scatter',
		mode: 'markers',
		x: fechas_,//[fecha_deseada],
		y: resultados,//[resultados.at(fechas.indexOf(fecha_deseada))],
		cliponaxis: false,
		text: resultados,//[resultados.at(fechas.indexOf(fecha_deseada))],
		textposition: 'bottom right',
		texttemplate: '<b>%{y:.1f}</b>',
		textfont: {	size: 16, color: colores/* colores.at(fechas.indexOf(fecha_deseada)) */},
		marker: { color: colores/* colores.at(fechas.indexOf(fecha_deseada)) */, size: 6 },
		hovertemplate: `%{y:.2f}<extra></extra>`,
	});

	layout_ = {
		title: {
			text: `Histórico del resultado del Indicador`,
			x: 0
		},
		...BASE_LAYOUT,
		barmode: 'overlay',
		margin: { b: 40, l:15, r:0, t:40 },
		hovermode: 'x unified',
		yaxis: {
			tickfont: { size: 8 }, 
			showgrid: false,
		},
		xaxis: {
			type: 'date',
			tickformat: '%b\n%Y',
			dtick: 'M1',
			showgrid: false,
			automargin: true,
			tickangle: 0
		}
	};

	config_ = { ...CONFIGURACION,
		toImageButtonOptions: {
			format: 'svg', // o 'svg' para calidad infinita
			filename: id_grafica,
			scale: 3 // Esto duplica la resolución para que se vea nítido
		}
	}
	//Plotly.purge(id_grafica);
	Plotly.react(id_grafica, lineas, layout_, config_);}

function graficarNumDenIndicador(grafica_id, datos, unidad_deseada, indicador_deseado, fecha_deseada){
	resultados = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'valor');
	fechas = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'fecha');
	numeradores = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'numerador');
	denominadores = obtener_data_historico(datos, unidad_deseada, indicador_deseado, 'denominador');
	colores = obtener_data_historico(data, unidad_deseada, indicador_deseado, 'color');
	fechas_ = fechas.map(f => transformar_texto_a_fecha(f));

	numero_historico = -13;
	resultados = resultados.slice(numero_historico).reverse();
	fechas_ = fechas_.slice(numero_historico).reverse();
	numeradores = numeradores.slice(numero_historico).reverse();
	denominadores = denominadores.slice(numero_historico).reverse();

	data_1_ = [];
    fechas_.forEach((fecha, i) => { 
        // Formateamos los números con comas para miles (.toLocaleString)
		fecha = transformar_fecha_a_texto(fecha, false);
        const numFormateado = (numeradores[i] != undefined) ? numeradores[i].toLocaleString() : 'SD';
        const denFormateado = (denominadores[i] != undefined) ? denominadores[i].toLocaleString() : 'SD';
        
        const pct = resultados[i].toFixed(2);
        let colorTextoPct = colores[i]; 
		data_1_.push({ fecha: fecha, numerador: numFormateado, denominador: denFormateado, resultado: pct });
    }); 

	//console.log(data_1_);
	tabla_numden.clearData();
	tabla_numden.updateOrAddData(data_1_);
}

function enlistarIndicadoresDesempeños(datos_desempeños){
	//console.log(datos_desempeños);
	datos_para_tabla = [];
	esperados = [];
	medios = [];
	bajos = [];
	otros = [];

	datos_desempeños.map(ind => {
		if (ind.color == 'green'){
			esperados.push(ind.indicador);
			//datos_para_tabla.push({ ind: ind.indicador, desempeño: 'esperado'});
		} else if (ind.color == 'orange'){
			medios.push(ind.indicador);
			//datos_para_tabla.push({ ind: ind.indicador, desempeño: 'medio'});
		} else if (ind.color == 'red'){
			bajos.push(ind.indicador);
			//datos_para_tabla.push({ ind: ind.indicador, desempeño: 'bajo'});
		} else{
			otros.push(ind.indicador);
			//datos_para_tabla.push({ ind: ind.indicador, desempeño: 'otro'});
		}
	});

	max_filas = Math.max(esperados.length, medios.length, bajos.length, otros.length);
	for (let i = 0; i < max_filas; i++) {
		datos_para_tabla.push({
			esperado: esperados[i] || "", // Si ya no hay elementos, se deja vacío
			medio: medios[i] || "",
			bajo: bajos[i] || "",
			noAplica: otros[i] || ""
		});
	}

	const order_ = ['esperado', 'medio', 'bajo', 'otro'];
	//datos_para_tabla.sort((a, b) => order_.indexOf(a.desempeño) - order_.indexOf(b.desempeño));
	//console.log(datos_para_tabla);
	
	tabla_desempeños.clearData();
	tabla_desempeños.updateOrAddData(datos_para_tabla);
}

function updateSelectedIndicador(indicador_deseado) {
	console.log(indicador_deseado);
	//selector_indicador.textContent = indicador_deseado;
	selector_indicador.value = indicador_deseado;
	//ActualizarCadaGrafica(1);
}

selector_indicador.addEventListener('change', () => {
	const value = selector_indicador.value;
	indicador_deseado = value;
	console.log(value, indicador_deseado);
	ActualizarCadaGrafica(1);
});

// *****************  FUNCIONES  ****************** //
// ***********  GRAFICAS INICIALES ************* //
resultado_actual = 10;
const data_ = [{
	x: [resultado_actual],
	y: [0.5],
	mode: 'markers+text',
	text: [`<b>${resultado_actual}</b>`],
	textposition: 'top center',
	marker: { size: 12, color: '#1f2937' },
	type: 'scatter'
}];
config_semaforo = {
	tipo: 'bilateral',
	rangos: [
		{color: '#dc3545', inicio: 10.0, fin: 12.0},
		{color: '#dc3545', inicio: 0, fin: 3.9},
		{color: '#ffc107', inicio: 3.9, fin: 5.0},
		{color: '#ffc107', inicio: 8.0, fin: 10.0},
		{color: '#198754', inicio: 5.0, fin: 8.0},
	]
}
const formas_fondo = config_semaforo.rangos.map(bloque => {
	return {
		type: 'rect',
		xref: 'x',
		yref: 'paper',
		x0: bloque.inicio,
		x1: bloque.fin,
		y0: 0.2,
		y1: 0.8,
		fillcolor: bloque.color,
		opacity: 0.85,
		line: {width : 0}
	};
});
formas_fondo.push({
	type: 'line',
	xref: 'x',
	yref: 'paper',
	x0: resultado_actual,
	x1: resultado_actual,
	y0: 0.1,
	y1: 0.9,
	line: {
		color: '#1f2937',
		width : 3,
		dash: 'solid'
	}
});
const layout = {
		title: `Rangos de desempeño ${config_semaforo.tipo.toUpperCase()}`,
		xaxis: {
			range: [0, config_semaforo.tipo ==='lineal' ? 100 : 12],
			showgrid: false,
			zeroline: false
		},
		yaxis: {
			visible: false
		},
		shapes: formas_fondo,
		height: 100,
		margin: {l: 20, r: 20, t: 80, b: 20},
		showlegend: false
};

Plotly.newPlot('distribucion_rangos', data_, layout, {displayModeBar: false});

Plotly.newPlot("historico_valor",
	[
		{
			type: "lines",
			x: meses,
			y: [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
			cliponaxis: false,
			text: [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
			textposition: 'top center',
			texttemplate: '<b>%{y:.1f}</b>',
			marker: { color: '#0236c7', size: 8 },
			line: {
				dash: 'solid',
				width: 4,
				color: '#0236c7'
			},
		},
		{
			type: 'lines',
			x: meses,
			y: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
			//marker: { color: '#888', size: 5 },
			line: {
				dash: 'dashdot',
				width: 2,
				color: '#027215'
			},
		},
		{
			type: 'lines',
			x: meses,
			y: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
			//marker: { color: '#888', size: 5 },
			line: {
				dash: 'dashdot',
				width: 2,
				color: '#a50000'
			},
		}
	],
	{
		title: {
			text: `Histórico del resultado del Indicador`,
			x: 0
		},
		...BASE_LAYOUT,
		barmode: 'overlay',
		xaxis: {
			tickangle: 0, //
			tickfont: { size: 12 },
			ticklabelstandoff: 5,
			showgrid: false
		},
		margin: { b: 30, l:10, r:25, t:50 },
		showlegend: true,
		legend: {
			//orientation: 'h',
			xanchor: 'right',
			//yanchor: 'top',
			x: 1.2,
			y: 1,
			font: { size: 10 }
		},
		yaxis: {
			//range: [0, 100], 
			tickfont: { size: 10 }, 
			side: 'right'
		},
	}, 
	CONFIGURACION
); // historico-valor

// ***********  GRAFICAS INICIALES ************* //
// ***********  TABLAS INICIALES ************ //



// ***********  TABLAS INICIALES ************ //

//mostrarVista('vista-indicador');
//lista_indicadores = actualizando_lista_desplegable_indicador(datos_indicadores);
//document.getElementById('historico-puntuacion').style.min-width = '800px';