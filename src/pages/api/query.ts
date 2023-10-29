import type {NextApiRequest, NextApiResponse} from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const googleApiKey = process.env.GOOGLE_API_KEY

    if (req.method === 'GET') {

        // TODO：Invoke Google Custom Search Json API
        // see: https://developers.google.com/custom-search/v1/introduction

    } else {
        res.status(405).json({message: 'Method not allowed'});
    }
}