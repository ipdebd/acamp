// assets/faturas.db.js
// Banco JS separado só para as faturas do ACAMP²
//
// status: "aberta" | "atrasada" | "paga" | "indisponivel"
// ref: "YYYY-MM"
// vencimento: "YYYY-MM-DD"

window.FATURAS_DB = [
  // Ivo Anderson (id=1)
  { id: "f1", userId: 1, ref: "2026-02", status: "paga",   valorCentavos: 2000, vencimento: "2026-02-10" },
  { id: "f2", userId: 1, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
  { id: "f3", userId: 1, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
  { id: "f4", userId: 1, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
  { id: "f5", userId: 1, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
  { id: "f6", userId: 1, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Maria Eduarda Sousa Barros Costa (id=2)
{ id: "f7",  userId: 2, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f8",  userId: 2, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f9",  userId: 2, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f10", userId: 2, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f11", userId: 2, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f12", userId: 2, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Leonardo Farias dos Santos (id=3)
{ id: "f13", userId: 3, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f14", userId: 3, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f15", userId: 3, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f16", userId: 3, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f17", userId: 3, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f18", userId: 3, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Jeanderson de Oliveira (id=4)
{ id: "f19", userId: 4, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f20", userId: 4, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f21", userId: 4, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f22", userId: 4, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f23", userId: 4, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f24", userId: 4, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Larissa Câmara (id=5)
{ id: "f25", userId: 5, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f26", userId: 5, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f27", userId: 5, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f28", userId: 5, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f29", userId: 5, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f30", userId: 5, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },
// Larissa Martins Sousa Barros (id=6)
{ id: "f31", userId: 6, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f32", userId: 6, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f33", userId: 6, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f34", userId: 6, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f35", userId: 6, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f36", userId: 6, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Vinícius de Oliveira Gomes Braga (id=7)
{ id: "f37", userId: 7, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f38", userId: 7, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f39", userId: 7, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f40", userId: 7, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f41", userId: 7, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f42", userId: 7, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Ana Cintia Avelino Alves (id=8)
{ id: "f43", userId: 8, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f44", userId: 8, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f45", userId: 8, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f46", userId: 8, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f47", userId: 8, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f48", userId: 8, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Eduardo Duarte (id=9)
{ id: "f49", userId: 9, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f50", userId: 9, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f51", userId: 9, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f52", userId: 9, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f53", userId: 9, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f54", userId: 9, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Carla Cristina Sousa Barros (id=10)
{ id: "f55", userId: 10, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f56", userId: 10, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f57", userId: 10, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f58", userId: 10, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f59", userId: 10, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f60", userId: 10, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },
// Elias Aragão Aguiar (id=11)
{ id: "f61", userId: 11, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f62", userId: 11, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f63", userId: 11, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f64", userId: 11, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f65", userId: 11, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f66", userId: 11, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Bruna Aragão (id=12)
{ id: "f67", userId: 12, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f68", userId: 12, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f69", userId: 12, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f70", userId: 12, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f71", userId: 12, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f72", userId: 12, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Edinilson Alcântara de Aguiar (id=13)
{ id: "f73", userId: 13, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f74", userId: 13, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f75", userId: 13, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f76", userId: 13, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f77", userId: 13, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f78", userId: 13, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Lawany Kelly Santiago Gomes (id=14)
{ id: "f79", userId: 14, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f80", userId: 14, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f81", userId: 14, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f82", userId: 14, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f83", userId: 14, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f84", userId: 14, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Kassio Filho (id=15)
{ id: "f85", userId: 15, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f86", userId: 15, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f87", userId: 15, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f88", userId: 15, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f89", userId: 15, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f90", userId: 15, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Luzirene (id=16)
{ id: "f91", userId: 16, ref: "2026-02", status: "aberta", valorCentavos: 6000, vencimento: "2026-02-10" },
{ id: "f92", userId: 16, ref: "2026-03", status: "aberta", valorCentavos: 6000, vencimento: "2026-03-10" },
{ id: "f93", userId: 16, ref: "2026-04", status: "aberta", valorCentavos: 6000, vencimento: "2026-04-10" },
{ id: "f94", userId: 16, ref: "2026-05", status: "aberta", valorCentavos: 6000, vencimento: "2026-05-10" },
{ id: "f95", userId: 16, ref: "2026-06", status: "aberta", valorCentavos: 6000, vencimento: "2026-06-10" },
{ id: "f96", userId: 16, ref: "2026-07", status: "aberta", valorCentavos: 6000, vencimento: "2026-07-10" },

// Pedro Avelino (id=17)
{ id: "f97", userId: 17, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f98", userId: 17, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f99", userId: 17, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f100", userId: 17, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f101", userId: 17, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f102", userId: 17, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Amanda Nacimento (id=18)
{ id: "f103", userId: 18, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f104", userId: 18, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f105", userId: 18, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f106", userId: 18, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f107", userId: 18, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f108", userId: 18, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// José Gleison (id=19)
{ id: "f109", userId: 19, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f110", userId: 19, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f111", userId: 19, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f112", userId: 19, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f113", userId: 19, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f114", userId: 19, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Ana Lúcia (id=20)
{ id: "f115", userId: 20, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f116", userId: 20, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f117", userId: 20, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f118", userId: 20, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f119", userId: 20, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f120", userId: 20, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Eder (id=21)
{ id: "f121", userId: 21, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f122", userId: 21, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f123", userId: 21, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f124", userId: 21, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f125", userId: 21, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f126", userId: 21, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Ciene (id=22)
{ id: "f127", userId: 22, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f128", userId: 22, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f129", userId: 22, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f130", userId: 22, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f131", userId: 22, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f132", userId: 22, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Gomes (id=23)
{ id: "f133", userId: 23, ref: "2026-02", status: "aberta", valorCentavos: 4000, vencimento: "2026-02-10" },
{ id: "f134", userId: 23, ref: "2026-03", status: "aberta", valorCentavos: 4000, vencimento: "2026-03-10" },
{ id: "f135", userId: 23, ref: "2026-04", status: "aberta", valorCentavos: 4000, vencimento: "2026-04-10" },
{ id: "f136", userId: 23, ref: "2026-05", status: "aberta", valorCentavos: 4000, vencimento: "2026-05-10" },
{ id: "f137", userId: 23, ref: "2026-06", status: "aberta", valorCentavos: 4000, vencimento: "2026-06-10" },
{ id: "f138", userId: 23, ref: "2026-07", status: "aberta", valorCentavos: 4000, vencimento: "2026-07-10" },

// Dalila (id=24)
{ id: "f139", userId: 24, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f140", userId: 24, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f141", userId: 24, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f142", userId: 24, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f143", userId: 24, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f144", userId: 24, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Mariene Rodrígues (id=25)
{ id: "f145", userId: 25, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f146", userId: 25, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f147", userId: 25, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f148", userId: 25, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f149", userId: 25, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f150", userId: 25, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Cristina Moura (id=26)
{ id: "f151", userId: 26, ref: "2026-02", status: "aberta", valorCentavos: 2000, vencimento: "2026-02-10" },
{ id: "f152", userId: 26, ref: "2026-03", status: "aberta", valorCentavos: 2000, vencimento: "2026-03-10" },
{ id: "f153", userId: 26, ref: "2026-04", status: "aberta", valorCentavos: 2000, vencimento: "2026-04-10" },
{ id: "f154", userId: 26, ref: "2026-05", status: "aberta", valorCentavos: 2000, vencimento: "2026-05-10" },
{ id: "f155", userId: 26, ref: "2026-06", status: "aberta", valorCentavos: 2000, vencimento: "2026-06-10" },
{ id: "f156", userId: 26, ref: "2026-07", status: "aberta", valorCentavos: 2000, vencimento: "2026-07-10" },

// Ivanildo Nunes Braga (id=27)
{ id: "f157", userId: 27, ref: "2026-02", status: "aberta", valorCentavos: 6000, vencimento: "2026-02-10" },
{ id: "f158", userId: 27, ref: "2026-03", status: "aberta", valorCentavos: 6000, vencimento: "2026-03-10" },
{ id: "f159", userId: 27, ref: "2026-04", status: "aberta", valorCentavos: 6000, vencimento: "2026-04-10" },
{ id: "f160", userId: 27, ref: "2026-05", status: "aberta", valorCentavos: 6000, vencimento: "2026-05-10" },
{ id: "f161", userId: 27, ref: "2026-06", status: "aberta", valorCentavos: 6000, vencimento: "2026-06-10" },
{ id: "f162", userId: 27, ref: "2026-07", status: "aberta", valorCentavos: 6000, vencimento: "2026-07-10" },

// Lena (id=28)
{ id: "f163", userId: 28, ref: "2026-02", status: "aberta", valorCentavos: 4000, vencimento: "2026-02-10" },
{ id: "f164", userId: 28, ref: "2026-03", status: "aberta", valorCentavos: 4000, vencimento: "2026-03-10" },
{ id: "f165", userId: 28, ref: "2026-04", status: "aberta", valorCentavos: 4000, vencimento: "2026-04-10" },
{ id: "f166", userId: 28, ref: "2026-05", status: "aberta", valorCentavos: 4000, vencimento: "2026-05-10" },
{ id: "f167", userId: 28, ref: "2026-06", status: "aberta", valorCentavos: 4000, vencimento: "2026-06-10" },
{ id: "f168", userId: 28, ref: "2026-07", status: "aberta", valorCentavos: 4000, vencimento: "2026-07-10" },

];
