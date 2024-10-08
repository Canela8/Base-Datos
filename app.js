// app.js

// Obtener el modal
var modal = document.getElementById("modal");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Función para abrir el modal con la biografía
function abrirModal(titulo, biografia) {
    console.log("Título: ", titulo); // Verifica el título
    console.log("Biografía: ", biografia); // Verifica la biografía
    document.getElementById("titulo-libro").innerText = titulo;
    document.getElementById("biografia-libro").innerHTML = biografia; // Cambiar a innerHTML para formato
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier parte fuera del modal, lo cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Añadir un evento de clic a cada imagen de libro
document.querySelectorAll('.libro img').forEach(img => {
    img.addEventListener('click', function() {
        const titulo = this.alt; // Título del libro desde el atributo alt de la imagen
        const biografia = getBiografia(titulo); // Obtener la biografía del libro
        abrirModal(titulo, biografia);
    });
});

// Función para obtener la biografía del libro según su título
function getBiografia(titulo) {
    const biografias = {


        "El gran libro de Satán": "666 páginas diabólicas. Cincuenta y seis piezas largas y más de cuatrocientos pasajes breves de índole perniciosa: poemas, cuentos, ensayos y extractos de novelas con Satán como figura central o secundario imprescindible. Cada texto seleccionado es de un autor o autora distinto, y de toda clase de perversidad literaria: de Iris Murdoch a Sara Mesa, pasando por Clive Barker, Nathaniel Hawthorne, Dante Alighieri, Joan Aiken, Irene Solà, Ambrose Bierce, Ursula K. Le Guin, Ana María Matute, Elisa Victoria, Shirley Jackson, Mijaíl Bulgákov y muchísimos más.",
        
        "Carcoma": "La autora parte del clásico de casa encantada para abordar temas críticos como la violencia patriarcal, la desigualdad social o la memoria histórica. Una novela de terror fantasmagórica pero muy real, ambientada en la España rural. Martínez utiliza elementos del terror clásico y los fusiona con el folclore de mantillas, rosarios, devocionarios y santos. Con las voces de una abuela y su nieta, que se alternan en cada capítulo, reconstruimos una historia familiar con la casa como una presencia opresora. Una historia perturbadora, oscura, visceral, muy bien escrita y que se lee de una tacada.",
        
        "Los 13 exorcismos de Salomon Joch": "El padre Salomon Joch, exorcista al servicio del Vaticano ha sido bendecido (o maldecido quizás) con el don de la inmortalidad. Por su faceta de exorcista inmortal, ha vivido cosas que la mayoría ni siquiera alcanza a imaginar. Una lectura fresca, en la que acompañamos a este peculiar sacerdote en trece exorcismos escalofriantes a través de los tiempos",
        
        "Mi esposa y yo compramos un rancho": "Es una novela a dos voces, escrita por dos hermanos, que nació en la plataforma Reddit y tuvo un éxito sin precedentes. Narra la historia de una joven pareja, Harry y Sasha, y su perro, Dash, que dejan la bulliciosa ciudad para vivir en la casa de sus sueños, situada en una de las regiones más pintorescas del estado de Wyoming. Tras negarse a escuchar las supersticiones, una noche de primavera, empieza una serie de acontecimientos que les harán dudar de todo lo que hasta ahora creían conocer. Comenzará entonces una siniestra carrera de obstáculos en la que lo único que pueden hacer, si quieren sobrevivir, es seguir las viejas leyes que dicta el valle y escuchar a su intuición.",
        
        "La casa de las sombras": "Catherine, tras superar un despedido injusto y el acoso en una cadena televisiva en Londres, comienza de nuevo. Le ofrecen catalogar la singular colección de muñecas y títeres antiguos de M.H. Mason, con representaciones sangrientas de la Gran Guerra. Invitada a la Red House, donde se resguarda la colección, Catherine enfrenta oscuros secretos detrás de las macabras exhibiciones. Visiones de Mason despiertan sombras de su pasado, desafiando su estabilidad mental. La trama oscila entre realidad, cordura y memoria, desenterrando verdades inquietantes. La novela explora la lucha de Catherine por enfrentar su pasado y descubrir horrores inimaginables.",
        



        "Rayuela": "Este clásico de la literatura contemporánea narra la historia del amor turbulento entre Horacio Oliveira y la Maga (Lucía). Es una obra que rompe con la narrativa tradicional y su estructura permite diferentes lecturas, dando lugar a diversas interpretaciones por parte del lector.",
        
        "Lo que el viento se llevó": "Es una historia épica enmarcada en 1861, en plena guerra de Secesión. Scarlett O´Hara es una joven caprichosa que está enamorada de Ashley Wilkes, el prometido de su prima Melania. De este modo, es incapaz de notar quién realmente la quiere y por quien vale la pena sacrificarse.Cuando termina la guerra, Scarlett tiene que enfrentar las adversidades y lidiar con el hambre, el dolor y la pérdida de sus propiedades.Novela ganadora del premio Pulitzer en 1937. Es una obra que ha generado controversia en los últimos tiempos, al igual que su homónima adaptación cinematográfica. Por ello, es importante entenderla en su contexto.",
        
        "Bajo la misma estrella": "Bajo la misma estrella es una novela juvenil que narra la vida de una joven adolescente llamada Hazel que lidia con una enfermedad desde pequeña.A pesar de ello, la muchacha intenta disfrutar de la vida e intenta cumplir su sueño: conocer a su escritor favorito. Todo ello lo hace junto a Gus, un joven al que conoce en una terapia de grupo y con el que inicia una bonita historia de amor.",
         
        "Yo, tú y un quizás": "Una historia que nos adentra en la experiencia de dos jóvenes. Ren es un muchacho que, detrás de la indiferencia que aparenta, esconde muchísima vulnerabilidad. Por su parte, Jisoo es una joven con grandes aspiraciones para alcanzar su sueño. Los dos se conocen desde pequeños y jamás imaginarían lo que el destino les tiene preparado.",
        
        "El faro de los amores dormidos": "La joven Alba regresa al lugar de su infancia, al que llevaba 5 años sin acudir. Aquel precioso lugar costero, donde vive su abuelo enfermo, le trae grandes recuerdos de su juventud, pero también le viene a la memoria un amor que no pudo ser. Su estancia en la aldea familiar le traerá inesperados reencuentros.",
        
        
        
        
        "La verdad sobre el caso Harry Quebert": "Este libro La verdad sobre el caso Harry Quebert no se aleja de la realidad de dichas historias, se centra en la resolución de una incógnita ¿Quién mató a Nola Kellergan? Para ello, el autor, un joven de 27 años nos muestra tres diferentes tiempos en su escrito, 1975, 1998 y 2008, en los cuales va revelando pistas para ir poco a poco dando con la respuesta.Si bien es un libro de misterio y el caso ficticio, no se aleja mucho de la realidad, aunque sirve como crítica para aquellos detectives que nunca resuelven los casos, dando a entender que siempre deben ser resueltos, y aunque pase el tiempo se debe hacer justicia.",        
        
        "La sombra del viento": "Combina una narrativa misteriosa de suspenso y amor, pero también de mucha fantasía, el libro trata de un joven que en el año 1945 fue llevado por su padre a un sitio oculto y viejo en un rincón de la ciudad, donde se encontró un libro que contenía una maldición donde el joven es arrastrado para descubrir secretos ocultos en el alma oscura de la ciudad.“Todavía recuerdo aquel amanecer en que mi padre me llevó por primera vez a visitar el cementerio de los libros olvidados.” Es la insignia de la trama que se desarrolla magistralmente en este ejemplar.",
        
        "El silencio de la ciudad blanca": "El silencio de la ciudad blanca: Trilogía de la Ciudad Blanca es una novela que trata del terror que existe en la ciudad por el regreso de unos asesinatos ritualistas, transporta al lector al misterio y terror a la vez mientras que contempla restos arqueológicos relacionados con los asesinatos.",        
        
        "Asesinato en el Orient Express": "El libro trata acerca de un asesinato que ocurre en un expreso, todo suele ser un viaje normal como diariamente transcurre hasta que ciertas “condiciones” se dan y aparece alguien muerto dentro del expreso. A partir de ese momento los dedos acusadores comienzan y la mente del lector también.Esa es la idea de la autora, que pienses y juntamente con el protagonista de la obra puedas armar el rompecabezas y dar con el asesino. Si has visto la película “El pasajero” este libro es para ti.",
        
        "La princesa de hielo": "La autora Camila lo ha hecho y su éxito con La princesa de hielo ha sido excelente. El libro trata acerca de una escritora que decide regresar a su pueblo natal luego de la muerte de sus padres.En medio de la tristeza que esto alberga, resulta que se encuentra con el cadáver de su amiga de la infancia, lo cual le causa mucha intriga; por lo que decide investigar el caso, y para esto contrata un policía que la ayudara a esclarecer una vil mentira.",
        
       
       
        
        "Tú eres el detective con Los Buscapistas": "Pepa y Maxi no se lo pueden creer: ¡la profesora ha desaparecido! Han ido de excursión al bosque y cuando han vuelto al campamento no había ni rastro de ella. ¿Por qué iba a irse sin avisar?",
        
        "Aprendiz de detective": "En esta ocasión, Enzo y Max, aprendices de detective, emprenden una nueva investigación en el castillo de Rocabruna. Durante una visita guiada al castillo, Enzo descubre unos misteriosos mensajes... ¿Será un castillo encantado? Descubre, junto con los protagonistas de esta historia, las pistas que te permitirán resolver el enigma final... Una colección para lectores que empiezan y quieren divertirse resolviendo misterios.",
        
        "La vuelta al mundo en 80 días": "El escritor francés Julio Verne es el padre de la literatura de ciencia ficción. En sus novelas siempre incluía los avances científicos de su tiempo y, gracias a su intuición, se anticipó al submarino o a los viajes espaciales. En 1872 publicó por entregas La vuelta al mundo en 80 días y fue un gran éxito, ya que planteaba un viaje en tren y barco, siendo el tren el gran invento de la época.",
        
        "La isla misteriosa ": "Verne, además de incluir en sus novelas los avances tecnológicos de su tiempo, se adelantó a muchos otros, como los viajes espaciales o bajo el mar. Su primera novela, Cinco semanas en globo, le dio tal fama que siguió haciendo libros de aventura fantástica. La isla misteriosa fue escrita y publicada por entregas durante dos años (1874-1875) y es una de las más famosas. En ella muestra la importancia de la ciencia en la vida, a través del personaje de Ciro.",
        
        "El principe feliz": "Oscar Wilde publicó El príncipe feliz y otros cuentos en 1888 y desde entonces se ha convertido en un clásico. El autor sabe describir con deliciosas pinceladas la belleza que hay en la naturaleza y en el interior de ciertos personajes, y al mismo tiempo muestra su agudo ingenio al criticar con ironía la sociedad inglesa de su época, más interesada en aparentar lujo y poder y en mantener las enormes diferencias entre ricos y pobres que en mostrar amor y generosidad.",
        
        
        
            
    
       "El lado B de las emociones": "En este libro sabremos por qué cedemos y en qué circunstancias a los deseos sexuales más intensos; cómo se proyectan en nuestro presente los traumas de la infancia; qué indica reír sin control si pasamos por una tragedia, un dolor físico severo o una gran tristeza; cuáles son las señales de una soledad profunda o un miedo sin límites que pueden derivar en una enfermedad crónica. El lado B de las emociones es una obra provocadora porque nos confronta con lucidez y contundencia sobre aspectos que tememos,negamos o sencillamente odiamos. Eduardo Calixto llega hasta lo más hondo para hablarnos de nuestro enojo, el resentimiento, la ver güenza, el resultado: un libro con explicaciones impactantes sobre nuestras conductas más siniestras, la verdad sobre los actos perversos y, más que nada, las claves para conocer nuestros abismos, enfrentarlos y llenarlos de luz.",
     
       "Microtraumas": "Este es el resultado de la acumulación de rasguños, cortaditas y golpes psicológicos. El embotamiento emocional, las microagresiones, las relaciones familiares, las humillaciones durante la infancia, la positividad tóxica y el gaslighting son todos ejemplos de microtraumas que tienen por efecto algunas consecuencias como la ansiedad de alto funcionamiento, la sensación de languidecer, el perfeccionismo desadaptativo, comer de forma emocional y tener problemas para dormir.",
            
       "Transforma las heridas de tu infancia": "A veces crecemos con inseguridades, temores, dudas y un carácter marcado por el dolor, el miedo y el abandono.Llegamos a la edad adulta vigorosos y con el éxito en nuestras manos, o amargados porque la vida es cruel e injusta. Entonces reflexionamos: lo tenemos todo para ser felices pero algo nos pasa, una nube negra nos persigue, no somos capaces de tomar la mejor decisión, ¿por qué? en este libro maravilloso, Anamar Orihuela despeja el camino para lograr una vida feliz, plena, sin culpas ni complejos. La clave: aliviar el dolor de nuestro niño interior y sanar las heridas que nuestros padres -en muchas ocasiones, sin ánimo de lastimar- y las circunstancias dejaron en nuestra vida. Con claridad, comprensión y una cercanía terapéutica amorosa, Anamar define esas heridas que nos mortifican y agobian mientras crecemos: Rechazo, Abandono, Humillación, Traición e Injusticia. Explica cómo se manifiestan, en qué etapa de nuestra vida afectan nuestros sentimientos, qué antídotos son efectivos para sanar las heridas y cómo trascender las relaciones Padre-niño para aliviar, tener seguridad y vivir en confianza y armonía. Además, Transforma las heridas de tu infancia ofrece invaluables ejercicios de sanación de las heridas de la personalidad, una Meditación sanadora que aclare nuestras inquietudes y un bello Decreto de sanación de las heridas de la infancia que, sin duda, cambiará positivamente nuestra vida.",
            
       "Este dolor no es mío": "Mark Wolynn, fundador y director del Instituto de Constelaciones Familiares (FCI) y pionero en el estudio de los traumas familiares heredados, presenta en Este dolor no es mío, un enfoque transformador que permite resolver problemas crónicos que no han podido ser aliviados mediante la terapia tradicional, los medicamentos u otras medidas.",

       "No te creas todo lo que piensas": "¿Por qué creemos lo que creemos? ¿Qué hace que reaccionemos de cierta manera ante algún suceso? Nuestra experiencia en el mundo está delimitada en gran parte por nuestros procesos mentales, pero los hechos y circunstancias a nuestro alrededor pueden ser solo eso. Este libro te ayudará a: •Evitar que lo que piensas te lleve a dudar o autosabotearte. •Enfrentarte a las circunstancias del día a día sin ansias. •Construir una nueva perspectiva de vida que venga desde la seguridad y la armonía. •Entender que la incertidumbre y el desconocimiento pueden jugar a favor de tu crecimiento. Vuelve a confiar en tu mente",
        };
        

    return biografias[titulo] || "Biografía no disponible.";
}
