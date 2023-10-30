import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

// define an interface
interface GoogleSearchResponse {
    error?: {
        code: number;
        message: string;
    };

}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const googleApiKey = process.env.GOOGLE_API_KEY;
    const cx = "e2797d1cfb2c9452b";

    if (req.method === 'GET') {
        const query = req.query.q;

        if (!query) {
            return res.status(400).json({ message: 'Query parameter q is required' });
        }

        const endpoint = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${googleApiKey}&cx=${cx}`;

        try {
            const response = await fetch(endpoint);
            // Use type assertions to specify the type of data
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
