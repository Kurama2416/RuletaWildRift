const OBJETOS_BASE = [
  {
    id: 1,
    nombre: "Grebas Glotonas",
    categoria: "Botas",
    imagen: "assets/img/grebas_glotonas.webp"
  },
  {
    id: 2,
    nombre: "Grebas del Berserker",
    categoria: "Botas",
    imagen: "assets/img/grebas_del_berserker.webp"
  },
  {
    id: 3,
    nombre: "Botas de Mercurio",
    categoria: "Botas",
    imagen: "assets/img/botas_de_mercurio.webp"
  },
  {
    id: 4,
    nombre: "Punteras de Acero Revestidas",
    categoria: "Botas",
    imagen: "assets/img/punteras_de_acero_revestidas.png"
  },
  {
    id: 5,
    nombre: "Botas Jonias de la Lucidez",
    categoria: "Botas",
    imagen: "assets/img/botas_jonias_de_la_lucidez.webp"
  },
  {
    id: 6,
    nombre: "Botas de Mana",
    categoria: "Botas",
    imagen: "assets/img/botas_de_mana.webp"
  },
  {
    id: 7,
    nombre: "Botas de Dinamismo",
    categoria: "Botas",
    imagen: "assets/img/botas_de_dinamismo.png"
  },
  {
    id: 8,
    nombre: "Mandato Imperial",
    categoria: "Soporte",
    imagen: "assets/img/mandato_imperial.webp"
  },
  {
    id: 9,
    nombre: "Baculo de Agua Fluyente",
    categoria: "Soporte",
    imagen: "assets/img/baculo_de_agua_fluyente.webp"
  },
  {
    id: 10,
    nombre: "Eco Armonico",
    categoria: "Soporte",
    imagen: "assets/img/eco_armonico.webp"
  },
  {
    id: 11,
    nombre: "Pebetero Ardiente",
    categoria: "Soporte",
    imagen: "assets/img/pebetero_ardiente.webp"
  },
  {
    id: 12,
    nombre: "Redencion",
    categoria: "Soporte",
    imagen: "assets/img/redencion.webp"
  },
  {
    id: 13,
    nombre: "Canto de Guerra de Shurelya",
    categoria: "Soporte",
    imagen: "assets/img/canto_de_guerra_de_shurelya.webp"
  },
  {
    id: 14,
    nombre: "Relicario de los Solari de Hierro",
    categoria: "Soporte",
    imagen: "assets/img/relicario_de_los_solari_de_hierro.webp"
  },
  {
    id: 15,
    nombre: "Bendicion de Mikael",
    categoria: "Soporte",
    imagen: "assets/img/bendicion_de_mikael.webp"
  },
  {
    id: 16,
    nombre: "Velo de la Banshee",
    categoria: "Defensa",
    imagen: "assets/img/velo_de_la_banshee.webp"
  },
  {
    id: 17,
    nombre: "Máscara Abisal",
    categoria: "Defensa",
    imagen: "assets/img/mascara_abisal.webp"
  },
  {
    id: 18,
    nombre: "Desesperación Eterna",
    categoria: "Defensa",
    imagen: "assets/img/desesperacion_eterna.png"
  },
  {
    id: 19,
    nombre: "Resplandor Vacío",
    categoria: "Defensa",
    imagen: "assets/img/resplandor_vacio.webp"
  },
  {
    id: 20,
    nombre: "Promesa del Caballero",
    categoria: "Defensa",
    imagen: "assets/img/promesa_del_caballero.webp"
  },
  {
    id: 21,
    nombre: "Cota Sangrienta del Soberano",
    categoria: "Defensa",
    imagen: "assets/img/cota_sangrienta_del_soberano.webp"
  },
  {
    id: 22,
    nombre: "Ángel Guardián",
    categoria: "Defensa",
    imagen: "assets/img/angel_guardian.webp"
  },
  {
    id: 23,
    nombre: "Guantelete de Sterak",
    categoria: "Defensa",
    imagen: "assets/img/guantelete_de_sterak.png"
  },
  {
    id: 24,
    nombre: "Égida de Fuego Solar",
    categoria: "Defensa",
    imagen: "assets/img/egida_de_fuego_solar.webp"
  },
  {
    id: 25,
    nombre: "Presagio de Randuin",
    categoria: "Defensa",
    imagen: "assets/img/presagio_de_randuin.webp"
  },
  {
    id: 26,
    nombre: "Cota de Espinas",
    categoria: "Defensa",
    imagen: "assets/img/cota_de_espinas.webp"
  },
  {
    id: 27,
    nombre: "Armadura de Warmog",
    categoria: "Defensa",
    imagen: "assets/img/armadura_de_warmog.webp"
  },
  {
    id: 28,
    nombre: "Placa del Hombre Muerto",
    categoria: "Defensa",
    imagen: "assets/img/placa_del_hombre_muerto.png"
  },
  {
    id: 29,
    nombre: "Guantelete del Hijo del Hielo",
    categoria: "Defensa",
    imagen: "assets/img/guantelete_del_hijo_del_hielo.webp"
  },
  {
    id: 30,
    nombre: "Llegada del Invierno",
    categoria: "Defensa",
    imagen: "assets/img/llegada_del_invierno.webp"
  },
  {
    id: 31,
    nombre: "Corazón de Hielo",
    categoria: "Defensa",
    imagen: "assets/img/corazon_de_hielo.webp"
  },
  {
    id: 32,
    nombre: "Fuerza de la Naturaleza",
    categoria: "Defensa",
    imagen: "assets/img/fuerza_de_la_naturaleza.webp"
  },
  {
    id: 33,
    nombre: "Velo del Amanecer",
    categoria: "Defensa",
    imagen: "assets/img/velo_del_amanecer.webp"
  },
  {
    id: 34,
    nombre: "Coraza Dual de Amaranto",
    categoria: "Defensa",
    imagen: "assets/img/coraza_dual_de_amaranto.webp"
  },
  {
    id: 35,
    nombre: "Manto de la Medianoche",
    categoria: "Defensa",
    imagen: "assets/img/manto_de_la_medianoche.webp"
  },
  {
    id: 36,
    nombre: "Corona Abrasadora",
    categoria: "Defensa",
    imagen: "assets/img/corona_abrasadora.png"
  },
  {
    id: 37,
    nombre: "Hidra Titánica",
    categoria: "Defensa",
    imagen: "assets/img/hidra_titanica.webp"
  },
  {
    id: 38,
    nombre: "Corazón de Acero",
    categoria: "Defensa",
    imagen: "assets/img/corazon_de_acero.webp"
  },
  {
    id: 39,
    nombre: "Convergencia de Zeke",
    categoria: "Defensa",
    imagen: "assets/img/convergencia_de_zeke.webp"
  },
  {
    id: 40,
    nombre: "Rukerno Kaénico",
    categoria: "Defensa",
    imagen: "assets/img/rukerno_kaenico.png"
  },
  {
    id: 41,
    nombre: "Trampa para Yordles",
    categoria: "Defensa",
    imagen: "assets/img/trampa_para_yordles.webp"
  },
  {
    id: 42,
    nombre: "Virtud Radiante",
    categoria: "Defensa",
    imagen: "assets/img/virtud_radiante.webp"
  },
  {
    id: 43,
    nombre: "Maldad",
    categoria: "Magia",
    imagen: "assets/img/maldad.webp"
  },
  {
    id: 44,
    nombre: "Enfoque al Horizonte",
    categoria: "Magia",
    imagen: "assets/img/enfoque_al_horizonte.webp"
  },
  {
    id: 45,
    nombre: "Tridente de la Oceánide",
    categoria: "Magia",
    imagen: "assets/img/tridente_de_la_oceanide.webp"
  },
  {
    id: 46,
    nombre: "Agrietador",
    categoria: "Magia",
    imagen: "assets/img/agrietador.webp"
  },
  {
    id: 47,
    nombre: "Impulso Cósmico",
    categoria: "Magia",
    imagen: "assets/img/impulso_cosmico.webp"
  },
  {
    id: 48,
    nombre: "Orbe del Infinito",
    categoria: "Magia",
    imagen: "assets/img/orbe_del_infinito.webp"
  },
  {
    id: 49,
    nombre: "Diente de Nashor",
    categoria: "Magia",
    imagen: "assets/img/diente_de_nashor.webp"
  },
  {
    id: 50,
    nombre: "Báculo del Arcángel",
    categoria: "Magia",
    imagen: "assets/img/baculo_del_arcangel.webp"
  },
  {
    id: 51,
    nombre: "Maldición del Liche",
    categoria: "Magia",
    imagen: "assets/img/maldicion_del_liche.webp"
  },
  {
    id: 52,
    nombre: "Vara de las Edades",
    categoria: "Magia",
    imagen: "assets/img/vara_de_las_edades.webp"
  },
  {
    id: 53,
    nombre: "El Tormento de Liandry",
    categoria: "Magia",
    imagen: "assets/img/el_tormento_de_liandry.png"
  },
  {
    id: 54,
    nombre: "Cetro de Cristal de Rylai",
    categoria: "Magia",
    imagen: "assets/img/cetro_de_cristal_de_rylai.webp"
  },
  {
    id: 55,
    nombre: "Sombrero Mortífero de Rabadon",
    categoria: "Magia",
    imagen: "assets/img/sombrero_mortifero_de_rabadon.webp"
  },
  {
    id: 56,
    nombre: "Morellonomicon",
    categoria: "Magia",
    imagen: "assets/img/morellonomicon.webp"
  },
  {
    id: 57,
    nombre: "Eco de Luden",
    categoria: "Magia",
    imagen: "assets/img/eco_de_luden.png"
  },
  {
    id: 58,
    nombre: "Espadafuria de Guinsoo",
    categoria: "Magia",
    imagen: "assets/img/espadafuria_de_guinsoo.webp"
  },
  {
    id: 59,
    nombre: "Antorcha de Fuegoscuro",
    categoria: "Magia",
    imagen: "assets/img/antorcha_de_fuegoscuro.png"
  },
  {
    id: 60,
    nombre: "Descarga Tormentosa",
    categoria: "Magia",
    imagen: "assets/img/descarga_tormentosa.png"
  },
  {
    id: 61,
    nombre: "Báculo del Vacío",
    categoria: "Magia",
    imagen: "assets/img/baculo_del_vacio.webp"
  },
  {
    id: 62,
    nombre: "Maldición de la Vampiresa",
    categoria: "Magia",
    imagen: "assets/img/maldicion_de_la_vampiresa.png"
  },
  {
    id: 63,
    nombre: "Criptorretoño",
    categoria: "Magia",
    imagen: "assets/img/criptoretonio.webp"
  },
  {
    id: 64,
    nombre: "Ocaso y Alba",
    categoria: "Magia",
    imagen: "assets/img/ocaso_y_alba.webp"
  },
  {
    id: 65,
    nombre: "Armadura Pétrea",
    categoria: "Defensa",
    imagen: "assets/img/armadura_petrea.png"
  },
  {
    id: 66,
    nombre: "Reloj de Arena de Zhonya",
    categoria: "Magia",
    imagen: "assets/img/reloj_de_arena_de_zhonya.webp"
  },
  {
    id: 67,
    nombre: "Cinturón Cohete Hextech",
    categoria: "Magia",
    imagen: "assets/img/cinturon_cohete_hextech.webp"
  },
  {
    id: 68,
    nombre: "Rompeavances",
    categoria: "Físico",
    imagen: "assets/img/rompeavances.webp"
  },
  {
    id: 69,
    nombre: "Bebedor de Sangre",
    categoria: "Físico",
    imagen: "assets/img/bebedor_de_sangre.webp"
  },
  {
    id: 70,
    nombre: "Fuerza del Viento",
    categoria: "Físico",
    imagen: "assets/img/fuerza_del_viento.webp"
  },
  {
    id: 71,
    nombre: "Cimitarra Mercurial",
    categoria: "Físico",
    imagen: "assets/img/cimitarra_mercurial.webp"
  },
  {
    id: 72,
    nombre: "Rompecascos",
    categoria: "Físico",
    imagen: "assets/img/rompecascos.webp"
  },
  {
    id: 73,
    nombre: "Transferencia de Alma",
    categoria: "Físico",
    imagen: "assets/img/transferencia_de_alma.webp"
  },
  {
    id: 74,
    nombre: "La Cuchilla Oscura",
    categoria: "Físico",
    imagen: "assets/img/la_cuchilla_oscura.webp"
  },
  {
    id: 75,
    nombre: "Cielo Desgarrado",
    categoria: "Físico",
    imagen: "assets/img/cielo_desgarrado.webp"
  },
  {
    id: 76,
    nombre: "Eclipse",
    categoria: "Físico",
    imagen: "assets/img/eclipse.png"
  },
  {
    id: 77,
    nombre: "Terminus",
    categoria: "Físico",
    imagen: "assets/img/terminus.png"
  },
  {
    id: 78,
    nombre: "Lanza de Shojin",
    categoria: "Físico",
    imagen: "assets/img/lanza_de_shojin.webp"
  },
  {
    id: 79,
    nombre: "Sierraespada Quimpunk",
    categoria: "Físico",
    imagen: "assets/img/sierraespada_quimpunk.png"
  },
  {
    id: 80,
    nombre: "El Coleccionista",
    categoria: "Físico",
    imagen: "assets/img/el_coleccionista.webp"
  },
  {
    id: 81,
    nombre: "Colmillo de Serpiente",
    categoria: "Físico",
    imagen: "assets/img/colmillo_de_serpiente.webp"
  },
  {
    id: 82,
    nombre: "Cercenador Divino",
    categoria: "Físico",
    imagen: "assets/img/cercenador_divino.webp"
  },
  {
    id: 83,
    nombre: "Filo de la Noche",
    categoria: "Físico",
    imagen: "assets/img/filo_de_la_noche.webp"
  },
  {
    id: 84,
    nombre: "Cuchillas Raudas de Navori",
    categoria: "Físico",
    imagen: "assets/img/cuchillas_raudas_de_navori.webp"
  },
  {
    id: 85,
    nombre: "Rencor de Serylda",
    categoria: "Físico",
    imagen: "assets/img/rencor_de_serylda.webp"
  },
  {
    id: 86,
    nombre: "Saqueador de Esencias",
    categoria: "Físico",
    imagen: "assets/img/saqueador_de_esencias.webp"
  },
  {
    id: 87,
    nombre: "Al Filo de la Cordura",
    categoria: "Físico",
    imagen: "assets/img/al_filo_de_la_cordura.webp"
  },
  {
    id: 88,
    nombre: "Bailarín Espectral",
    categoria: "Físico",
    imagen: "assets/img/bailarin_espectral.png"
  },
  {
    id: 89,
    nombre: "Bláster Magnético",
    categoria: "Físico",
    imagen: "assets/img/blaster_magnetico.webp"
  },
  {
    id: 90,
    nombre: "Fuerza de la Trinidad",
    categoria: "Físico",
    imagen: "assets/img/fuerza_de_la_trinidad.webp"
  },
  {
    id: 91,
    nombre: "Manamune",
    categoria: "Físico",
    imagen: "assets/img/manamune.webp"
  },
  {
    id: 92,
    nombre: "Recordatorio Mortal",
    categoria: "Físico",
    imagen: "assets/img/recordatorio_mortal.webp"
  },
  {
    id: 93,
    nombre: "Filo del Infinito",
    categoria: "Físico",
    imagen: "assets/img/filo_del_infinito.webp"
  },
  {
    id: 94,
    nombre: "Hoja Crepuscular de Draktharr",
    categoria: "Físico",
    imagen: "assets/img/hoja_crepuscular_de_draktharr.webp"
  },
  {
    id: 95,
    nombre: "Espada Fantasma de Youmuu",
    categoria: "Físico",
    imagen: "assets/img/espada_fantasma_de_youmuu.png"
  },
  {
    id: 96,
    nombre: "Espada del Rey Arruinado",
    categoria: "Físico",
    imagen: "assets/img/espada_del_rey_arruinado.webp"
  },
  {
    id: 97,
    nombre: "La Sanguinaria",
    categoria: "Físico",
    imagen: "assets/img/la_sanguinaria.webp"
  },
  {
    id: 98,
    nombre: "Matakrakens",
    categoria: "Físico",
    imagen: "assets/img/matakrakens.webp"
  },
  {
    id: 99,
    nombre: "Placa Hexperimental",
    categoria: "Físico",
    imagen: "assets/img/placa_hexperimental.webp"
  },
  {
    id: 100,
    nombre: "Recuerdos de Lord Dominik",
    categoria: "Físico",
    imagen: "assets/img/recuerdos_de_lord_dominik.webp"
  },
  {
    id: 101,
    nombre: "Huracán de Runaan",
    categoria: "Físico",
    imagen: "assets/img/huracan_de_runaan.png"
  }




];