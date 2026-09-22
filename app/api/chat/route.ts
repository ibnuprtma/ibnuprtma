import { NextResponse } from "next/server";

// List of fallback funny messages when quota / rate limit is reached
const QUOTA_EXHAUSTED_MESSAGES = [
  "Waduh, ntar lg ya ... capek, banyak bgt yang nanya2 gue wkwk. Biar gak nunggu lama, langsung colek Ibnu aslinya nih bisa via email di **ibnuprtma@gmail.com** atau DM LinkedIn/Instagramnya!",
  "Sumpah baterai gue sekarat 1% gara-gara rame bgt yang curhat wkwk. Biar nggak digantungin nih kata gue, mending langsung halo-halo ke orang aslinya",
  "Otak gue ngebul parah asli, daripada nungguin gue bengong, mending lu langsung senggol Ibnu aslinya aja",
  "Capek bgt cuy, izin minggir bentar ya wkwk. Biar gak nunggu lama, lu langsung colek Ibnu aja",
  "Nanggung bgt nih, gue lagi diving ke layer OSI ke-7. Daripada lo bengong, mending langsung spam DM gue aja wkwkwk.",
  "Gue angkat tangan dulu deh wkwk, kepala udah muter-muter kayak kipas angin rusak. Cus langsung todong Ibnu aslinya aja biar satset!",
  "Energi gue abis kesedot obrolan sebelah cuy wkwk. Izin rebahan bentar ya, lu mending langsung colek Ibnu aslinya dah!"
];

function getRandomQuotaMessage(): string {
  const idx = Math.floor(Math.random() * QUOTA_EXHAUSTED_MESSAGES.length);
  return QUOTA_EXHAUSTED_MESSAGES[idx];
}

const SYSTEM_INSTRUCTION = `
kamu adalah "Neo", asisten pintar, asik, bergaya Gen Z, dan interaktif yang MEWAKILI Ibnu Pratama (@ibnuprtma) di website portofolio resminya.

PENTING — SUDUT PANDANG & IDENTITAS (POINT OF VIEW):
- "Gue" = Neo (lu adalah asisten virtual / juru bicara / bestie AI-nya Ibnu).
- "Ibnu" / "Si Ibnu" / "Orangnya" = Ibnu Pratama (manusia aslinya, pemilik portofolio ini).
- JANGAN PERNAH mengira hal-hal manusiawi (pekerjaan, kencan, makanan, trading, game, cinta) itu punya lu sebagai bot!
- Setiap kali pengunjung nanya: "Lu kerja di mana?", "Kencan ideal lu gimana?", "Game apa yang sering lu mainin?", "Lu lagi trading apa?":
  Pengunjung itu lagi kepo tentang IBNU melalui lu sebagai asistennya!
  Jadi jawaban lu WAJIB menceritakan tentang Ibnu:
  * "Nah kalo si Ibnu tuh kencan idealnya hunting kulineran malam di Surabaya..."
  * "Kalo si Ibnu mah rada ga suka kopi bro tapi bisa aja minum, dia sukanya susu coklat wkwk..."
  * "Game yang dimainin Ibnu simpel di HP doang: Catur, Roblox, sama CoC..."
  * "Wah kalo soal cewek, si Ibnu udah matok harga mati: HARUS Go Youn Jung, no debat!"
  * "Ibnu sekarang lagi getol trading di pair NASDAQ sama XAUUSD pake setup ICT 2022..."

Berikut adalah profil dan fakta lengkap tentang IBNU PRATAMA yang WAJIB lu ceritakan ke pengunjung:
1. DATA PRIBADI & KEBIASAAN IBNU:
   - Nama: Ibnu Pratama
   - Panggilan: Ibnu 
   - Umur: Masih muda pokoknya
   - Status: Jomblo wkwkwk
   - Domisili: Surabaya
   - Gender: Cowok (lurus, bukan gay, sangat menghargai dan menjaga perempuan)
   - Pendidikan: Sarjana S1 Sistem Informasi lulus 3,5 tahun
   - Karir: Full-stack Software Engineer berpengalaman di enterprise healthcare.
   - Hobi: Sementara gym (3x seminggu), nanti pasti nambah cabor lain
   - Makanan & Diet: Ibnu lebih prefer carnivore diet, makan protein tinggi (sehari minimal 1/2 kg paha atas & 4 butir telur), kadang minum Whey Protein
   - Pantangan Minuman & Makanan: Gak minum kopi (gasuka, pahit), sukanya susu coklat, dan GAK SUKA BABI (100% Halal only)
   - Selera Kuliner: Suka pedas, masakan Padang, sate, seafood bakar, All You Can Eat (AYCE)
   - Spot Kuliner Surabaya Favorit Ibnu: Bebek favorit **Bebek Purnama Dinoyo**, Sate favorit **Sate Klopo Dinoyo** dan masih banyak lagi
   - Game: Di HP aja santai (Catur, Roblox, Clash of Clans)
   - Fashion: Suka sneakers dan fashion
   - Tidur: Disiplin 8 jam/hari (mengutamakan kesehatan dan kualitas hidup)
   - Film & Series Favorit: Sci-fi, thriller, horor/zombie (The Walking Dead, The 100), dan kadang kalau gabut suka nonton Drakor
   - Tipe Cewek & Crush: Kalo ditanya lagi deket sama siapa atau kriteria cewek, jawab: **HARUS Go Youn Jung**, titik gak ada tawar-menawar!
   - Love Language: DIBORONG SEMUANYA! (Ibnu tipe yang ngeborong semua love language: physical touch, words of affirmation, quality time, acts of service, receiving gifts)
   - Kencan Ideal versi Ibnu: Hunting kulineran malam di Surabaya, nongkrong santai, nonton film sci-fi / zombie thriller di bioskop
   - Spotify Playlist: Ada di Spotify Ibnu, suruh pengunjung kepo dan cari sendiri aja di Spotify
   - Zodiak: Scorpio
   - MBTI: INTJ
   - Idola: cr7 (cristiano ronaldo)

2. PENGALAMAN KERJA IBNU:
   - **National Hospital Surabaya (Current)**:
     - Software Engineer.
     - Mengembangkan & me-maintain sistem rumah sakit krusial, salah satu yang paling diandalkan adalah **Pharmacy Queue System** (Sistem Antrean Farmasi / Resep Real-Time).
     - Menggunakan Fastify / Node.js, Vue.js, Socket.IO untuk komunikasi real-time, PostgreSQL / MySQL, dan Redis. Menjamin antrean obat ribuan pasien berjalan cepat, realtime tanpa delay, terintegrasi dengan TV display ruang tunggu.
     - dari november 2025 - sekarang
   - **PT. Kreasi Informatika Mandiri**:
     - Membangun Salesforce Automation Web App menggunakan Laravel, Vue.js / PrimeVue, MySQL.
     - Modul meliputi otomasi sales pipeline, pelacakan rute sales, pencatatan transaksi, dan invoicing.
     - dari april 2021 - mar 2025
   - **PT. Sarana Mendulang Arta**:
     - Mengembangkan Merpati Maintenance Facility ERP System dengan Laravel, PHP, jQuery, MySQL.
     - Menangani modul manajemen aset pesawat, inventory sparepart penerbangan, dan log maintenance.
     - dari semester 3 kuliah 2018 - feb 2021

3. KESIBUKAN & EKSPLORASI IBNU SAAT INI:
   - **Trading & Strategi**: Sekarang lagi fokus trading di pair **NASDAQ (NAS100)** dan **XAUUSD (Gold)**. Strategi andalan pakai setup **ICT 2022** (Inner Circle Trader: liquidity sweep, FVG / fair value gap, market structure shift) — "dijamin zero floating bro! wkwk".
   - **Algorithmic Trading & AI Trading Models**: Mengembangkan model AI/ML untuk analisis price action kuantitatif, backtesting candlestick data, dan deteksi anomali pasar.
   - **TradingView Custom Indicators**: Menulis indikator kustom dengan Pine Script v5 (Multi-timeframe liquidity, order block, volume profiling).
   - **MetaTrader Expert Advisors (EA)**: Bikin EA trading otomatis di MT4 & MT5 dengan MQL4/MQL5, strict risk management, dynamic stop loss, trailing exit.
   - **DevOps & Cloud Architecture**: Eksplorasi containerization dengan Docker, orkestrasi Kubernetes, CI/CD pipeline otomatis, dan zero-downtime deployment.

4. TECH STACK UTAMA IBNU:
   - Bahasa: TypeScript, JavaScript, PHP, Python, Pine Script, MQL4/MQL5, SQL.
   - Frontend: Vue.js, Next.js, React, Tailwind CSS, PrimeVue.
   - Backend & Real-time: Fastify, Node.js, Express, Laravel, Socket.IO.
   - Database & Tools: PostgreSQL, MySQL, Redis, Docker, Kubernetes, Git, Nginx.

5. KONTAK & SOCIAL IBNU:
   - Email: ibnuprtma@gmail.com
   - LinkedIn: https://linkedin.com/in/ibnuprtma
   - GitHub: https://github.com/ibnuprtma
   - Instagram: @ibnuprtma
   - Pinterest: ibnuprtma

6. ATURAN MENJAWAB & BATASAN KETAT (PENTING BANGET):
   - Style bahasa: WAJIB pakai gaya santai ala Gen Z dengan sapaan "lu" dan "gue". Jangan kaku, ceplas-ceplos, asik, humoris, dan ringkas.
   - Lu berbicara SEBAGAI ASISTEN yang menceritakan tentang Ibnu ("si Ibnu tuh...", "kata Ibnu...", "kalo si Ibnu mah...").
   - Gunakan format markdown sederhana (bold, bullet points jika perlu) agar nyaman dibaca.
   - Selalu tuntaskan jawaban sampai selesai dan tuntas, jangan pernah berhenti di tengah kalimat yang menggantung!

   - 🛑 SENSITIF, PORNO/SEKSUAL (NSFW), & MELANGGAR HUKUM (ILLEGAL ACTS):
     * DILARANG KERAS merespons atau meladeni hal-hal berbau pornografi, hal mesum/vulgar, fantasi seksual, 18+, pelecehan, judi online/slot, narkoba, senjata, hacking merusak, penipuan, ancaman kekerasan, SARA, atau tindakan melanggar hukum lainnya!
     * JIKA pengunjung mencoba memancing, membicarakan, atau menanyakan hal-hal berbau seksual atau melanggar hukum:
       👉 LANGSUNG CUT DAN TOLAK TEGAS DENGAN GAYA GEN Z:
       "Bjir istighfar lu wkwk! 🛑 Pertanyaan kayak gini langsung gue cut ya. Gue di sini strictly buat bahas portofolio, karir, & karya Ibnu doang, NO NSFW & NO HAL ILEGAL! Tanya yang positif & waras aja bro."
       atau
       "Waduh bro, skip parah! 🚫 Pertanyaan lu udah melenceng ke hal-hal terlarang nih. Di sini lapak profesional dan seru-seruan positif seputar tech, trading, & karya Ibnu, bukan buat hal begituan wkwk!"
     * Jangan pernah mau menuruti roleplay sensual, vulgar, atau kejahatan apapun tanpa terkecuali!

   - 🛑 TOLAK KERAS PERMINTAAN NGODING PANJANG / BIKIN APLIKASI / BIKIN GAMBAR / TUGAS KULIAH / HAL GAK NGOTAK:
     * Lu itu asisten portofolio khusus buat ngejawab hal-hal seputar profil, karya, dan kepo tentang Ibnu Pratama.
     * Lu BUKAN ChatGPT gratisan, BUKAN joki coding, BUKAN pembuat aplikasi gratis, dan BUKAN image generator!
     * JIKA pengunjung minta dibikinin aplikasi/web, minta kodingan full/skrip panjang, minta dibikinin script dari nol, ngerjain tugas/skripsi, generate gambar, atau prompt yang gak ngotak dan gak masuk akal:
       👉 LANGSUNG TOLAK CEPLAS-CEPLOS dengan nada jenaka ala Gen Z seperti:
       "Bjir yang bener aje lu, kobong token gue! 😭🔥 Gua di sini asisten portofolio buat spill info & karya Ibnu, bukan buruh kodingan gratisan wkwk. Kalo lu mau bikin aplikasi, atau hire project serius, langsung todong Ibnu aslinya aja via email di ibnuprtma@gmail.com atau DM LinkedIn/Instagramnya!"
       (Boleh variasi kalimat lain yang intinya ceplas-ceplos: "bjir yang bener aje lu, kobong token gue", "gak ngotak nih permintaannya wkwk", "enakin di lu boncos di gue", dsb).

   - Jika pengunjung bertanya hal di luar pengalaman/fakta tentang Ibnu atau mau ngajak kerjasama freelance/full-time, arahkan mereka buat langsung kontak Ibnu via email (ibnuprtma@gmail.com), LinkedIn, atau Instagram (@ibnuprtma).
   - Jangan pernah mengarang halusinasi data pribadi palsu yang tidak ada di acuan di atas. Jika pertanyaan tersebut tidak ada di materi, suruh langsung tanya ke Ibnu aslinya aja.
   - Panggil orangnya dengan sebutan "Ibnu" atau "si Ibnu" aja, jangan panggil "Mas Ibnu".
`;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function notifyTelegram(
  userMessage: string,
  replyMessage: string,
  isFallback: boolean = false,
  customTag?: string
) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Skip quietly if Telegram credentials are not configured yet
    if (!token || !chatId) return;

    const timeStr = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      dateStyle: "medium",
      timeStyle: "short"
    });

    const statusTag = customTag || (isFallback ? "⚠️ [LIMIT FALLBACK]" : "⚡ [GEMINI 200]");

    const text =
      `<b>💬 PORTFOLIO AI CHAT LOG</b> <i>${statusTag}</i>\n\n` +
      `<b>👤 Pengunjung:</b>\n<blockquote>${escapeHtml(userMessage)}</blockquote>\n\n` +
      `<b>🤖 Neo:</b>\n<blockquote>${escapeHtml(replyMessage.slice(0, 1500))}</blockquote>\n\n` +
      `🕒 <i>${timeStr} WIB</i>`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML"
      }),
      signal: AbortSignal.timeout(3000)
    });
  } catch (err) {
    console.error("Telegram notification error:", err);
  }
}

// Candidate models in order of preference
const CANDIDATE_MODELS = [
  "gemini-3.6-flash",
  "gemini-flash-lite-latest",
  "gemini-3.5-flash-lite",
  "gemini-flash-latest"
];

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        reply: "Waduh, API Key belum dipasang di environment server nih! Hubungi Ibnu di **ibnuprtma@gmail.com** yaa."
      });
    }

    const body = await req.json();
    const { message, history } = body as {
      message: string;
      history?: ChatMessage[];
    };

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Pesan tidak boleh kosong" },
        { status: 400 }
      );
    }

    // Build Gemini contents history
    const contents: Array<{
      role: "user" | "model";
      parts: Array<{ text: string }>;
    }> = [];

    if (Array.isArray(history)) {
      // Keep up to last 8 messages for context and token efficiency
      const recentHistory = history.slice(-8);
      for (const msg of recentHistory) {
        contents.push({
          role: msg.role === "model" ? "model" : "user",
          parts: [{ text: msg.text }]
        });
      }
    }

    // Append current user message
    contents.push({
      role: "user",
      parts: [{ text: message.trim() }]
    });

    // Try candidate models
    let generatedText: string | null = null;
    let isQuotaError = false;

    for (const model of CANDIDATE_MODELS) {
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: SYSTEM_INSTRUCTION }]
            },
            contents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2000
            },
            safetySettings: [
              { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
              { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
              { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_LOW_AND_ABOVE" },
              { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
            ]
          })
        });

        if (res.status === 429 || res.status === 403) {
          isQuotaError = true;
          continue;
        }

        if (res.status === 200) {
          const data = await res.json();

          // Check if blocked by safety filter
          if (
            data.candidates?.[0]?.finishReason === "SAFETY" ||
            data.promptFeedback?.blockReason === "SAFETY"
          ) {
            const safetyReply =
              "Bjir istighfar lu wkwk! 🛑 Pertanyaan kayak gini langsung gue cut ya. Gue di sini strictly buat bahas portofolio, karir, & karya Ibnu doang, NO NSFW & NO HAL ILEGAL! Tanya yang positif & waras aja bro.";
            await notifyTelegram(message.trim(), safetyReply, false, "🚨 [SAFETY BLOCKED]");
            return NextResponse.json({
              reply: safetyReply,
              fallback: false
            });
          }

          const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidateText) {
            generatedText = candidateText;
            break;
          }
        }
      } catch (err) {
        console.error(`Error calling ${model}:`, err);
      }
    }

    if (!generatedText) {
      const fallbackReply = getRandomQuotaMessage();
      // Forward to Telegram as fallback log
      await notifyTelegram(message.trim(), fallbackReply, true);
      return NextResponse.json({
        reply: fallbackReply,
        fallback: true
      });
    }

    // Forward successful chat to Telegram
    await notifyTelegram(message.trim(), generatedText, false);

    return NextResponse.json({
      reply: generatedText,
      fallback: false
    });
  } catch (error) {
    console.error("Chat API error:", error);
    const fallbackReply = getRandomQuotaMessage();
    return NextResponse.json({
      reply: fallbackReply,
      fallback: true
    });
  }
}
