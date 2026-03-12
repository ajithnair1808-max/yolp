import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
export async function POST(req: NextRequest) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const arrayBuffer = await file.arrayBuffer();
    const base64Data = Buffer.from(arrayBuffer).toString('base64');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "Analyze this logistics document and return ONLY a JSON object with keys: type, summary, weight, incoterms, risk_radar (array), and partner_advice.";
    const result = await model.generateContent([{ inlineData: { data: base64Data, mimeType: file.type } }, prompt]);
    return NextResponse.json(JSON.parse(result.response.text().replace(/```json|```/g, "")));
  } catch (e) { return NextResponse.json({ error: "Analysis Failed" }, { status: 500 }); }
}
