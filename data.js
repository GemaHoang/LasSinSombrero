// Datos de Las Sinsombrero — mujeres de la Generación del 27
// Información ampliada a partir del libro "Las Sinsombrero. Sin ellas, la historia
// no está completa" de Tània Balló (Espasa, 2016) y fuentes biográficas.
// Imágenes: Wikimedia Commons (Special:FilePath). Si falla la carga, script.js
// muestra un avatar con las iniciales.

const sinsombrero = [
  {
    id: "maruja-mallo",
    nombre: "Maruja Mallo",
    nombreCompleto: "Ana María Gómez González",
    nacimiento: "1902",
    fallecimiento: "1995",
    lugar: "Viveiro, Lugo",
    disciplinas: ["Pintura", "Vanguardia"],
    iniciales: "MM",
    color: "#e4572e",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruja_Mallo.JPG?width=600",
    bio: "Pintora surrealista, alma libre y provocadora de la vanguardia madrileña.",
    bioLarga: "Ana María Gómez González, Maruja Mallo, fue la pintora más original, moderna y transgresora de la vanguardia española: grandes lienzos llenos de color, movimiento y geometría. En 1922 fue la única mujer que aprobó el examen de ingreso en la Escuela de Bellas Artes de San Fernando. Amiga íntima de Dalí, Lorca y Buñuel, junto a Lorca y Margarita Manso protagonizó el gesto de quitarse el sombrero en la Puerta del Sol, acto que dio nombre al grupo. Mantuvo una intensa relación con Rafael Alberti entre 1925 y 1930 —silenciada después por María Teresa León— y más tarde inspiró a Miguel Hernández 'El rayo que no cesa'. Ortega y Gasset organizó su primera exposición en la Revista de Occidente en 1928. Al estallar la Guerra Civil participaba en las Misiones Pedagógicas en Galicia: se ocultó durante meses en Vigo y denunció la barbarie franquista en la prensa. Se exilió en Argentina y regresó a España en 1965, convertida en un mito de la modernidad.",
    obras: ["Serie Verbenas (1927-1928)", "Cloacas y campanarios", "La sorpresa del trigo (1936)", "Retrato de Concha Méndez", "Naturalezas vivas"],
    cita: "«Nos quitamos el sombrero para provocar, para epatar al público. Nos llovieron insultos y alguna piedra.»",
    citaFuente: "Maruja Mallo sobre el episodio de la Puerta del Sol, Madrid",
    bioParrafos: [
      "Nacida en Vivero (Lugo), su familia se trasladó a Madrid en 1922, donde estudió Bellas Artes en la Real Academia de San Fernando (1922–1926) junto a su hermano Cristino, compartiendo aulas con Salvador Dalí. Con la complicidad de sus hermanos y aprovechando la débil salud de su madre, Maruja pudo salir de noche y vivir con libertad su juventud, deambulando por el Madrid nocturno junto a Dalí, Lorca y Luis Buñuel, que —según ella misma recordaba— nunca la trató de igual a igual. Entre 1928 y 1936 desarrolló sus series de <em>Estampas</em> —populares, deportivas, de máquinas y maniquíes, cinemáticas—, una declaración estética que enlazaba la modernidad de su época con la tradición popular española.",
      "En esos años trabó una estrecha amistad con la filósofa María Zambrano, que la invitaba los domingos a merendar en su casa y que ejerció una notable influencia en su conciencia social y política; fue también amiga del poeta chileno Pablo Neruda, cónsul en Madrid, con quien recorría los barrios populares de la capital en busca de esparto, esteras y materiales que después aparecerían en sus cuadros. Colaboró con la <em>Revista de Occidente</em> y La Gaceta Literaria, y formó parte de la Escuela de Vallecas junto a Alberto Sánchez y Benjamín Palencia. Fue, junto a Margarita Manso, protagonista del episodio del sombrero en la Puerta del Sol que dio nombre al grupo. Exiliada en Argentina desde 1937, no regresó a vivir a España hasta comienzos de los años sesenta. Con el paso de las décadas se convirtió en la más reconocida de Las Sinsombrero, con una amplia retrospectiva ya en democracia en la Real Academia de Bellas Artes de San Fernando, la institución donde se había formado."
    ],
    datos: {
      "Formación": "Real Academia de San Fernando (1922–1926)",
      "Círculo": "Dalí, Lorca, Buñuel, Alberti · amistad con María Zambrano y Pablo Neruda · Escuela de Vallecas",
      "Obras destacadas": "Series Estampas (1928–1936)",
      "Episodio": "Protagonista, con Margarita Manso, del gesto del sombrero en la Puerta del Sol",
      "Exilio": "Argentina (1937 – comienzos de los años 60)"
    },
    fuentes: [
      { label: "Leer.es, proyecto Las Sinsombrero: «Maruja Mallo»", href: "https://leer.es/proyectos/las-sinsombrero/vida-y-obra/maruja-mallo/" },
      { label: "National Geographic Historia: «la gran pintora surrealista»", href: "https://historia.nationalgeographic.com.es/a/maruja-mallo-gran-pintora-surrealista-generacion-27_18933" },
      { label: "Tània Balló, <em>Las Sinsombrero</em> (2016), capítulo dedicado a Maruja Mallo" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Maruja_Mallo"
  },
  {
    id: "maria-zambrano",
    nombre: "María Zambrano",
    nombreCompleto: "María Zambrano Alarcón",
    nacimiento: "1904",
    fallecimiento: "1991",
    lugar: "Vélez-Málaga, Málaga",
    disciplinas: ["Filosofía", "Ensayo"],
    iniciales: "MZ",
    color: "#3a7ca5",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Mar%C3%ADa-Zambrano-1-e1602071174321.png?width=600",
    bio: "Filósofa discípula de Ortega, creadora de la 'razón poética'.",
    bioLarga: "Nacida en Vélez-Málaga, María Zambrano fue la filósofa más influyente de la España contemporánea y la mejor discípula de José Ortega y Gasset, del que partió para desarrollar un pensamiento propio: la 'razón poética', un puente entre filosofía y poesía. Activista de la FUE (Federación Universitaria Escolar), vivió un exilio de cuarenta y cinco años por México, Cuba, Puerto Rico, Roma y Ginebra, siempre acompañada de su hermana Araceli, que murió en 1972. Regresó a España el 20 de noviembre de 1984, a los ochenta años. Fue la primera mujer en recibir el Premio Cervantes (1988), tras el Premio Príncipe de Asturias de Comunicación y Humanidades (1981). Su obra convirtió el destierro en materia filosófica. Murió en Madrid en 1991.",
    obras: ["Filosofía y poesía (1939)", "Delirio y destino", "El hombre y lo divino", "Claros del bosque (1977)"],
    cita: "«Yo quería ser un caballero y no quería dejar de ser mujer.»",
    bioParrafos: [
      "Nacida en Vélez-Málaga, estudió Filosofía en la Universidad Central de Madrid como discípula de Ortega y Gasset. En 1917, a los trece años, conoció a quien sería el gran amor de su vida, su primo Miguel Pizarro, siete años mayor que ella y miembro en Granada del Rinconcillo, la tertulia intelectual de la que también formó parte un joven Federico García Lorca. La lectura de <em>Soledades, galerías y otros poemas</em> de Antonio Machado fue una revelación que abrió, en sus propias palabras, «una brecha» en su alma: de ahí nacería una de las ideas centrales de su pensamiento, la «razón poética», formulada por primera vez de forma explícita en una nota crítica publicada en la revista <em>Hora de España</em> en diciembre de 1937.",
      "Como estudiante, participó activamente en la Federación Universitaria Escolar (FUE) contra la dictadura de Primo de Rivera, hasta el punto de sufrir un registro policial en su domicilio familiar. Se implicó también en proyectos de extensión cultural como la Universidad Popular de Segovia, impulsada por Antonio Machado, precursora de las Misiones Pedagógicas. Republicana convencida, inició en 1939 un exilio de 45 años que la llevó por México, Cuba, Puerto Rico, Roma y Ginebra, marcado por la precariedad económica y la enfermedad de su hermana Araceli, con quien compartió destino y que murió en 1972. Zambrano regresó a España el 20 de noviembre de 1984. A lo largo de su vida publicó más de una decena de libros y cientos de artículos y ensayos sobre arte, literatura y filosofía; en 1981 recibió el Premio Príncipe de Asturias de Comunicación y Humanidades y en 1988 se convirtió en la primera mujer en recibir el Premio Cervantes. Murió en Madrid en 1991."
    ],
    datos: {
      "Formación": "Filosofía, Universidad Central de Madrid — discípula de Ortega y Gasset",
      "Concepto clave": "La «razón poética», formulada explícitamente en 1937",
      "Activismo": "Federación Universitaria Escolar (FUE) · Universidad Popular de Segovia / Misiones Pedagógicas",
      "Exilio": "45 años — México, Cuba, Puerto Rico, Roma y Ginebra (regreso a España en 1984)",
      "Reconocimientos": "Premio Príncipe de Asturias (1981) · primera mujer en recibir el Premio Cervantes (1988)"
    },
    fuentes: [
      { label: "Tània Balló, <em>Las Sinsombrero</em> (2016), capítulo dedicado a María Zambrano" },
      { label: "Datos biográficos de amplia difusión pública (exilio, Premio Cervantes 1988)" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Mar%C3%ADa_Zambrano"
  },
  {
    id: "rosa-chacel",
    nombre: "Rosa Chacel",
    nombreCompleto: "Rosa Clotilde Chacel Arimón",
    nacimiento: "1898",
    fallecimiento: "1994",
    lugar: "Valladolid",
    disciplinas: ["Narrativa", "Poesía"],
    iniciales: "RC",
    color: "#7b4b94",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosa_Chacel_en_su_juventud_%28cropped%29.jpg?width=600",
    bio: "Novelista rigurosa y racionalista, voz esencial de la narrativa del 27.",
    bioLarga: "Rosa Chacel estudió escultura en la Escuela de Bellas Artes de San Fernando antes de dedicarse por completo a la literatura, de palabra precisa y personajes complejos. Se casó con el pintor Timoteo Pérez Rubio y tuvo amistades esenciales con Concha de Albornoz y, sobre todo, con María Zambrano, a quien admiraba. Escribió 'Teresa' entre 1934 y 1936, cuando la guerra interrumpió su carrera y la empujó al exilio en Nueva York y Brasil, desde donde reflexionaba sobre la injusticia del olvido. Regresó a España en 1970 y culminó su trilogía con 'Barrio de Maravillas' (1976), 'Acrópolis' (1984) y 'Ciencias Naturales' (1988). Recibió el Premio Nacional de las Letras Españolas en 1987, a los ochenta y nueve años, sin alcanzar nunca el reconocimiento que merecía. Mantuvo una intensa correspondencia con la escritora Ana María Moix.",
    obras: ["Estación. Ida y vuelta (1930)", "Teresa (1941)", "Memorias de Leticia Valle (1945)", "La sinrazón", "Barrio de Maravillas (1976)", "Acrópolis (1984)", "Ciencias Naturales (1988)"],
    cita: "«Empiezo por confesar mi orgullo más pueril, el de haber nacido en el 98.»",
    bioParrafos: [
      "Nacida en Valladolid, se formó primero en artes plásticas: pasó por la Escuela de Artes y Oficios en 1910 y, entre 1915 y 1918, estudió escultura en la Real Academia de San Fernando, donde recibió clases de estética de Ramón del Valle-Inclán y de dibujo de Julio Romero de Torres. Fue en la Residencia de Estudiantes y en el entorno de la <em>Revista de Occidente</em> de Ortega y Gasset donde encontró su verdadera vocación literaria.",
      "En 1921 se casó con el pintor Timoteo Pérez Rubio, con quien tuvo un hijo, Carlos, nacido en 1930, el mismo año en que la editorial Ulises —dirigida por el hermano de Ramón Gómez de la Serna— publicó su primera novela, <em>Estación. Ida y vuelta</em>. Vivía entonces en la plaza del Progreso de Madrid, vecina de su amiga Concha Albornoz y de Ramón del Valle-Inclán, con quien compartía tardes de tertulia. En 1933, coincidiendo con la muerte de su madre y una profunda crisis matrimonial, se marchó sola a Berlín, donde entabló una amistad muy estrecha —casi de hermana mayor— con el matrimonio recién formado por Rafael Alberti y María Teresa León.",
      "Desarrolló un estilo introspectivo e intelectualmente exigente que la mantuvo alejada del gran público en vida. Exiliada en Buenos Aires y Río de Janeiro tras la Guerra Civil, no regresó a España hasta 1974. Fue distinguida con el Premio Nacional de las Letras Españolas en 1987 y la Medalla de Oro al Mérito en las Bellas Artes en 1993, aunque la Real Academia Española nunca la admitió como miembro."
    ],
    datos: {
      "Formación": "Escuela de Artes y Oficios (1910); Real Academia de San Fernando, escultura (1915–1918)",
      "Círculo": "Residencia de Estudiantes · Revista de Occidente (Ortega y Gasset) · amistad íntima con María Teresa León (Berlín, 1933)",
      "Obras destacadas": "Estación. Ida y vuelta (1930) · Memorias de Leticia Valle",
      "Exilio": "Buenos Aires y Río de Janeiro (1937–1974)",
      "Reconocimientos": "Premio Nacional de las Letras Españolas (1987) · Medalla de Oro al Mérito en las Bellas Artes (1993)"
    },
    fuentes: [
      { label: "RAH, DB-e: «Rosa Chacel Arimón»", href: "https://dbe.rah.es/biografias/12026/rosa-chacel-arimon" },
      { label: "BNE: ficha de autora", href: "https://www.bne.es/es/autores/chacel-rosa" },
      { label: "Tània Balló, <em>Las Sinsombrero</em> (2016), capítulo dedicado a Rosa Chacel" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Rosa_Chacel"
  },
  {
    id: "concha-mendez",
    nombre: "Concha Méndez",
    nombreCompleto: "Concepción Méndez Cuesta",
    nacimiento: "1898",
    fallecimiento: "1986",
    lugar: "Madrid",
    disciplinas: ["Poesía", "Teatro", "Edición"],
    iniciales: "CM",
    color: "#c1272d",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Concha_M%C3%A9ndez_en_los_a%C3%B1os_20.jpg?width=600",
    bio: "Poeta, deportista y editora; espíritu libre y aventurero.",
    bioLarga: "La mayor de once hermanos, Concha Méndez fue campeona de natación, poeta, guionista, dramaturga, editora e impresora, un espíritu inconformista que rompió con las convenciones de su clase. Mantuvo una relación con Luis Buñuel y viajó sola a Inglaterra y a Buenos Aires (1929-1931), donde vivió con independencia de su trabajo. El 5 de junio de 1932 se casó en la iglesia de Chamberí con el poeta Manuel Altolaguirre —de verde y con un ramillete de perejil, con Lorca, Juan Ramón Jiménez y Jorge Guillén entre los testigos—; con él fundó imprentas y revistas (Héroe, y más tarde La Verónica en La Habana). Tras perder a su primer hijo y pasar por Londres, se exilió en La Habana, donde ayudó activamente a los republicanos refugiados. Murió en Ciudad de México en 1986, dejando diecisiete horas de memorias grabadas que recogió su nieta Paloma Ulacia.",
    obras: ["Inquietudes (1926)", "Surtidor (1928)", "Canciones de mar y tierra", "Vida a vida", "Niño y sombras"],
    cita: "«Con las piedras que me tiraron por no llevar sombrero me haré un monumento.»",
    bioParrafos: [
      "Nacida en Madrid, mayor de diez hermanos de una familia acomodada, se acercó a la vida literaria y artística de la capital a través de su temprana relación con Luis Buñuel y su amistad con Maruja Mallo y Gregorio Prieto. Animada por Federico García Lorca y Rafael Alberti, empezó a escribir poesía en 1925 y publicó sus primeros libros, <em>Inquietudes</em> (1926) y <em>Surtidor</em> (1928); también escribió el guion de <em>Historia de un taxi</em> (1927), un cortometraje mudo rodado en Sevilla.",
      "Deportista además de poeta —fue campeona de natación—, su independencia escandalizó a sus padres: al enterarse de uno de sus atrevimientos, llegaron a rajar a navajazos un retrato suyo pintado por Maruja Mallo. En 1929, de ideas muy modernas para su época, rompió con su familia para vivir de forma independiente: pasó varios meses en Londres y viajó después sola a Buenos Aires, donde en 1930 publicó su tercer poemario, <em>Canciones de mar y tierra</em>, con un poema dedicado a su amiga Maruja Mallo. En 1932 se casó con el poeta e impresor Manuel Altolaguirre, con quien fundó una imprenta y la revista literaria <em>Héroe</em>, en la que colaboraron Pedro Salinas, Rosa Chacel y el propio Lorca. Se exilió en Cuba, Estados Unidos y finalmente México, donde murió.",
      "En 1981, ya octogenaria, grabó casi diecisiete horas de recuerdos hablados que se conservan en la fonoteca de México y que su nieta, Paloma Ulacia, publicó parcialmente en el libro <em>Concha Méndez. Memorias habladas, memorias armadas</em>."
    ],
    datos: {
      "Formación": "Autodidacta; círculo literario madrileño de los años veinte",
      "Círculo": "Luis Buñuel · Maruja Mallo · Lorca y Alberti como impulsores de su poesía",
      "Otras facetas": "Campeona de natación",
      "Obras destacadas": "Inquietudes (1926) · Surtidor (1928) · Canciones de mar y tierra (1930) · guion de Historia de un taxi (1927)",
      "Editorial": "Imprenta y revista Héroe, fundadas con Manuel Altolaguirre (1932)",
      "Exilio": "Cuba, Estados Unidos y México"
    },
    fuentes: [
      { label: "RAH, DB-e: «Concepción Méndez Cuesta»", href: "https://dbe.rah.es/biografias/17623/concepcion-mendez-cuesta" },
      { label: "Min. de Cultura, CIDA: guía de lectura", href: "https://www.cultura.gob.es/cultura/areas/archivos/mc/centros/cida/4-difusion-cooperacion/4-2-guias-de-lectura/escritoras/mendez-concha.html" },
      { label: "Tània Balló, <em>Las Sinsombrero</em> (2016), capítulo dedicado a Concha Méndez" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Concha_M%C3%A9ndez"
  },
  {
    id: "ernestina-champourcin",
    nombre: "Ernestina de Champourcín",
    nombreCompleto: "Ernestina Michels de Champourcín y Morán de Loredo",
    nacimiento: "1905",
    fallecimiento: "1999",
    lugar: "Vitoria, Álava",
    disciplinas: ["Poesía"],
    iniciales: "EC",
    color: "#2a9d8f",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/E._Champourcin_y_E.Checa.jpg?width=600",
    bio: "Poeta lírica, una de las dos mujeres en la antología de Gerardo Diego.",
    bioLarga: "Ernestina de Champourcín fue una de las voces líricas más singulares del 27 y, junto a Josefina de la Torre, una de las dos únicas mujeres incluidas en la influyente antología de Gerardo Diego de 1934. Conoció a Juan Ramón Jiménez en La Granja de San Ildefonso tras enviarle su primer libro, 'En silencio' (1926), y trabó con él y con su esposa Zenobia Camprubí una amistad profunda; con Carmen Conde mantuvo un extenso e íntimo epistolario. En 1936 se casó con el poeta Juan José Domenchina, secretario de Azaña, rechazando el matrimonio 'ortodoxo y burgués'. Se exilió en México, donde entre 1977 y 1991 escribió unas memorias que mezclan el dietario íntimo con la reflexión sobre su generación. Al final de su vida ingresó en el Opus Dei y su poesía tomó un giro místico, con la belleza como expresión de lo divino.",
    obras: ["En silencio (1926)", "Ahora (1928)", "La voz en el viento (1931)", "Cántico inútil (1936)", "La casa de enfrente (1936)", "Presencia a oscuras"],
    cita: "«¿Por qué no podremos ser nosotras, sencillamente, sin más?»",
    bioParrafos: [
      "Nacida en Vitoria en el seno de una familia católica y tradicional, su padre le impidió estudiar en la universidad pese a su educación culta y políglota. Desde 1923 empezó a publicar en las revistas literarias de la época y, cuando María de Maeztu inauguró el Lyceum Club Femenino, se implicó activamente en su vida literaria.",
      "Discípula de Juan Ramón Jiménez, durante la Guerra Civil se casó con el también poeta Juan José Domenchina; juntos recorrieron Valencia, Barcelona y Francia antes de lograr exiliarse en México en 1939. Allí, mientras su marido se sumía en una profunda depresión y nunca llegó a adaptarse al destierro, fue Ernestina quien sostuvo el hogar: se hizo traductora profesional para el Fondo de Cultura Económica y para congresos internacionales, y vivió en México hasta 1972 colaborando además en la revista <em>Rueca</em>.",
      "En un viaje de trabajo a Washington en 1949 descubrió la autobiografía espiritual <em>The Seven Storey Mountain</em>, del monje trapense Thomas Merton, una lectura que la ayudó a resolver una honda crisis íntima y que impulsó su primer poemario del exilio, <em>Presencias a oscuras</em> (1952), el mismo año en que solicitó su ingreso en el Opus Dei. Su poesía evolucionó así desde el intimismo modernista de sus primeros libros hacia una honda dimensión mística. Enviudó en 1959 y fue una de las últimas supervivientes del grupo, viviendo su recuperación pública ya en democracia."
    ],
    datos: {
      "Círculo": "Lyceum Club Femenino (María de Maeztu) · discípula de Juan Ramón Jiménez",
      "Matrimonio": "Juan José Domenchina, poeta",
      "Exilio": "México (1939–1972) — traductora del Fondo de Cultura Económica · revista Rueca",
      "Estilo": "Del intimismo modernista a la poesía mística · ingreso en el Opus Dei (1952)"
    },
    fuentes: [
      { label: "RAH, DB-e: «Ernestina de Champourcin»", href: "https://dbe.rah.es/biografias/12067/ernestina-de-michels-de-champourcin-y-moran-de-loredo" },
      { label: "Tània Balló, <em>Las Sinsombrero</em> (2016), capítulo dedicado a Ernestina de Champourcín" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Ernestina_de_Champourc%C3%ADn"
  },
  {
    id: "maria-teresa-leon",
    nombre: "María Teresa León",
    nombreCompleto: "María Teresa León Goyri",
    nacimiento: "1903",
    fallecimiento: "1988",
    lugar: "Logroño",
    disciplinas: ["Narrativa", "Teatro"],
    iniciales: "ML",
    color: "#ee6c4d",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Maria-teresa-1930b.jpg?width=600",
    bio: "Escritora y activista cultural, motor de la cultura republicana.",
    bioLarga: "Sobrina de la filóloga María Goyri, María Teresa León fue escritora, dramaturga, guionista y activista, cuyo legado quedó sistemáticamente eclipsado por la sombra de su marido, Rafael Alberti. Fue secretaria de la Alianza de Intelectuales Antifascistas y desempeñó un papel decisivo en el salvamento de las obras del Museo del Prado durante la Guerra Civil. Dirigió la política teatral republicana como fundadora de la Nueva Escena y alma del Consejo Central de Teatro, además de las Guerrillas del Teatro. En 1937 viajó con Alberti a la Unión Soviética, donde Stalin los recibió en una audiencia sobre la protección de los niños españoles. Su exilio la llevó por Argentina y Roma; sus memorias, 'Memoria de la melancolía', que cierran con un esperanzado 'continuará', son un testimonio esencial del destierro. Murió afectada por el alzhéimer.",
    obras: ["Memoria de la melancolía (1970)", "Juego limpio", "Rosa-fría, patinadora de la luna", "Contra viento y marea"],
    cita: "«Estoy cansada de no saber dónde morirme. Esa es la mayor tristeza del emigrado.»",
    bioParrafos: [
      "Nacida en Logroño, publicó sus primeros artículos desde 1924 bajo el seudónimo de Isabel Inghirami en el Diario de Burgos, un género que siguió cultivando de forma intermitente hasta los años sesenta. Su relación con Rafael Alberti, que dejó por ella a su entonces pareja, la pintora Maruja Mallo, y que además estaba casada en ese momento, causó un sonado escándalo en el Madrid literario de 1931: el propio Pedro Salinas se hizo eco de él, con no poco desdén, en una carta a Jorge Guillén. Frente a las habladurías, María Teresa reivindicó su decisión con firmeza, asumiendo por su cuenta y riesgo el nuevo rumbo de su vida. Junto a Alberti dirigió la revista <em>Octubre</em> y desarrolló un fuerte compromiso social y político durante la Segunda República.",
      "Durante la Guerra Civil participó activamente en la protección del patrimonio artístico español, colaborando en el traslado de las obras del Museo del Prado a Valencia y Ginebra para salvarlas de los bombardeos. Vivió el exilio en Argentina e Italia, donde escribió novelas como <em>Contra viento y marea</em> (1941) y <em>Juego limpio</em> (1959). A su regreso a España en 1977, ya afectada por una enfermedad neurodegenerativa, apenas pudo ser consciente de su propio reconocimiento. Su autobiografía, <em>Memoria de la melancolía</em> (1970), escrita durante el exilio, es su obra más leída."
    ],
    datos: {
      "Círculo": "Pareja de Rafael Alberti (desde 1931, tras dejar este a Maruja Mallo) · revista Octubre",
      "Guerra Civil": "Protección y traslado de las obras del Museo del Prado (Valencia, Ginebra)",
      "Obras destacadas": "Contra viento y marea (1941) · Juego limpio (1959) · Memoria de la melancolía (1970)",
      "Exilio": "Argentina e Italia (regreso a España en 1977)"
    },
    fuentes: [
      { label: "RAH, DB-e: «María Teresa León Goyri»", href: "https://dbe.rah.es/biografias/11966/maria-teresa-leon-goyri" },
      { label: "Leer.es: «María Teresa León»", href: "https://leer.es/proyectos/las-sinsombrero/vida-y-obra/maria-teresa-leon/" },
      { label: "Tània Balló, <em>Las Sinsombrero</em> (2016), capítulo dedicado a María Teresa León" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Mar%C3%ADa_Teresa_Le%C3%B3n"
  },
  {
    id: "josefina-de-la-torre",
    nombre: "Josefina de la Torre",
    nombreCompleto: "Josefina de la Torre Millares",
    nacimiento: "1907",
    fallecimiento: "2002",
    lugar: "Las Palmas de Gran Canaria",
    disciplinas: ["Poesía", "Música", "Cine"],
    iniciales: "JT",
    color: "#457b9d",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Josefina_de_la_Torre_Millares.jpg?width=600",
    bio: "Poeta, soprano y actriz; talento multiple de las islas.",
    bioLarga: "Nacida en Las Palmas de Gran Canaria en el seno de una familia culta de músicos y artistas, Josefina de la Torre fue poeta, novelista, soprano, compositora, actriz de teatro y cine, actriz de doblaje, columnista y guionista: la mujer de vanguardia más polifacética. Escribía poemas desde los siete años —un homenaje a Benito Pérez Galdós— y publicaba en revistas insulares desde 1914. Hermana del cineasta Claudio de la Torre, fue —junto a Ernestina de Champourcín— una de las dos únicas mujeres incluidas en la antología de Gerardo Diego de 1934, y dedicó un soneto a Rafael Alberti. También escribió novelas de misterio bajo el seudónimo Laura de Cominges. A diferencia de sus coetáneas, no se exilió durante la guerra, lo que paradójicamente favoreció su olvido durante el franquismo. Murió en 2002.",
    obras: ["Versos y estampas (1927)", "Poemas de la isla (1930)", "Marzo incompleto", "Memorias de una estrella"],
    cita: "«¡Amigos que de mí hicisteis nombre!»",
    bioParrafos: [
      "Nacida en Las Palmas de Gran Canaria, benjamina de seis hermanos de una familia de artistas de la burguesía culta canaria, se formó musicalmente desde niña —tocaba piano, guitarra y violín— y ya en 1914 componía sus primeros versos, dedicados a Benito Pérez Galdós. En 1924 viajó por primera vez a Madrid gracias a su hermano Claudio de la Torre, Premio Nacional de Literatura ese mismo año, y a través de él conoció a Buñuel, Dalí, Alberti, Lorca y Cernuda.",
      "En 1927 publicó su primer libro, <em>Versos y estampas</em>, como octavo suplemento de la revista malagueña <em>Litoral</em>, con prólogo de Pedro Salinas, quien acuñó para ella el término «muchacha-isla». Alternó la literatura con una carrera como actriz de cine y teatro y cantante de zarzuela, actividad que mantuvo hasta bien entrada la democracia.",
      "En 1980 murió su marido, Ramón Corroto, y tres años después hizo su última aparición televisiva en la serie <em>Anillos de oro</em>. Sumida en la tristeza, decidió un retiro voluntario de la vida pública que duraría veinte años, durante los cuales siguió escribiendo poesía en la soledad de su piso de Madrid sin intención de publicarla. Entre esos versos inéditos se encuentra «Mis amigos de entonces», una de las odas más desgarradoras dedicadas a los compañeros de su generación que ya habían muerto. Una antología de su obra, a cargo de Lázaro Santana, se publicó por fin en 1988."
    ],
    datos: {
      "Formación": "Musical (piano, violín, guitarra) desde la infancia",
      "Círculo": "Introducida por su hermano Claudio de la Torre en la vanguardia madrileña (1924)",
      "Obras destacadas": "Versos y estampas (1927), prólogo de Pedro Salinas",
      "Otras facetas": "Actriz de cine y teatro · cantante de zarzuela",
      "Últimos años": "Retiro voluntario de veinte años tras enviudar (1980) · antología de Lázaro Santana (1988)"
    },
    fuentes: [
      { label: "RAH, DB-e: «Josefina de la Torre Millares»", href: "https://dbe.rah.es/biografias/17788/josefina-de-la-torre-millares" },
      { label: "Academia Canaria de la Lengua: semblanza", href: "https://portal.academiacanarialengua.org/archipielago-letras/josefina-de-la-torre/" },
      { label: "Tània Balló, <em>Las Sinsombrero</em> (2016), capítulo dedicado a Josefina de la Torre" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Josefina_de_la_Torre"
  },
  {
    id: "margarita-manso",
    nombre: "Margarita Manso",
    nombreCompleto: "Margarita Manso Robledo",
    nacimiento: "1908",
    fallecimiento: "1960",
    lugar: "Valladolid",
    disciplinas: ["Pintura"],
    iniciales: "MM",
    color: "#8d5524",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Margarita_Manso_3V.jpg?width=600",
    bio: "Pintora protagonista del gesto que dio nombre a las Sinsombrero.",
    bioLarga: "Estudiante de la Escuela de Bellas Artes de San Fernando, Margarita Manso frecuentaba la Residencia de Estudiantes y sus círculos artísticos, donde conoció a Lorca, Dalí y Maruja Mallo. Con Lorca y Maruja Mallo protagonizó el gesto de quitarse el sombrero en plena Puerta del Sol —el acto simbólico que da nombre al grupo—. Muy próxima al poeta, que le dedicó 'Muerto de amor' del 'Romancero gitano', su figura permaneció durante décadas como un nombre sin rostro hasta que el hispanista Ian Gibson reconstruyó su historia en 1986 a partir de las confidencias de Dalí. Se casó con el pintor falangista Alfonso Ponce de León, fusilado por milicianos republicanos en septiembre de 1936, y en 1940 con Enrique Conde Gargollo. Murió de cáncer en 1960, en gran parte olvidada.",
    obras: ["Obra pictórica dispersa y en gran parte perdida"],
    cita: "Federico García Lorca le dedicó su poema «Muerto de amor».",
    bioParrafos: [
      "Nacida en Valladolid, hija de una modista y de un gestor de la fundición Gabilondo que murió cuando ella tenía apenas unos años, ingresó en 1923, con quince años, en la Real Academia de San Fernando, donde fue alumna de Julio Romero de Torres y entabló una estrecha amistad con Maruja Mallo, que la introdujo en el círculo íntimo de Salvador Dalí y Federico García Lorca.",
      "Protagonizó junto a Mallo el episodio del sombrero en la Puerta del Sol que da nombre al grupo. Con el pintor Alfonso Ponce de León —colaborador de Lorca como escenógrafo de La Barraca— formó pareja durante seis años sin casarse, algo entonces escandaloso: convivieron abiertamente, viajaron juntos por Europa y en 1930 residieron una temporada en París, donde conocieron a Picasso y entraron en contacto con la Escuela de París. Se casaron en 1933, el mismo año en que Alfonso se afilió a Falange Española; su giro ideológico, cada vez más alejado de los valores republicanos, fue reduciendo el círculo social y la presencia pública de Margarita.",
      "Ponce de León fue fusilado al comenzar la Guerra Civil. Tras la contienda, Margarita se alejó por completo de los círculos artísticos que había frecuentado en su juventud; apenas se conservan obras suyas, y su figura sigue siendo una de las más difíciles de documentar de todo el grupo."
    ],
    datos: {
      "Formación": "Real Academia de San Fernando (desde 1923), alumna de Julio Romero de Torres",
      "Círculo": "Maruja Mallo · Dalí · Lorca",
      "Pareja": "Alfonso Ponce de León, pintor — pareja desde 1929, casados en 1933, fusilado en 1936",
      "Legado": "Muy pocas obras conservadas; figura difícil de documentar"
    },
    fuentes: [
      { label: "Leer.es, proyecto Las Sinsombrero: «Margarita Manso Robledo»", href: "https://leer.es/proyectos/las-sinsombrero/vida-y-obra/margarita-manso-robledo/" },
      { label: "VEIN Magazine: «Poemas, pinturas y rebeldía»", href: "https://vein.es/poemas-pinturas-y-rebeldia-margarita-manso/" },
      { label: "Tània Balló, <em>Las Sinsombrero</em> (2016), capítulo dedicado a Margarita Manso" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Margarita_Manso"
  },
  {
    id: "marga-gil-roesset",
    nombre: "Marga Gil Roësset",
    nombreCompleto: "Margarita Gil Roësset",
    nacimiento: "1908",
    fallecimiento: "1932",
    lugar: "Las Rozas, Madrid",
    disciplinas: ["Escultura", "Ilustración"],
    iniciales: "MG",
    color: "#6a4c93",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Marga_Gil_Ro%C3%ABsset.jpg?width=600",
    bio: "Escultora e ilustradora precoz, genio truncado a los 24 años.",
    bioLarga: "Marga Gil Roësset fue una escultora e ilustradora niña prodigio, autodidacta y de talento deslumbrante, que trabajaba materiales duros como la madera, el barro y el granito —una rareza absoluta entre las artistas de su época— y dibujaba figuras agónicas de honda sensibilidad. Juan Ramón Jiménez la recordaría, en 'Españoles de tres mundos', por sus 'brazos musculosos, morenos, heridos siempre de su oficio duro'. Ilustró 'El niño de oro', cuento de su hermana Consuelo, y 'Rose des Bois', publicado en París en 1923, y expuso su 'Adán y Eva' en la Exposición Nacional de 1930. Se enamoró intensamente de Juan Ramón, ya casado con Zenobia Camprubí; incapaz de sostener ese amor imposible, destruyó casi toda su obra y se quitó la vida a los veinticuatro años en 1932, dejando solo el busto de Zenobia y un diario estremecedor.",
    obras: ["El niño de oro (ilustraciones, 1920)", "Rose des Bois (ilustraciones, 1923)", "Adán y Eva (1930)", "La niña que ríe", "La mujer del ahorcado", "Busto de Zenobia Camprubí (1932)", "Diario (publicado en 2015)"],
    cita: "«Trato de esculpir más las ideas que las personas: llevan el esfuerzo de querer manifestar su interior.»",
    citaFuente: "Marga Gil Röesset",
    bioParrafos: [
      "Marga Gil Roësset pertenecía a una estirpe familiar de mujeres artistas —su tía María Roësset, «Maro» (1882-1921), su prima Marisa Röesset y su propia hermana Consuelo Gil Röesset (1905-1995) fueron también pintoras e ilustradoras—, hoy estudiada en conjunto por la investigadora Núria Capdevila-Argüelles. Hija del general de ingenieros Julián Gil y de Margot Roësset, recibió una educación exquisita y vigilada por su madre. Ya en 1920, con solo doce años, ilustró <em>El niño de oro</em>, el cuento infantil escrito por su hermana Consuelo: mientras el relato era costumbrista, las imágenes de Marga mostraban un mundo esotérico y orientalista, de figuras lánguidas y casi fantasmales, que anticipaba ya la madurez de su trazo.",
      "Aprendió a dibujar con el pintor José María López Mezquita y, atraída por la escultura, trabajó materiales duros como el barro, la escayola y el granito. Su madre pidió consejo al escultor Victorio Macho, que declinó darle clases al ver en ella un genio que debía seguir su propio camino; autodidacta, Marga se perfiló muy pronto como una de las promesas más firmes de la vanguardia, y en 1930 expuso su conjunto <em>Adán y Eva</em> en la Exposición Nacional de Bellas Artes. A través de Consuelo conoció al matrimonio de Juan Ramón Jiménez y Zenobia Camprubí, y se ofreció a esculpir sus bustos.",
      "De esa colaboración nació un amor obsesivo y no correspondido hacia el poeta, veintisiete años mayor que ella. El 28 de julio de 1932, con apenas 24 años, dejó a Juan Ramón un diario íntimo pidiéndole que no lo leyera aún, destruyó a martillazos buena parte de su obra y se quitó la vida de un disparo en la casa familiar de Las Rozas, tras escribir cartas de despedida a su madre, su hermana y Zenobia. El busto de Zenobia es hoy una de las pocas piezas suyas que se conservan; su diario, dirigido al poeta, permaneció inédito hasta 2015."
    ],
    datos: {
      "Familia": "Estirpe de artistas Röesset — su hermana Consuelo, su tía Maro y su prima Marisa fueron también pintoras",
      "Formación": "Dibujo con José María López Mezquita; escultura autodidacta (Victorio Macho declinó darle clases)",
      "Obra destacada": "Adán y Eva (Exposición Nacional de Bellas Artes, 1930)",
      "Episodio": "Amor no correspondido hacia Juan Ramón Jiménez (1932)",
      "Diario": "Dirigido a Juan Ramón; publicado en 2015 (ed. Fundación José Manuel Lara)"
    },
    galeria: [
      { src: "assets/marga/adan-eva.jpg", titulo: "Adán y Eva (1930)" },
      { src: "assets/marga/busto-zenobia.jpg", titulo: "Busto de Zenobia Camprubí (1932)" },
      { src: "assets/marga/nina-que-rie.jpg", titulo: "La niña que ríe" },
      { src: "assets/marga/mujer-del-ahorcado.jpg", titulo: "La mujer del ahorcado" },
      { src: "assets/marga/torso-de-hombre.jpg", titulo: "Torso de hombre" },
      { src: "assets/marga/rose-des-bois.jpg", titulo: "Ilustración de Rose des Bois (1923)" },
      { src: "assets/marga/nino-de-oro.jpg", titulo: "Ilustración de El niño de oro (1920)" }
    ],
    fuentes: [
      { label: "Marga Gil Röesset — web monográfica de Trinidad Martín", href: "https://marga.tntgarabatos.es/" },
      { label: "fronterad: «El suicidio condenó al olvido a la escultora»", href: "https://www.fronterad.com/marga-gil-roesset-el-suicidio-condeno-al-olvido-a-la-escultora-que-amo-a-juan-ramon/" },
      { label: "VICE: «la escultora que pudo haber sido»", href: "https://www.vice.com/es/article/marga-gil-roesset-escultora/" },
      { label: "Tània Balló, <em>Las Sinsombrero</em> (2016), capítulo dedicado a Marga Gil Roësset" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Marga_Gil_Ro%C3%ABsset"
  },
  {
    id: "angeles-santos",
    nombre: "Ángeles Santos",
    nombreCompleto: "Ángeles Santos Torroella",
    nacimiento: "1911",
    fallecimiento: "2013",
    lugar: "Portbou, Girona",
    disciplinas: ["Pintura"],
    iniciales: "AS",
    color: "#1d7874",
    imagen: "assets/angeles/retrato.jpg",
    bio: "Pintora prodigio, autora de la visionaria 'Un mundo' con solo 18 años.",
    bioLarga: "Ángeles Santos irrumpió en la vanguardia con apenas 17 años cuando fue descubierta en Valladolid, y llegó a ser una artista de importancia capital pese a permanecer como gran desconocida. Su lienzo 'Un mundo' (1929), una visión cósmica pintada con solo 18 años, junto a 'Tertulia' (1929), se conservan hoy en el Museo Reina Sofía. Ramón Gómez de la Serna la elogió y difundió su obra. Presionada por su entorno, fue internada en un sanatorio y abandonó su estilo visionario. En 1936 se casó con el pintor Emili Grau Sala. Superviviente más longeva del grupo, vivió más de cien años.",
    obras: ["Un mundo (1929)", "Tertulia (1929)", "Autorretrato (1928)", "La marquesa de Alquibla (1928)", "Lilas y calavera (1930)", "La tía Marieta (1928)"],
    cita: "«Siempre he sido una persona muy solitaria.»",
    citaFuente: "Ángeles Santos, citada en Tània Balló, Las Sinsombrero (2016)",
    bioParrafos: [
      "Nacida en Portbou (Girona) en 1911, hija de un funcionario de aduanas y la mayor de ocho hermanos —entre ellos el crítico e historiador Rafael Santos Torroella—, se formó en el dibujo desde niña y, ya en Valladolid, con el pintor italiano Cellino Perotti. De carácter solitario, encontró en la pintura una vía de evasión: entre 1928 y 1930, con apenas diecisiete y dieciocho años, pintó a gran velocidad más de cuarenta cuadros de una madurez asombrosa.",
      "En 1929 pintó sus dos obras maestras, <em>Tertulia</em> —cuatro mujeres que fuman y leen, en la estela de la Nueva Objetividad— y, sobre todo, <em>Un mundo</em>, un lienzo colosal (290 × 310 cm) que representa un planeta cúbico rodeado de figuras femeninas, inspirado en la poesía de Juan Ramón Jiménez. Expuesta en el Ateneo de Valladolid y en el IX Salón de Otoño de Madrid, causó sensación entre la Generación del 27 —Lorca, Guillén, Juan Ramón, Ramón Gómez de la Serna—; hoy ambas obras están en el Museo Reina Sofía. En 1930 el X Salón de Otoño le dedicó una sala propia con 34 obras, un honor inédito para una pintora.",
      "En pleno éxito, agotada y presionada por un entorno conservador, su padre la internó en un sanatorio psiquiátrico de Madrid y muchos de sus cuadros fueron destruidos; Ramón Gómez de la Serna protestó públicamente en la prensa para lograr su liberación. Tras aquello abandonó su estilo visionario por una pintura más serena. En 1936 se casó con el pintor Emili Grau Sala, del que la separó la Guerra Civil —él se exilió en París y ella se refugió en Huesca, donde nació su hijo—. Redescubierta ya anciana, recibió en 2003 la Medalla de Oro al Mérito en las Bellas Artes y la Creu de Sant Jordi. Murió en Madrid en 2013, a los 101 años."
    ],
    datos: {
      "Nombre real": "Ángeles Santos Torroella",
      "Formación": "Dibujo con el pintor Cellino Perotti (Valladolid)",
      "Obras maestras": "Un mundo (1929, 290×310 cm) y Tertulia (1929) — Museo Reina Sofía",
      "Estilo": "Realismo mágico y Nueva Objetividad; después, paisaje e interiores",
      "Episodio": "Internamiento psiquiátrico (1930); Gómez de la Serna la defendió en la prensa",
      "Reconocimientos": "Medalla de Oro al Mérito en las Bellas Artes y Creu de Sant Jordi (2003)"
    },
    galeria: [
      { src: "assets/angeles/un-mundo.jpg", titulo: "Un mundo (1929, Museo Reina Sofía)" },
      { src: "assets/angeles/tertulia.jpg", titulo: "Tertulia (1929, Museo Reina Sofía)" }
    ],
    fuentes: [
      { label: "Plataforma de Arte Contemporáneo: «Ángeles Santos, la pintora silenciada»", href: "https://www.plataformadeartecontemporaneo.com/pac/angeles-santos-la-pintora-silenciada-el-mundo-interior-que-fue-censurado/" },
      { label: "Asociación Española de Pintores y Escultores: «Ángeles Santos Torroella»", href: "https://apintoresyescultores.es/angeles-santos-torroella/" },
      { label: "Museo Patio Herreriano: ficha de Ángeles Santos", href: "https://museoph.org/autor/angeles-santos" },
      { label: "Historia-Arte (HA!): «Ángeles Santos»", href: "https://historia-arte.com/artistas/angeles-santos" },
      { label: "Anna Capella, <em>Ángeles Santos entre la vida i la pintura</em> (2011)" }
    ],
    enlace: "https://es.wikipedia.org/wiki/%C3%81ngeles_Santos_Torroella"
  },
  {
    id: "delhy-tejero",
    nombre: "Delhy Tejero",
    nombreCompleto: "Adela Tejero Bedate",
    nacimiento: "1904",
    fallecimiento: "1968",
    lugar: "Toro, Zamora",
    disciplinas: ["Pintura", "Ilustración"],
    iniciales: "DT",
    color: "#d1495b",
    imagen: "assets/delhy/delhy.jpg",
    bio: "Pintora, ilustradora y muralista de imaginario onírico y místico.",
    bioLarga: "Adela Tejero Bedate, Delhy Tejero, fue pintora, ilustradora y muralista, una de las figuras más singulares de la Edad de Plata. Colaboró como ilustradora en revistas como 'Blanco y Negro', 'Crónica' y 'La Esfera'. Su obra, poblada de figuras oníricas —brujas y 'duendinas'—, mezcla vanguardia, simbolismo y un imaginario muy personal. Viajó por París, Bruselas, Florencia y Marruecos, y en la posguerra evolucionó hacia la abstracción y el muralismo.",
    obras: ["El mercado de Zamora (1934)", "Serie Las Brujas / duendinas (1930-36)", "La Venus de bolchevique (1932)", "Composición abstracta (1954, Museo Reina Sofía)", "Murales para las Universidades Laborales de Zamora y Gijón", "Cuadernines (diarios)"],
    cita: "«Sueño con pintar con los colores puros, sin ensuciarlos. El arte no debe ser una reproducción de la realidad.»",
    citaFuente: "Delhy Tejero",
    bioParrafos: [
      "Adela Tejero Bedate, rebautizada artísticamente como Delhy Tejero (Toro, Zamora, 1904 – Madrid, 1968), fue pintora, ilustradora y muralista, una de las figuras más singulares y durante décadas silenciadas de la Edad de Plata. Criada en una familia de raíces liberales, rompió con el destino doméstico esperado y se trasladó a Madrid a mediados de los años veinte; tras pasar por la Escuela de Artes y Oficios y la Academia de San Fernando, halló en la Residencia de Señoritas un ambiente de sororidad e intelectualidad que marcó su conciencia de creadora independiente. En 1925 cambió su nombre de Adela a «Delhy», inspirado en la capital de la India, y en 1929 fue nombrada profesora auxiliar de dibujo en la Academia.",
      "En los años treinta se consolidó como una de las ilustradoras más solicitadas de la prensa —<em>Blanco y Negro</em>, <em>Crónica</em>, <em>La Esfera</em>—, lo que le dio una libertad económica inusual para viajar y experimentar. Fue pionera en España en el uso de la decalcomanía y creó un imaginario onírico y esotérico, con su célebre serie de brujas y «duendinas». Sus estancias en París, Bruselas, Florencia y Marruecos la abrieron al surrealismo y a la pintura mural, un terreno entonces reservado a los hombres.",
      "La Guerra Civil truncó una carrera que apuntaba a la proyección internacional; a diferencia de otras Sinsombrero, permaneció en España —un «exilio interior»— que la sumió en el silencio historiográfico. En la posguerra su pintura se volvió introspectiva y avanzó hacia la abstracción y el informalismo, con series como <em>Ismos</em>, <em>Vasos comunicantes</em> o <em>Perlismo</em>, además de grandes murales para edificios públicos y religiosos. Hoy el Museo Reina Sofía y el Museo Patio Herreriano han reivindicado su obra como pieza clave de las vanguardias españolas."
    ],
    datos: {
      "Nombre real": "Adela Tejero Bedate",
      "Formación": "Escuela de Artes y Oficios y Real Academia de San Fernando · Residencia de Señoritas",
      "Cargo": "Profesora auxiliar de dibujo, Academia de San Fernando (1929)",
      "Etapas": "Regionalismo y art déco · surrealismo · abstracción e informalismo · muralismo",
      "Viajes": "París, Bruselas, Florencia y Marruecos",
      "Colecciones": "Museo Reina Sofía · Museo Patio Herreriano · Museo Provincial de Zamora"
    },
    galeria: [
      { src: "assets/delhy/mercado-zamora.jpg", titulo: "El mercado de Zamora (1934)" },
      { src: "assets/delhy/serie-brujas.jpg", titulo: "Serie Las Brujas (1930)" },
      { src: "assets/delhy/venus-bolchevique.jpg", titulo: "La Venus de bolchevique (1932)" },
      { src: "assets/delhy/autorretrato-1936.jpg", titulo: "Autorretrato (1936)" },
      { src: "assets/delhy/la-musica.jpg", titulo: "La Música (1952-53)" },
      { src: "assets/delhy/composicion-abstracta.jpg", titulo: "Composición abstracta (1954, Museo Reina Sofía)" }
    ],
    fuentes: [
      { label: "Web oficial de la artista — delhytejero.com", href: "https://www.delhytejero.com/" },
      { label: "Museo Patio Herreriano: «Delhy Tejero. Geometría y misterio» (2024)", href: "https://museoph.org/exposicion/delhy-tejero" },
      { label: "Artisteando Juntas: «Delhy Tejero, disidencia y misticismo»", href: "https://artisteandojuntas.org/delhy-tejero-biografia-obra-vanguardia-espanola/" },
      { label: "RAH, DB-e: «Adela Tejero Bedate»", href: "https://dbe.rah.es/biografias/71820/adela-tejero-bedate" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Delhy_Tejero"
  },
  {
    id: "victorina-duran",
    nombre: "Victorina Durán",
    nombreCompleto: "Victorina Durán Cebrián",
    nacimiento: "1899",
    fallecimiento: "1993",
    lugar: "Madrid",
    disciplinas: ["Escenografía", "Teatro", "Pintura"],
    iniciales: "VD",
    color: "#2E6459",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Victorina%20duran.jpg?width=600",
    bio: "Escenógrafa y figurinista pionera, primera catedrática de Indumentaria.",
    bioLarga: "Formada en Artes Decorativas en la Real Academia de San Fernando, Victorina Durán fue figurinista, escenógrafa, directora teatral, dramaturga y crítica de arte. En 1929 ganó por oposición la cátedra de Indumentaria del Conservatorio Nacional de Música, la primera mujer en lograr ese cargo en España. Miembro muy activa del Lyceum Club Femenino, cofundó con Elena Fortún la Agrupación Femenina Republicana. En 1937 se exilió en Buenos Aires, donde trabajó veinticinco años como directora artística y figurinista en el Teatro Colón y el Teatro Cervantes, viviendo abiertamente su homosexualidad.",
    obras: ["Escenografías y figurines para el Teatro Colón", "Escenografías para el Teatro Cervantes", "Memorias (inéditas)"],
    cita: null,
    bioParrafos: [
      "Formada en Artes Decorativas en la Real Academia de San Fernando, Victorina Durán fue figurinista, escenógrafa, directora teatral, dramaturga y crítica de arte. En 1929 ganó por oposición la cátedra de Indumentaria del Conservatorio Nacional de Música, convirtiéndose en la primera mujer en lograr ese cargo en España, que ejerció hasta la Guerra Civil. Fue miembro muy activa del Lyceum Club Femenino y, junto a Elena Fortún, cofundó la Agrupación Femenina Republicana para promover la participación política de las mujeres.",
      "En julio de 1937 consiguió una autorización legal para viajar con la compañía teatral de Margarita Xirgú a Buenos Aires, donde permaneció exiliada veinticinco años, trabajando como directora artística y figurinista en el Teatro Colón y el Teatro Cervantes. Vivió abiertamente su condición homosexual en un momento de fuerte represión social, y dejó testimonio de ello en sus memorias inéditas."
    ],
    datos: {
      "Formación": "Artes Decorativas, Real Academia de San Fernando",
      "Cargo": "Cátedra de Indumentaria, Conservatorio Nacional de Música (1929) — primera mujer en lograrlo",
      "Activismo": "Lyceum Club Femenino · cofundadora de la Agrupación Femenina Republicana",
      "Exilio": "Buenos Aires, 25 años (desde 1937) — Teatro Colón y Teatro Cervantes"
    },
    fuentes: [
      { label: "RAH, DB-e: «Victorina Durán Cebrián»", href: "https://dbe.rah.es/biografias/137098/victorina-duran-cebrian" },
      { label: "elDiario.es: «la pionera del teatro olvidada»", href: "https://www.eldiario.es/cultura/libros/victorina-duran-pionera-teatro-olvidada-generacion-27-tuvo-exiliarse-lesbiana_1_12786701.html" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Victorina_Dur%C3%A1n"
  },
  {
    id: "margarita-nelken",
    nombre: "Margarita Nelken",
    nombreCompleto: "Margarita Nelken y Mansberger",
    nacimiento: "1894",
    fallecimiento: "1968",
    lugar: "Madrid",
    disciplinas: ["Ensayo", "Política", "Crítica de arte"],
    iniciales: "MN",
    color: "#b5179e",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/1928-08-04%2C_Caras_y_Caretas%2C_Margarita_Nelken_%28cropped%29.jpg?width=600",
    bio: "Escritora, crítica de arte y política, pionera del feminismo.",
    bioLarga: "Margarita Nelken fue escritora, crítica de arte y una de las primeras diputadas de la Segunda República. Feminista comprometida, analizó la condición de la mujer española en ensayos pioneros como 'La condición social de la mujer en España'. Fue crítica de arte de prestigio y una voz política combativa. Se exilió en México tras la guerra, donde continuó su labor intelectual marcada por la tragedia personal de perder a sus dos hijos.",
    obras: ["La condición social de la mujer en España (1919)", "Las escritoras españolas", "En torno a nosotras"],
    cita: null,
    enlace: "https://es.wikipedia.org/wiki/Margarita_Nelken"
  },
  {
    id: "carmen-conde",
    nombre: "Carmen Conde",
    nombreCompleto: "Carmen Conde Abellán",
    nacimiento: "1907",
    fallecimiento: "1996",
    lugar: "Cartagena, Murcia",
    disciplinas: ["Poesía", "Narrativa"],
    iniciales: "CC",
    color: "#f4a261",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Carmen_Conde_%28cropped%29.jpg?width=600",
    bio: "Poeta prolífica, primera mujer académica de número de la RAE.",
    bioLarga: "Carmen Conde fue poeta, narradora y ensayista de obra vastísima. Con su marido, el poeta Antonio Oliver, fundó la Universidad Popular de Cartagena. Mantuvo un intenso epistolario con Ernestina de Champourcín. Tras la guerra vivió un exilio interior y una difícil recuperación. En 1978 se convirtió en la primera mujer elegida académica de número de la Real Academia Española, ocupando el sillón K, un hito histórico para las mujeres en la cultura.",
    obras: ["Brocal (1929)", "Júbilos", "Mujer sin Edén (1947)", "Poesía completa"],
    cita: "En 1978 fue la primera mujer académica de número de la Real Academia Española.",
    enlace: "https://es.wikipedia.org/wiki/Carmen_Conde"
  },
  {
    id: "elena-fortun",
    nombre: "Elena Fortún",
    nombreCompleto: "Encarnación Aragoneses Urquijo",
    nacimiento: "1885",
    fallecimiento: "1952",
    lugar: "Madrid",
    disciplinas: ["Literatura infantil"],
    iniciales: "EF",
    color: "#e07a5f",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Elena_Fort%C3%BAn-2.jpg?width=600",
    bio: "Creadora de Celia, renovadora de la literatura infantil española.",
    bioLarga: "Encarnación Aragoneses Urquijo, Elena Fortún, revolucionó la literatura infantil española con el personaje de Celia, una niña curiosa y crítica que cuestiona con lógica implacable el mundo adulto. Amiga de muchas de las Sinsombrero, se movió en los círculos intelectuales del Lyceum Club Femenino. Se exilió en Argentina tras la guerra. Su novela 'Oculto sendero', de fuerte carga autobiográfica y temática lésbica, se publicó décadas después de su muerte.",
    obras: ["Celia, lo que dice (1929)", "Celia en el colegio", "Las travesuras de Matonkiki", "Oculto sendero (póstuma)"],
    cita: null,
    enlace: "https://es.wikipedia.org/wiki/Elena_Fort%C3%BAn"
  },
  {
    id: "zenobia-camprubi",
    nombre: "Zenobia Camprubí",
    nombreCompleto: "Zenobia Camprubí Aymar",
    nacimiento: "1887",
    fallecimiento: "1956",
    lugar: "Malgrat de Mar, Barcelona",
    disciplinas: ["Traducción", "Escritura"],
    iniciales: "ZC",
    color: "#0081a7",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Zenobia_Camprub%C3%AD_Aymar.jpg?width=600",
    bio: "Escritora, traductora y emprendedora, mucho más que la esposa de Juan Ramón.",
    bioLarga: "Zenobia Camprubí fue escritora, traductora y empresaria, la primera en traducir al español la obra de Rabindranath Tagore. Esposa de Juan Ramón Jiménez, gestionó la vida práctica y profesional del poeta sin renunciar a sus propios proyectos: fundó negocios de decoración y artesanía, y se implicó en el Lyceum Club Femenino. Su diario es un testimonio lúcido y a veces amargo del exilio en Estados Unidos y Puerto Rico. Murió pocos días después de que Juan Ramón recibiera el Premio Nobel en 1956.",
    obras: ["Traducciones de Rabindranath Tagore", "Diario (3 tomos)", "Epistolario"],
    cita: null,
    enlace: "https://es.wikipedia.org/wiki/Zenobia_Camprub%C3%AD"
  },
  {
    id: "luisa-carnes",
    nombre: "Luisa Carnés",
    nombreCompleto: "Luisa Genoveva Carnés Caballero",
    nacimiento: "1905",
    fallecimiento: "1964",
    lugar: "Madrid",
    disciplinas: ["Narrativa", "Periodismo"],
    iniciales: "LC",
    color: "#bc4749",
    imagen: "assets/luisa-carnes.png",
    bio: "Escritora y periodista obrera, autora de la novela 'Tea Rooms'.",
    bioLarga: "Luisa Carnés fue una escritora y periodista de origen humilde y autodidacta, que trabajó desde niña como obrera. Esa mirada de clase atraviesa su obra más conocida, 'Tea Rooms. Mujeres obreras' (1934), retrato de la explotación de las trabajadoras. Militante comprometida, se exilió en México, donde siguió escribiendo y ejerciendo el periodismo. Murió en un accidente de coche en 1964. Su obra fue recuperada del olvido en el siglo XXI.",
    obras: ["Peregrinos de Calvario (1928)", "Natacha (1930)", "Tea Rooms. Mujeres obreras (1934)", "Rosalía de Castro (1945)", "Juan Caballero (1956)", "De Barcelona a la Bretaña francesa (memorias, 1939)"],
    cita: "«Innovadora, escritora y periodista de la Generación del 27.»",
    citaFuente: "Inscripción en su casa natal, calle Lope de Vega, Madrid",
    bioParrafos: [
      "Luisa Genoveva Carnés Caballero nació en Madrid el 3 de enero de 1905 en el seno de una familia humilde. A diferencia de la mayoría de sus compañeras de generación, no pudo acceder a una educación formal: fue obrera manual y autodidacta, y trabajó, entre otros oficios, como camarera en un salón de té, experiencia que late en su novela más célebre, <em>Tea Rooms. Mujeres obreras</em> (1934). Empezó a escribir a los dieciocho años y en 1926 apareció en prensa su primer cuento, «Mar adentro»; antes de la guerra ya había publicado tres novelas: <em>Peregrinos de Calvario</em> (1928), <em>Natacha</em> (1930) y la propia <em>Tea Rooms</em>.",
      "Desde 1930 compaginó la literatura con el periodismo —fue pionera incluso en la crónica deportiva— y colaboró en cabeceras como <em>Crónica</em>, <em>Estampa</em>, <em>Ahora</em>, <em>Mundo Obrero</em> o <em>Frente Rojo</em>. Encuadrada en la narrativa social de preguerra —los llamados «prosistas del 27» o «Generación del nuevo romanticismo»—, fue una feminista incansable, defensora del sufragio femenino y de la educación como herramienta de emancipación de las mujeres obreras. En 1936 se afilió al Partido Comunista y defendió la legalidad republicana durante la Guerra Civil.",
      "Al final de la contienda se exilió en México (1939), donde continuó su labor como periodista en prensa y radio y siguió publicando: <em>Rosalía de Castro</em> (1945) o la novela <em>Juan Caballero</em> (1956). Murió el 8 de marzo de 1964 —Día de la Mujer— en un accidente de automóvil al regresar de una conferencia, en una fatídica casualidad. Silenciada durante casi setenta años, su obra ha sido rescatada del olvido en el siglo XXI con la reedición de <em>Tea Rooms</em> y la publicación de sus memorias, <em>De Barcelona a la Bretaña francesa</em>."
    ],
    datos: {
      "Nombre real": "Luisa Genoveva Carnés Caballero",
      "Seudónimos": "Clarita Montes · Natalia Valle",
      "Formación": "Autodidacta; obrera manual desde la infancia",
      "Corriente": "Narrativa social de preguerra · «prosistas del 27»",
      "Periodismo": "Crónica · Estampa · Ahora · Mundo Obrero · Frente Rojo (pionera en crónica deportiva)",
      "Compromiso": "Feminista y comunista (PCE, 1936); defensora del sufragio femenino",
      "Exilio": "México (1939-1964) — prensa y radio"
    },
    galeria: [
      { src: "assets/luisa/natacha.jpg", titulo: "Natacha (1930)" },
      { src: "assets/luisa/rojo-y-gris.jpg", titulo: "Rojo y gris · Cuentos completos I" },
      { src: "assets/luisa/donde-broto-el-laurel.jpg", titulo: "Donde brotó el laurel · Cuentos completos II" },
      { src: "assets/luisa/de-barcelona-bretana.jpg", titulo: "De Barcelona a la Bretaña francesa (memorias)" },
      { src: "assets/luisa/el-eslabon-perdido.jpg", titulo: "El eslabón perdido" }
    ],
    fuentes: [
      { label: "BNE: ficha de autora «Carnés, Luisa»", href: "https://www.bne.es/es/autores/carnes-luisa" },
      { label: "Editorial Renacimiento: «Luisa Carnés»", href: "https://www.editorialrenacimiento.com/autores/151__carnes-luisa" },
      { label: "Biblioteca de Coslada: biografía de Luisa Carnés", href: "https://www.bibliotecaspublicas.es/coslada/Bibliotecas/Luisa-Carn-s.html" },
      { label: "Organización de Mujeres: «Luisa Carnés y la mujer obrera»", href: "https://organizaciondemujeres.org/luisa-carnes-y-la-mujer-obrera/" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Luisa_Carn%C3%A9s"
  },
  {
    id: "remedios-varo",
    nombre: "Remedios Varo",
    nombreCompleto: "María de los Remedios Varo Uranga",
    nacimiento: "1908",
    fallecimiento: "1963",
    lugar: "Anglès, Girona",
    disciplinas: ["Pintura", "Surrealismo"],
    iniciales: "RV",
    color: "#5f0f40",
    imagen: "assets/remedios/retrato.jpg",
    bio: "Pintora surrealista de universo mágico y alquímico.",
    bioLarga: "Remedios Varo estudió en la Escuela de Bellas Artes de San Fernando y se sumergió en el surrealismo, primero en Barcelona y luego en el París de André Breton. Huyendo de la guerra y del nazismo, se exilió en México, donde desarrolló lo mejor de su obra junto a su amiga Leonora Carrington. Su pintura, minuciosa y enigmática, está poblada de alquimistas, viajeras y máquinas imposibles, un universo mágico y femenino único en el arte del siglo XX.",
    obras: ["Bordando el manto terrestre (1961)", "La creación de las aves (1957)", "Papilla estelar (1958)", "Mujer saliendo del psicoanalista", "El trovador", "Naturaleza muerta resucitando (1963)"],
    cita: "«La palabra con la que aunar su obra y su forma de estar en el mundo sería, sin duda: libertad.»",
    citaFuente: "Historia-Arte.com",
    bioParrafos: [
      "María de los Remedios Alicia Rodriga Varo y Uranga nació en Anglès (Gerona) en 1908. Hija de un ingeniero hidráulico que le enseñó dibujo técnico y perspectiva y la llevaba al Museo del Prado —donde admiró a Goya, El Greco y El Bosco—, fue una de las primeras mujeres en estudiar en la Real Academia de Bellas Artes de San Fernando de Madrid, donde obtuvo el título de profesora de dibujo. En 1932 se estableció en Barcelona, trabajó como diseñadora publicitaria (entre otros, para Bayer) y se sumó al grupo surrealista catalán Logicofobista.",
      "Republicana, con la Guerra Civil inició una relación con el poeta Benjamin Péret y se trasladó a París, donde entró en el círculo surrealista de André Breton, Max Ernst, Miró y su gran amiga Leonora Carrington. En 1941, ante la invasión nazi, se exilió en México, que la acogió gracias a las políticas de Lázaro Cárdenas; allí trató a Frida Kahlo, Diego Rivera y Octavio Paz. Tras separarse de Péret pasó dos años en Venezuela —donde llegó a pintar insectos para un instituto de malariología, una experiencia que impregnó su bestiario— y regresó a México en 1949.",
      "Su tercer compañero, el austriaco Walter Gruen, la animó a dedicarse por entero a la pintura: en los años cincuenta llegó su consagración, con exposiciones individuales de gran éxito. De técnica minuciosa, casi renacentista —empleaba <em>grattage</em>, <em>decalcomanía</em> y pinceles finísimos—, pobló sus cuadros de alquimistas, mujeres pájaro, máquinas imposibles y símbolos místicos, un universo mágico y femenino único. Murió de un infarto en Ciudad de México en 1963, en plena madurez creativa y sin haber regresado nunca a España; su última obra fue <em>Naturaleza muerta resucitando</em>."
    ],
    datos: {
      "Nombre real": "María de los Remedios Varo y Uranga",
      "Formación": "Real Academia de Bellas Artes de San Fernando, Madrid — profesora de dibujo",
      "Grupos": "Logicofobista (Barcelona) · surrealismo de París (Breton, Ernst, Miró, Carrington)",
      "Técnicas": "Grattage · decalcomanía · frotado · minuciosidad casi renacentista",
      "Exilio": "París y, desde 1941, México (con paso por Venezuela, 1947-49)",
      "Círculo": "Benjamin Péret · Leonora Carrington · Frida Kahlo · Octavio Paz · Walter Gruen"
    },
    galeria: [
      { src: "assets/remedios/creacion-aves.jpg", titulo: "La creación de las aves (1957)" },
      { src: "assets/remedios/papilla-estelar.jpg", titulo: "Papilla estelar (1958)" },
      { src: "assets/remedios/bordando-manto.jpg", titulo: "Bordando el manto terrestre (1961)" },
      { src: "assets/remedios/ruptura.jpg", titulo: "Ruptura (1955)" },
      { src: "assets/remedios/jardin-del-amor.jpg", titulo: "El jardín del amor (1951)" },
      { src: "assets/remedios/dolor-reumatico.jpg", titulo: "Dolor reumático (1948)" }
    ],
    fuentes: [
      { label: "Historia-Arte (HA!): «Remedios Varo»", href: "https://historia-arte.com/artistas/remedios-varo" },
      { label: "Instituto Cervantes: «Remedios Varo: rebelión, pasión, arte»", href: "https://cultura.cervantes.es/espanya/es/remedios-varo%3A-rebeli%C3%B3n/152487" },
      { label: "Cultura Inquieta: «Remedios Varo, pintora visionaria»", href: "https://culturainquieta.com/arte/pintura/remedios-varo-pintora-visionaria-surrealista-y-olvidada/" },
      { label: "Antonio García Villarán: «Secretos y misterios de Remedios Varo»", href: "https://antoniogarciavillaran.es/secretos-y-misterios-de-remedios-varo-arte-y-fantasia/" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Remedios_Varo"
  },
  {
    id: "lucia-sanchez-saornil",
    nombre: "Lucía Sánchez Saornil",
    nombreCompleto: "Lucía Sánchez Saornil",
    nacimiento: "1895",
    fallecimiento: "1970",
    lugar: "Madrid",
    disciplinas: ["Poesía", "Periodismo", "Activismo"],
    iniciales: "LS",
    color: "#9a031e",
    imagen: "assets/lucia/1938.jpg",
    bio: "Poeta ultraísta y anarquista, cofundadora de Mujeres Libres.",
    bioLarga: "Lucía Sánchez Saornil fue poeta ultraísta, periodista y militante anarquista. Firmó parte de su obra con el seudónimo masculino Luciano de San-Saor para poder publicar sin cortapisas. Telefonista de profesión, se afilió a la CNT y en 1936 cofundó la revista y organización Mujeres Libres, dedicada a la emancipación de las obreras. En 1937 participó en la creación de Solidaridad Internacional Antifascista. Ese año conoció a América Barroso, su compañera de por vida. Tras la guerra vivió un largo exilio interior en Valencia.",
    obras: ["Romancero de Mujeres Libres (1938)", "Horas de revolución (1937)", "La cuestión femenina en nuestros medios (1935)", "Poesía ultraísta en Los Quijotes, Cervantes, Grecia y Ultra", "Corcel de fuego (poesía, ed. 2020)"],
    cita: "«Sea todo liso como una laguna / para trazar después / la ciudad nueva.»",
    citaFuente: "Lucía Sánchez Saornil",
    bioParrafos: [
      "Lucía Sánchez Saornil (Madrid, 1895 o 1896 – Valencia, 1970) empezó estudiando pintura en la Real Academia de Bellas Artes de San Fernando, pero pronto se decantó por la literatura. Telefonista de profesión, publicó desde muy joven en revistas de primera línea como <em>Los Quijotes</em>, <em>Cervantes</em>, <em>Grecia</em> o <em>Ultra</em>, a menudo bajo el seudónimo masculino <em>Luciano de San-Saor</em> —también firmó como Un Confederado, El Observador o La Compañera—, una máscara que le permitió abrirse paso en círculos literarios dominados por hombres. Rafael Cansinos Assens llegó a calificar su poesía de «valiente, viril y bella», aun sabiendo que tras Luciano estaba Lucía.",
      "Fue la única mujer del ultraísmo español, y su lírica se metamorfoseó del modernismo a la vanguardia y, finalmente, a una poesía política y comprometida. El ultraísmo pronto le pareció insuficiente: se desvinculó de él y acusó a sus compañeros de hacer «Literatura, nada más». En 1935 publicó en <em>Solidaridad Obrera</em> la serie <em>La cuestión femenina en nuestros medios</em>, donde denunciaba el sesgo de género dentro del propio movimiento anarquista. La lectura reciente de su obra ha subrayado además la voz lésbica que late, tras el seudónimo, en muchos de sus poemas.",
      "En abril de 1936 cofundó, con Mercedes Comaposada y Amparo Poch, la organización y la revista <em>Mujeres Libres</em>, pilar del feminismo libertario español. Militante de la CNT, participó en 1937 en la creación de Solidaridad Internacional Antifascista y ese año conoció a América Barroso, su compañera para el resto de su vida. Su único poemario publicado en vida, el <em>Romancero de Mujeres Libres</em> (1938), ensalza con forma de romance las hazañas de quienes defendieron la libertad frente al fascismo. Tras la derrota vivió un largo exilio interior en Valencia, donde murió en 1970, silenciada durante décadas y hoy reivindicada como una de las grandes voces de la generación.",
    ],
    datos: {
      "Nombre real": "Lucía Sánchez Saornil",
      "Seudónimo": "Luciano de San-Saor (también Un Confederado, El Observador, La Compañera)",
      "Formación": "Real Academia de Bellas Artes de San Fernando · telefonista de profesión",
      "Estilo": "Modernismo → ultraísmo (única mujer del movimiento) → poesía política y libertaria",
      "Militancia": "CNT · cofundadora de Mujeres Libres (1936) · Solidaridad Internacional Antifascista",
      "Obra clave": "Romancero de Mujeres Libres (1938), su único poemario publicado en vida"
    },
    fuentes: [
      { label: "Biblioteca Virtual Miguel de Cervantes: portal de la autora", href: "https://www.cervantesvirtual.com/portales/lucia_sanchez_saornil/" },
      { label: "Isabel Navas Ocaña: «Semblanza de Lucía Sánchez Saornil» (Cervantes Virtual)", href: "https://www.cervantesvirtual.com/portales/lucia_sanchez_saornil/semblanza/" },
      { label: "ArtHistFem (Universitat de València): biografía", href: "https://arxiusv.uv.es/arthistfem/index.php/biografias/sanchez-saornil-lucia-luciano-de-san-saor/" },
      { label: "CGT: reedición del «Romancero de Mujeres Libres»", href: "https://cgt.es/romancero-mujeres-libres-lucia-sanchez-saornil/" },
      { label: "Wikipedia: «Lucía Sánchez Saornil»", href: "https://es.wikipedia.org/wiki/Luc%C3%ADa_S%C3%A1nchez_Saornil" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Luc%C3%ADa_S%C3%A1nchez_Saornil"
  },
  {
    id: "rosario-pi",
    nombre: "Rosario Pi",
    nombreCompleto: "Rosario Pi Brujas",
    nacimiento: "1899",
    fallecimiento: "1967",
    lugar: "Barcelona",
    disciplinas: ["Cine", "Producción", "Guion"],
    iniciales: "RP",
    color: "#354f52",
    imagen: "assets/rosario-pi.jpg",
    bio: "Pionera del cine español, directora y productora.",
    bioLarga: "Rosario Pi Brujas fue guionista, productora y directora de cine, una auténtica pionera del cine español de los años treinta. Fundó la productora Star Films y dirigió 'El gato montés' (1935), considerada durante décadas la primera película sonora dirigida por una mujer en España y hoy reivindicada como la primera película feminista de nuestro cine. Empresaria audaz en un mundo dominado por hombres, se exilió en Italia. Su figura, largamente olvidada, ha sido recuperada como una de las madres fundadoras de la industria cinematográfica española.",
    obras: ["El gato montés (1935)", "Molinos de viento (1938)", "Guion de Doce hombres y una mujer (1934)", "Productora Star Films (1931-1935)"],
    cita: "«En mi cuerpo no manda naide.»",
    citaFuente: "Soleá en El gato montés (1935), de Rosario Pi",
    bioParrafos: [
      "Rosario Pi Brujas nació en Barcelona en 1899, en una familia de la burguesía textil catalana. Una poliomielitis infantil le dejó una cojera de por vida —usaría un calzado especial y un bastón—, que no frenó su carácter emprendedor. Al morir sus padres heredó la casa familiar y regentó un negocio de lencería con artículos que importaba de París, hasta que cerró en 1929. Entonces se trasladó a Madrid y, en el nacimiento del cine sonoro, fundó la productora Star Films junto a Emilio Gutiérrez Bringas y Pedro Ladrón de Guevara, figurando como su presidenta.",
      "Entre 1931 y 1935, Star Films produjo primeras películas de directores de prestigio como Edgar Neville (<em>Yo quiero que me lleven a Hollywood</em>, 1931), Benito Perojo y Fernando Delgado. Pi dio el salto a la escritura con el guion de <em>Doce hombres y una mujer</em> (1934) y en 1935 debutó como directora con <em>El gato montés</em>, adaptación de la zarzuela de Manuel Penella en la que reescribió a la protagonista, Soleá, como una mujer independiente y autosuficiente: hoy se la considera la primera película feminista del cine español. Fue un gran éxito comercial y es su única película conservada. En plena guerra dirigió <em>Molinos de viento</em> (1938), rodada en Barcelona y terminada en París, hoy desaparecida.",
      "Se exilió en Italia junto a la actriz María Mercader —su pareja y representada—; en Roma tradujo guiones y trabajó en producción hasta que Mercader se cas\u00f3 con Vittorio De Sica y Rosario se separó de la pareja. Dejó el cine y sobrevivió con mil oficios: patentó pequeños inventos, organizó espectáculos y regentó un club nocturno. Regresó a España en los años cincuenta, olvidada y sin recursos; trabajó de modista y en los sesenta abrió un restaurante de lujo en el paseo de la Castellana. Murió en Madrid en 1967, sin que casi nadie recordara quién había sido. Vivió abiertamente su lesbianismo y desafió los roles de género de su tiempo."
    ],
    datos: {
      "Nombre real": "Rosario Pi Brujas",
      "Productora": "Star Films (Madrid, 1931-1935), de la que fue presidenta",
      "Como directora": "El gato montés (1935) · Molinos de viento (1938)",
      "Como guionista": "Doce hombres y una mujer (1934)",
      "Hito": "Primera cineasta española con trayectoria; El gato montés, primera película feminista del cine español",
      "Exilio": "París e Italia (Roma / Cinecittà)"
    },
    fuentes: [
      { label: "RAH, Historia Hispánica: «Rosario Pi Brujas»", href: "https://historia-hispanica.rah.es/biografias/36835-rosario-pi-brujas" },
      { label: "Violeta y Acción: «Rosario Pi, la primera cineasta española»", href: "https://violetayaccion.com/2022/10/06/rosario-pi-la-primera-cineasta-espanola/" },
      { label: "CVC Cervantes, Rinconete: «La aventura del cine: Rosario Pi»", href: "https://cvc.cervantes.es/el_rinconete/anteriores/octubre_00/26102000_02.htm" },
      { label: "The Objective: «Rosario Pi», por Javier Rioyo", href: "https://theobjective.com/elsubjetivo/el-verso-suelto/2025-02-14/rosario-pi-articulo-javier-rioyo/" },
      { label: "CTXT: «Rosario Pi y la masculinité fatale», por Carlos Lara", href: "https://ctxt.es/es/20220201/Culturas/38679/Carlos-Lara-Rosario-Pi-cine-canon-masculinite-fatal-El-gato-montes.htm" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Rosario_Pi"
  },
  {
    id: "norah-borges",
    nombre: "Norah Borges",
    nombreCompleto: "Leonor Fanny Borges Acevedo",
    nacimiento: "1901",
    fallecimiento: "1998",
    lugar: "Buenos Aires, Argentina",
    disciplinas: ["Pintura", "Ilustración", "Grabado"],
    iniciales: "NB",
    color: "#4a4e69",
    imagen: "assets/norah/retrato.jpg",
    bio: "Pintora y grabadora, alma gráfica del ultraísmo.",
    bioLarga: "Norah Borges, hermana del escritor Jorge Luis Borges, fue pintora, dibujante, grabadora y crítica de arte. Vinculada al ultraísmo, que conoció durante su estancia en España, ilustró portadas y libros de la vanguardia. Su xilografía y su dibujo de líneas puras dieron rostro gráfico a las revistas del movimiento. Casada con el crítico Guillermo de Torre, fue puente entre las vanguardias española y argentina.",
    obras: ["Herbario (1928)", "Montevideo (1929)", "Vieja quinta (1966)", "Xilografías ultraístas", "Ilustraciones para Platero y yo y el Romancero gitano", "Portadas de revistas de vanguardia (Alfar, Ultra, Baleares)"],
    cita: "«La pintora del ultraísmo.»",
    citaFuente: "Apodo con que se la conoció en las tertulias de vanguardia",
    bioParrafos: [
      "Leonor Fanny Borges Acevedo (Buenos Aires, 1901–1998), conocida como Norah Borges, fue pintora, dibujante, xilógrafa y crítica de arte, y hermana del escritor Jorge Luis Borges. De familia acomodada, una enfermedad de su padre llevó a los Borges a Europa entre 1914 y 1921. Instalados primero en Suiza, Norah estudió en la Escuela de Bellas Artes de Ginebra y, en Lugano, aprendió la técnica del grabado en madera con Arnaldo Bossi. El contacto con artistas refugiados de la Primera Guerra Mundial la acercó de primera mano al expresionismo, el cubismo y el futurismo. Sus primeras xilografías, de temática religiosa, combinaban trazos expresionistas con un primitivismo de raíz postcezanniana.",
      "Entre 1919 y 1921 pasó temporadas en Mallorca —isla que le descubrió el campo y sus gentes— y en Sevilla y Madrid, donde entró en el círculo del ultraísmo y participó activamente en sus tertulias, hasta ganarse el apodo de «la pintora del ultraísmo». Dio rostro gráfico a las revistas de vanguardia (<em>Alfar</em>, <em>Ultra</em>, <em>Baleares</em>, <em>Grecia</em>) y en 1920 ilustró, junto a Rafael Barradas, el <em>Manifiesto Ultraísta Vertical</em> de Guillermo de Torre. También puso imágenes a libros de su hermano y de otros escritores, como <em>Platero y yo</em> de Juan Ramón Jiménez o el <em>Romancero gitano</em> de Federico García Lorca.",
      "En 1928 se casó con el crítico literario Guillermo de Torre y, tras vivir en Madrid entre 1932 y 1936, se instaló definitivamente en Buenos Aires. Allí desarrolló un lenguaje muy personal, de figuras de rostros adolescentes, frentes anchas y grandes ojos, seres casi de juguete de una serena intensidad —Julio Payró los comparó con «retratos egipcios»—, con una paleta de rosas, amarillos y verdes cercana al realismo mágico. Ajena al mercado del arte, buena parte de su obra permanece en colecciones privadas. En 2018 la documental <em>Las Sinsombrero 2</em> de Tània Balló reivindicó su figura como una de las creadoras olvidadas de la generación.",
    ],
    datos: {
      "Nombre real": "Leonor Fanny Borges Acevedo",
      "Formación": "Escuela de Bellas Artes de Ginebra · grabado en madera con Arnaldo Bossi (Lugano)",
      "Estilo": "Ultraísmo, xilografía expresionista, figuración de aire metafísico y realismo mágico",
      "Vínculos": "«La pintora del ultraísmo» · hermana de Jorge Luis Borges · esposa de Guillermo de Torre",
      "Ilustración": "Platero y yo, Romancero gitano · revistas Alfar, Ultra, Baleares y Grecia",
      "Reconocimiento": "Retrospectiva en el Museo Nacional de Bellas Artes de Buenos Aires (2019-2020)"
    },
    galeria: [
      { src: "assets/norah/herbario.jpg", titulo: "Herbario (1928), óleo" },
      { src: "assets/norah/montevideo.jpg", titulo: "Montevideo (1929), óleo sobre madera" },
      { src: "assets/norah/vieja-quinta.jpg", titulo: "Vieja quinta (1966), témpera" }
    ],
    fuentes: [
      { label: "Es Baluard Museu: «Norah Borges»", href: "https://esbaluard.org/artista/norah-borges/" },
      { label: "Obras Bellas Artes: crónica de la muestra del MNBA", href: "https://www.obrasbellasartes.art/2020/02/norah.html" },
      { label: "Ministerio de Cultura de Argentina: «Norah Borges, una mujer en la vanguardia»", href: "https://www.cultura.gob.ar/norah-borges-una-mujer-en-la-vanguardia-8661/" },
      { label: "Wikipedia: «Norah Borges»", href: "https://es.wikipedia.org/wiki/Norah_Borges" },
      { label: "Tània Balló, <em>Las Sinsombrero 2. Ocultas e impecables</em> (2018)" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Norah_Borges"
  },
  {
    id: "rosario-de-velasco",
    nombre: "Rosario de Velasco",
    nombreCompleto: "Rosario de Velasco Belausteguigoitia",
    nacimiento: "1904",
    fallecimiento: "1991",
    lugar: "Madrid",
    disciplinas: ["Pintura"],
    iniciales: "RV",
    color: "#606c38",
    imagen: "assets/otras/rosario-de-velasco.jpg",
    bio: "Pintora figurativa próxima a la Nueva Objetividad.",
    bioLarga: "Rosario de Velasco fue una pintora figurativa integrante de la Sociedad de Artistas Ibéricos, próxima a la Nueva Objetividad alemana. Su cuadro 'Adán y Eva' (1932) obtuvo la Segunda Medalla en la Exposición Nacional de Bellas Artes y hoy se conserva en el Museo Reina Sofía. De dibujo firme y volúmenes rotundos, participó en exposiciones internacionales representando a España. La Guerra Civil dispersó su obra, hoy objeto de recuperación crítica tras la retrospectiva que le dedicó el Museo Thyssen-Bornemisza en 2024.",
    obras: ["Adán y Eva (1932, Museo Reina Sofía)", "Lavanderas (1935)", "La matanza de los inocentes / Los inocentes (1936, Bellas Artes de Valencia)", "El baño (1931)", "El chico y su perra (h. 1953)", "La casa roja (Premio Sant Jordi, 1968)", "Autorretrato (1924)"],
    cita: "«La Pola Negri de la pintura.»",
    citaFuente: "Eugenio d'Ors sobre Rosario de Velasco",
    bioParrafos: [
      "Rosario de Velasco Belausteguigoitia nació en Madrid en 1904, hija de un coronel del Ejército y de una madre vasca de firmes convicciones religiosas; fue prima de la pintora Marisa Roësset, de la misma estirpe artística que Marga Gil Röesset. Se formó con Fernando Álvarez de Sotomayor, director del Museo del Prado, que la orientó hacia el estudio de Tiziano y Velázquez. Pintora figurativa de la Sociedad de Artistas Ibéricos y próxima a la Nueva Objetividad alemana, en 1932 obtuvo la Segunda Medalla en la Exposición Nacional de Bellas Artes con <em>Adán y Eva</em> (hoy en el Museo Reina Sofía), obra emblemática del «retorno al orden» de entreguerras.",
      "En los años treinta expuso con los Ibéricos en Copenhague y Berlín, en la Bienal de Venecia, en el Carnegie de Pittsburgh y en el Jeu de Paume de París, y participó en muestras dedicadas a mujeres artistas junto a Carmen Conde, Norah Borges o Josefina de la Torre. De 1936 es <em>La matanza de los inocentes</em> (Museo de Bellas Artes de Valencia). Fue también ilustradora: puso imágenes a <em>Cuentos para soñar</em> (1928) y <em>La bella del mal amor</em> (1930) de María Teresa León, y a <em>Princesas del martirio</em> de Concha Espina.",
      "De ideología cercana a la Sección Femenina de Falange en sus inicios, en 1937 se casó en Barcelona con el médico Javier Farrerons y la pareja cruzó a pie la frontera francesa; allí nació su hija María del Mar. Pese a su ideología, en 1938 denunció ante las autoridades militares los malos tratos a los presos en los campos de concentración franquistas. Tras la guerra se instaló en Barcelona, en una intensa etapa pictórica al margen de las vanguardias, rodeada de amigos como Eugenio d'Ors —que la llamó «la Pola Negri de la pintura»—, Dionisio Ridruejo o Carmen Conde. Murió en Barcelona en 1991; en 2024 el Museo Thyssen-Bornemisza la rescató del olvido con una gran retrospectiva.",
      "Su pintura fue evolucionando desde el clasicismo depurado del «retorno al orden» hacia una figuración más libre, de perfiles desdibujados y ricas texturas, con la que ganó el Premio Sant Jordi en 1968 por <em>La casa roja</em>. Descubrió el paisaje de Albarracín y cultivó el retrato, el bodegón y la escena íntima de protagonistas femeninas. Buena parte de su producción permaneció casi un siglo en colecciones privadas y familiares, hasta que muestras como la del Museo Thyssen-Bornemisza (2024) o <em>Entre papeles y lienzos</em> en el MUREC de Almería (2025), comisariada por su sobrina nieta Toya Viudes de Velasco, sacaron a la luz más de un centenar de obras inéditas.",
    ],
    datos: {
      "Nombre real": "Rosario de Velasco Belausteguigoitia",
      "Formación": "Discípula de Fernando Álvarez de Sotomayor (director del Museo del Prado)",
      "Estilo": "Figuración; Nueva Objetividad y «retorno al orden»; Sociedad de Artistas Ibéricos",
      "Obras destacadas": "Adán y Eva (1932, Reina Sofía) · La matanza de los inocentes (1936, Bellas Artes de Valencia)",
      "Ilustración": "Libros de María Teresa León y Concha Espina · Dafnis y Cloe (Gustavo Gili) · revistas ABC, Blanco y Negro, La Esfera y Vértice",
      "Reconocimiento": "Segunda Medalla Nacional (1932) · Premio Sant Jordi (1968) · retrospectiva en el Thyssen-Bornemisza (2024)"
    },
    galeria: [
      { src: "assets/rosario/autorretrato.jpg", titulo: "Autorretrato (1924), óleo sobre lienzo" },
      { src: "assets/rosario/chico-y-perra.jpg", titulo: "El chico y su perra (h. 1953), óleo sobre lienzo" },
      { src: "assets/rosario/dafnis-cloe.jpg", titulo: "Las pastorales de Longo, para Dafnis y Cloe (1940), grafito" },
      { src: "assets/rosario/manfredo-malvina.jpg", titulo: "«Manfredo y Malvina», para La bella del mal amor (1930), tinta" }
    ],
    fuentes: [
      { label: "Wikipedia: «Rosario de Velasco»", href: "https://es.wikipedia.org/wiki/Rosario_de_Velasco" },
      { label: "Museo Thyssen-Bornemisza: exposición «Rosario de Velasco» (2024)", href: "https://www.museothyssen.org/exposiciones/rosario-velasco" },
      { label: "Museo Reina Sofía: «Rosario de Velasco»", href: "https://www.museoreinasofia.es/coleccion/autor/velasco-rosario" },
      { label: "MUREC Almería: «Rosario de Velasco. Entre papeles y lienzos» (2025)", href: "https://murecalmeria.es/exposicion_temporal/rosario-de-velasco-entre-papeles-y-lienzos/" },
      { label: "AEPE: «Rosario de Velasco Belausteguigoitia»", href: "https://apintoresyescultores.es/rosario-de-velasco-belausteguigoitia/" },
      { label: "CTXT: «Rosario de Velasco, tres vidas»", href: "https://ctxt.es/es/20240401/Culturas/45913/rosario-velasco-tres-vidas-museo-thyssen-guerra-civil-madrilena-ortega-lucas-pintora.htm" },
      { label: "Web oficial de la artista", href: "https://www.rosariodevelasco.com/" },
      { label: "Tània Balló, <em>Las Sinsombrero 2. Ocultas e impecables</em> (2018)" }
    ],
    enlace: "https://es.wikipedia.org/wiki/Rosario_de_Velasco"
  }
];
