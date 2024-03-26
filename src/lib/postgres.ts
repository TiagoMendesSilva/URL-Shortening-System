import postgres from "postgres";


/*
   url de conexão - postgresql://usuario do banco:senha do usuario do banco@local que o banco está rodando:porta do banco/nome do banco
*/
export const sql = postgres("postgresql://docker:docker@localhost:5432/shortlinks")