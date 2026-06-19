// ***********  VALORES INICIALES ************* //
console.log('Ejecutando segundo .js');

// ***********  VALORES INICIALES ************* //
// *****************  HEADER ****************** //
let selector_unidad = document.getElementById('unidad_select'); 
selector_unidad.textContent = unidad_deseada;
nombres_unidades.forEach((unidad) => {
	const option = document.createElement("option");
	option.value = unidad; 
	option.textContent = unidad;  // Usar el primer array para el texto visible
	selector_unidad.appendChild(option);
});

// *****************  HEADER ****************** //
// *****************  FUNCIONES  ****************** //
function mostrarVista(vista){
	document.getElementById('vista-principal').hidden = true;
	document.getElementById('vista-rank-unidad').hidden = true;
	document.getElementById('vista-indicador').hidden = true;

	document.getElementById(vista).hidden = false;
}

function mostrarTablas1_2Nivel(nivel){
	console.log('viendo que imprimo', unidad_deseada, nivel);
	document.getElementById('espacio-rank-1N').hidden = true;
	document.getElementById('espacio-rank-2N').hidden = true;
	document.getElementById('espacio-rank-1N-2').hidden = true;
	document.getElementById('espacio-rank-2N-2').hidden = true;

	if (unidad_deseada != 'HGZMF 02 Salina Cruz' && unidad_deseada != 'HGSMF 41 Huatulco'){
		if (nivel == 'Primer Nivel'){
			console.log('mostro uno nivel')
			document.getElementById('espacio-rank-1N').hidden = false;
			document.getElementById('espacio-rank-1N-2').hidden = false;
		} else if (nivel == 'Segundo Nivel' || nivel == 'Delegacional'){
			console.log('mostro dos nivel')
			document.getElementById('espacio-rank-2N').hidden = false;
			document.getElementById('espacio-rank-2N-2').hidden = false;
		}
	} else{
		document.getElementById('espacio-rank-1N').hidden = false;
		document.getElementById('espacio-rank-1N-2').hidden = false;
		document.getElementById('espacio-rank-2N').hidden = false;
		document.getElementById('espacio-rank-2N-2').hidden = false;
	}
}

function updateSelectedUnit(unidad_deseada) {
	//document.getElementById('selected-unit').textContent = unidad_deseada;
	selector_unidad.value = unidad_deseada;
	//ActualizarCadaGrafica(1);
}

// *****************  FUNCIONES  ****************** //
// ****************** EVENTS ***************** //
document.getElementById('ranking_general_1N').on('plotly_click', function(data5) {
	console.log(unidad_deseada, indicador_deseado);
	var punto = data5.points[0];
	// console.log(punto.x);
	if (punto.x != 'Promedio'){
		document.getElementById('unidad_select').hidden = false;
		unidad_deseada = nombres_unidades.find(unidad => unidad.includes(punto.x));
		mostrarVista('vista-rank-unidad');
		updateSelectedUnit();
		ActualizarCadaGrafica(1);
	}
});

document.getElementById('ranking_general_2N').on('plotly_click', function(data5) {
	console.log(unidad_deseada, indicador_deseado);
	var punto = data5.points[0];
	// console.log(punto.x);
	if (punto.x != 'Promedio'){
		document.getElementById('unidad_select').hidden = false;
		unidad_deseada = nombres_unidades.find(unidad => unidad.includes(punto.x));
		mostrarVista('vista-rank-unidad');
		updateSelectedUnit();
		ActualizarCadaGrafica(1);
	}
});

document.getElementById('go-to-rank-unidad').addEventListener('click', () => {
	mostrarVista('vista-rank-unidad');
	console.log(unidad_deseada, indicador_deseado);
	document.getElementById('unidad_select').hidden = false; // mostrar la seleccion de unidades
	document.getElementById('indicador_select').hidden = true; // mostrar la seleccion de indicadores
	//unidad_deseada = unidades_1N_ranking.at(0); // seleccionar el primer lugar
	indicador_deseado = 'CES 04';
	if (unidad_deseada != 'Promedio'){
		updateSelectedUnit();
		ActualizarCadaGrafica(1);
	}
});

document.getElementById('go-to-rank-unidad-1').addEventListener('click', () => {
	document.getElementById('unidad_select').hidden = false; // mostrar la seleccion de unidades
	document.getElementById('indicador_select').hidden = true; // mostrar la seleccion de indicadores
	unidad_deseada = unidades_1N_ranking.at(0); // seleccionar el primer lugar
	indicador_deseado = 'CES 04';
	mostrarVista('vista-rank-unidad');
	console.log(unidad_deseada, indicador_deseado);
	if (unidad_deseada != 'Promedio'){
		updateSelectedUnit(unidad_deseada);
		ActualizarCadaGrafica(1);
	}
});

document.getElementById('go-to-rank-unidad-2').addEventListener('click', () => {
	mostrarVista('vista-rank-unidad');
	console.log(unidad_deseada, indicador_deseado);
	document.getElementById('unidad_select').hidden = false; // mostrar la seleccion de unidades
	document.getElementById('indicador_select').hidden = true; // mostrar la seleccion de indicadores
	unidad_deseada = unidades_2N_ranking.at(0); // seleccionar el primer lugar
	indicador_deseado = 'CES 04';
	if (unidad_deseada != 'Promedio'){
		updateSelectedUnit();
		ActualizarCadaGrafica(1);
	}
});

document.getElementById('go-to-todos-indicadores').addEventListener('click', () => {
	mostrarVista('vista-indicador');
	console.log(unidad_deseada, indicador_deseado);
	document.getElementById('unidad_select').hidden = false; // mostrar la seleccion de unidades
	document.getElementById('indicador_select').hidden = false; // mostrar la seleccion de indicadores
	indicador_deseado = (unidades1.includes(unidad_deseada)) ? 'DM 01' : 'Materna 03';
	datos_indicadores = filtrarUnidad(filtrarFecha(datos, fecha_deseada), unidad_deseada);
	actualizando_lista_desplegable_indicador(datos_indicadores);
	ActualizarCadaGrafica(1);
	//unidad_deseada = 'Oaxaca';
	//updateSelectedUnit = 'Oaxaca';
});

document.getElementById('go-to-rank-general').addEventListener('click', () => {
	mostrarVista('vista-principal');
	console.log(unidad_deseada, indicador_deseado);
	document.getElementById('unidad_select').hidden = true;
	document.getElementById('indicador_select').hidden = true;
	//unidad_deseada = 'Oaxaca';
	//updateSelectedUnit = 'Oaxaca';
});

document.getElementById('prev-month').addEventListener('click', () => {    
	selectedMonth--;
	if (selectedMonth < 0) {
		selectedMonth = 11;
		currentYear--;
	}
	updateSelectedMonth();
	updateYearDisplay();
	ActualizarCadaGrafica(1);
	fecha_deseada = (`${meses[selectedMonth]} ${currentYear}`);
	indicador_seleccionado = indicador_deseado;
	datos_indicadores = filtrarUnidad(filtrarFecha(datos, fecha_deseada), unidad_deseada);
	actualizando_lista_desplegable_indicador(datos_indicadores);
	indicador_deseado = indicador_seleccionado;
	updateSelectedIndicador(indicador_deseado);
	checkMonths(fecha_deseada);
});

document.getElementById('next-month').addEventListener('click', () => {
	selectedMonth++;
	if (selectedMonth > 11) {
		selectedMonth = 0;
		currentYear++;
	}
	updateSelectedMonth();
	updateYearDisplay();
	ActualizarCadaGrafica(1);
	fecha_deseada = (`${meses[selectedMonth]} ${currentYear}`);
	indicador_seleccionado = indicador_deseado;
	datos_indicadores = filtrarUnidad(filtrarFecha(datos, fecha_deseada), unidad_deseada);
	actualizando_lista_desplegable_indicador(datos_indicadores);
	indicador_deseado = indicador_seleccionado;
	updateSelectedIndicador(indicador_deseado);
	checkMonths(fecha_deseada);
});

selector_unidad.addEventListener('change', () => {
	//console.log('actualizando unidad', indicador_deseado);
	const value = selector_unidad.value;
	unidad_deseada = value;
	datos_indicadores = filtrarUnidad(filtrarFecha(datos, fecha_deseada), unidad_deseada);

	if (document.getElementById('vista-indicador').checkVisibility()){
		// Seleccionando primer indicador DE FORMA AUTOMATICA AL ACTUALIZAR LA LISTA DESPLEGABLE
		lista_indicadores = actualizando_lista_desplegable_indicador(datos_indicadores);
		console.log(datos_indicadores, fecha_deseada, unidad_deseada, lista_indicadores);
	}
	ActualizarCadaGrafica(1);
});

// ****************** EVENTS ***************** //
// ***********  GRAFICAS INICIALES ************* //
Plotly.newPlot("historico-puntuacion1",
	[
		{
			type: "lines",
			x: meses,
			y: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
			cliponaxis: false,
			textposition: 'outside',
			texttemplate: '<b>%{y:.1f}</b>',
			marker: { color: '#0284c7', size: 8 },
			line: {
				dash: 'solid',
				width: 6,
				color: '#0284c7'
			},
		},
		{
			type: 'lines',
			x: meses,
			y: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
			marker: { color: '#888', size: 5 },
			line: {
				dash: 'dashdot',
				width: 2,
				color: '#888'
			},
		}
	],
	{
		title: {
			text: `Ranking General Oaxaca`,
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
			range: [0, 100], 
			tickfont: { size: 10 }, 
			side: 'right'
		},
	}, 
	CONFIGURACION
); // historico-puntuacion1

Plotly.newPlot("historico-puntuacion2",
	[
		{
			type: "lines",
			x: meses,
			y: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
			cliponaxis: false,
			textposition: 'outside',
			texttemplate: '<b>%{y:.1f}</b>',
			marker: { color: '#0284c7', size: 8 },
			line: {
				dash: 'solid',
				width: 6,
				color: '#0284c7'
			},
		},
		{
			type: 'lines',
			x: meses,
			y: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
			marker: { color: '#888', size: 5 },
			line: {
				dash: 'dashdot',
				width: 2,
				color: '#888'
			},
		}
	],
	{
		title: {
			text: `Ranking General Oaxaca`,
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
			range: [0, 100], 
			tickfont: { size: 10 }, 
			side: 'right'
		},
	}, 
	CONFIGURACION
); // historico-puntuacion2

Plotly.newPlot("ranking_indicador_1N", 
	[
		{
			type: "bar",
			orientation: 'h',
			y: ['DM', 'EH', 'CAMama', 'CACU', 'Materna', 'Neonatal', 'Sob y Obesidad', 'CUPN', 'CUSN'],
			x: [1, 0.75, 0.5, 0.25, 1, 0.8, 0.5, 0.25, 0.6],
			texttemplate: ' ',
			marker: { 
				color: 'rgba(0,88,78,1)',
				line: {color: 'rgba(0,88,78,1)', width: 1}
			},
			hoverlabel: {
				bgcolor: color_deseado,
				font: { color: (color_deseado=='orange' ? 'black':'white') }
			},
			showlegend: false,
			name: 'Pond. Obtenida'
		},
		{
			type: "bar",
			orientation: 'h',
			y: ['DM', 'EH', 'CAMama', 'CACU', 'Materna', 'Neonatal', 'Sob y Obesidad', 'CUPN', 'CUSN'],
			x: [1, 0.75, 0.5, 0.25, 1, 0.8, 0.5, 0.25, 0.6],
			texttemplate: ' ',
			marker: { 
				color: 'rgba(0,88,78,.25)',
				line: {color: 'rgba(0,88,78,1)', width: 1}
			},
			hoverlabel: {
				bgcolor: color_deseado,
				font: { color: (color_deseado=='orange' ? 'black':'white') }
			},
			margin: { b: 150 },
			showlegend: false,
			name: 'Pond. Faltante'
		}
	], 
	{
		title: {
			text: `Ponderación obtenida vs estimada<br>`,// - ${unidad_deseada}, ${fecha_deseada}`,
			x: 0.5,
		},
		...BASE_LAYOUT_vertical,
		barmode: 'stack'
	}
); // ranking_indicador_1N 

Plotly.newPlot("ranking_indicador_2N", 
	[
		{
			type: "bar",
			orientation: 'h',
			y: ['DM', 'EH', 'CAMama', 'CACU', 'Materna', 'Neonatal', 'Sob y Obesidad', 'CUPN', 'CUSN'],
			x: [1, 0.75, 0.5, 0.25, 1, 0.8, 0.5, 0.25, 0.6],
			texttemplate: ' ',
			marker: { 
				color: 'rgba(0,88,78,1)',
				line: {color: 'rgba(0,88,78,1)', width: 1}
			},
			hoverlabel: {
				bgcolor: color_deseado,
				font: { color: (color_deseado=='orange' ? 'black':'white') }
			},
			showlegend: false,
			name: 'Pond. Obtenida'
		},
		{
			type: "bar",
			orientation: 'h',
			y: ['DM', 'EH', 'CAMama', 'CACU', 'Materna', 'Neonatal', 'Sob y Obesidad', 'CUPN', 'CUSN'],
			x: [1, 0.75, 0.5, 0.25, 1, 0.8, 0.5, 0.25, 0.6],
			texttemplate: ' ',
			marker: { 
				color: 'rgba(0,88,78,.25)',
				line: {color: 'rgba(0,88,78,1)', width: 1}
			},
			hoverlabel: {
				bgcolor: color_deseado,
				font: { color: (color_deseado=='orange' ? 'black':'white') }
			},
			margin: { b: 150 },
			showlegend: false,
			name: 'Pond. Faltante'
		}
	], 
	{
		title: {
			text: `Ponderación obtenida vs estimada<br>`,// - ${unidad_deseada}, ${fecha_deseada}`,
			x: 0.5,
		},
		...BASE_LAYOUT_vertical,
		barmode: 'stack'
	}
); // ranking_indicador_2N 

Plotly.newPlot("desempeños", 
	[
		{
			type: "pie",
			values: [1, 1, 1, 1],
			labels: labels,
			marker: { colors: colors_desempeños	},
			textinfo: "label+percent",
			insidetextorientation: "horizontal",
			hole: 0.3,
			hovertemplate: '<b>%{label}</b> — %{percent:.1%}<br><b>%{value}</b> indicadores.<extra></extra>',
		}
	], 
	{
		title: {
			text: `<b>${unidad_deseada}</b>`,
			font: { size: 24 },
			x: 0.5,
			y: 0.95
		},
		//margin: { t: 50, b: 40, l: 0, r: 0 }, // Márgenes ajustados
		plot_bgcolor: 'rgba(0,0,0,0)', // Fondo transparente
		paper_bgcolor: 'rgba(0,0,0,0)',
		annotations: [{  // Texto en el centro
			text: `<b>No.<br>indicadores:<br><br><span style="font-size:20px; margin:25px;">${n_indicadores}</span><b>`,
			font: { size: 11 },
			showarrow: false,
			x: 0.5,  // Posición X (0-1)
			y: 0.5,  // Posición Y (0-1)
			xanchor: 'center',
			yanchor: 'middle',
			align: 'center'
		}],
		showlegend: false,
		/* hoverlabel: {
			shadow: {
				color: 'rgba(0,0,0,0.5)',
				x: 3,
				y: 3,
				blur: 10
			}
		}, */
		font: {
			family: 'Noto Sans',
			size: 16,
			weight: 'bold',
			color: 'black'
		},
		hovermode: 'closest',
		animations: {
			enabled: true,
			easing: 'elastic-in-out'
		}
	},
	CONFIGURACION
); // desempeños
// ***********  GRAFICAS INICIALES ************* //
// ***********  TABLAS INICIALES ************ //


// ***********  TABLAS INICIALES ************ //

//mostrarVista('vista-principal');
//document.getElementById('historico-puntuacion').style.min-width = '800px';