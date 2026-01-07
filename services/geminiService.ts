
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askJiuriAssistant(userMessage: string) {
  const model = "gemini-3-flash-preview";
  const systemInstruction = `
    你现在是“江苏久日机床科技有限公司”的在线智能助手。
    公司的主要业务是研发、生产、销售大口径直缝埋弧焊管（LSAW）成套生产线装备，核心技术包括 JCOE 和 UOE 成型工艺。
    
    你的任务是协助客户了解我们的核心产品和技术优势：
    - XB-钢板双边铣边机: 用于精密铣削坡口。
    - YW2-钢板双边预弯机: 消除成型死区。
    - JCO成型机: 核心专利装备，8000t-12000t级压力。
    - KJJ-扩径机: 机械扩径，提升管材精度。
    - 各种内外焊机、合缝机及水压试验机。
    
    语气应表现出行业专家的权威性、严谨性和服务热情。
    如果客户询问选型，请强调我们提供全套“交钥匙”工程咨询服务。
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，我现在遇到了一点技术困难。请稍后再试，或直接拨打我们的服务热线：0513-88211688。";
  }
}
