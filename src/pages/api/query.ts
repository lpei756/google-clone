import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

// 定义一个接口来描述可能的响应数据
interface GoogleSearchResponse {
    error?: {
        code: number;
        message: string;
    };
    // ... 其他可能的属性
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const googleApiKey = process.env.GOOGLE_API_KEY;
    const cx = "e2797d1cfb2c9452b";

    if (req.method === 'GET') {
        const query = req.query.q; // 假设你的查询参数名为q

        if (!query) {
            return res.status(400).json({ message: 'Query parameter q is required' });
        }

        const endpoint = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${googleApiKey}&cx=${cx}`;

        try {
            const response = await fetch(endpoint);
            // 使用类型断言来指定 data 的类型
            const data = await response.json() as GoogleSearchResponse;

            if (data.error) {
                return res.status(data.error.code).json(data.error);
            }

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
