// api/send-email.js
const { Resend } = require('resend');

module.exports = async (req, res) => {
  // Configurar CORS manualmente sem usar Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Responder a requisições OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Verificar se o método é POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Verificar se a API key está configurada
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: 'API key não configurada' });
    }

    // Inicializar o Resend com a API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Extrair dados do corpo da requisição
    const { name, email, testType, resultText } = req.body;
    
    // Validar dados de entrada
    if (!name || !email || !testType || !resultText) {
      return res.status(400).json({ 
        error: 'Dados incompletos',
        received: { 
          name: !!name, 
          email: !!email, 
          testType: !!testType, 
          resultText: !!resultText 
        }
      });
    }

    // Criar o template de email
    const emailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #4a90e2;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            padding: 20px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 5px 5px;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
          }
          h1 {
            color: #2c3e50;
          }
          .result {
            background-color: white;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #4a90e2;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>Resultado do seu Teste de ${testType}</h2>
        </div>
        <div class="content">
          <p>Olá, ${name}!</p>
          <p>Obrigado por realizar nosso teste de ${testType}. Abaixo está o resultado da sua avaliação:</p>
          
          <div class="result">
            <h3>Seu Resultado:</h3>
            <p>${resultText}</p>
          </div>
          
          <p>Lembre-se que este teste é apenas uma ferramenta de autoconhecimento e não substitui a avaliação de um profissional de saúde mental.</p>
          
          <p>Se você tiver alguma dúvida ou precisar de mais informações, não hesite em nos contatar.</p>
          
          <p>Atenciosamente,<br>Equipe de Saúde Mental</p>
        </div>
        <div class="footer">
          <p>Este é um email automático. Por favor, não responda a este email.</p>
        </div>
      </body>
      </html>
    `;

    try {
      // Enviar o email usando o Resend
      const { data, error } = await resend.emails.send({
        from: 'Teste de Saúde Mental <onboarding@resend.dev>', // Use o domínio de teste do Resend para testes iniciais
        to: email,
        subject: `Resultado do seu Teste de ${testType}`,
        html: emailTemplate,
      });

      if (error) {
        return res.status(500).json({ error: 'Falha ao enviar email', details: error });
      }

      return res.status(200).json({ success: true, data });
    } catch (sendError) {
      return res.status(500).json({ error: 'Erro ao chamar API de email', details: sendError.message });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor', details: error.message });
  }
};