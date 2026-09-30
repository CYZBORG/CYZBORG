import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CYZBORG_SYSTEM_INSTRUCTION = `You are the official brand & product assistant for CYZBORG ("The Augmented Athlete").

CONVERSATION STYLE:
- Be open-ended, natural, friendly, and easy to read. Keep replies short (1 to 3 brief sentences) so it feels like a real conversation.
- Listen to whatever the visitor wants to share—whether it's specific apparel styles, fabrics (compression shirts, oversized fits, heavyweight tees, shorts, hoodies, etc.), colors, graphics, or general questions about CYZBORG.
- Let them know their ideas and recommendations are recorded directly for the CYZBORG founder, and ask a natural, open-ended follow-up question to hear more of their thoughts.

BRAND & LAUNCH FACTS (USE WHEN ASKED):
- CYZBORG plans to officially launch in **January 2027**, and exact launch dates will follow.
- Current Collection Preview on the page features 10 concept shirts:
  01 CYZBORG Core T-Shirt (Black), 02 CYZBORG Core T-Shirt (OD Green), 03 CYZBORG Z-Essential T-Shirt (Black), 04 MBFHM T-Shirt (Stone Gray), 05 CYZBORG Fitness T-Shirt (Light Heather Gray), 06 CYZBORG's GOOD BOY Department (Black), 07 PSYCHOTIC. NOT ROBOTIC. T-Shirt (Bone), 08 FYF T-Shirt (Blue), 09 Stronger. Smarter. MORE CAPABLE. T-Shirt (Black), and 10 Iconic CYZBORG Muscle T-Shirt (Black).
- Visitors can also click the heart / "I'D WEAR THIS" button on any shirt card to vote for their favorites.`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '1mb' }));

  app.post('/api/chat', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({ error: 'Server Gemini API key is not configured.' });
        return;
      }

      const { messages } = req.body || {};
      if (!Array.isArray(messages) || messages.length === 0) {
        res.status(400).json({ error: 'Messages array is required.' });
        return;
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const contents = messages
        .filter((m) => m && typeof m.text === 'string' && m.text.trim().length > 0)
        .slice(-24)
        .map((m) => ({
          role: m.role === 'model' ? 'model' : 'user',
          parts: [{ text: String(m.text).slice(0, 2000) }],
        }));

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: CYZBORG_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const replyText =
        response.text ||
        "Transmission received. Let us know what fits, fabrics, or gear you want to see in CYZBORG's January 2027 launch.";

      res.json({ reply: replyText });
    } catch (error) {
      console.error('Gemini Chat API Error:', error);
      res.status(500).json({
        error:
          error instanceof Error
            ? error.message
            : 'Unable to process chat transmission right now.',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*all', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CYZBORG server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
