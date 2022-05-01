import { app } from './expressApp/app';

app.listen(process.env.SERVER_PORT, () => {
  console.log(`🚀 Executando na porta ${process.env.SERVER_PORT}`);
});
